/**
 * public/projects/JS altındaki algoritma scriptlerini tarar ve
 * src/data/algorithms.generated.js üretir.
 */
import {
	readFileSync,
	writeFileSync,
	readdirSync,
	existsSync,
	statSync,
} from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const jsRoot = join(root, 'public/projects/JS');
const outPath = join(root, 'src/data/algorithms.generated.js');

const SKIP_DIRS = new Set(['FontAwesomeWeb']);
const VISUAL_SKIP = /^(freecodecampscript|script copy)/i;

const SUB_MAP = {
	Arrays: 'Arrays',
	'Booleans And Numbers': 'Booleans & Numbers',
	ClosureExercises: 'Closures',
	Date: 'Date',
	'filter+reduce+mapPractice': 'Map / Filter / Reduce',
	Functions: 'Functions',
	fundameltalsReview: 'Fundamentals',
	higherOrderFunctionsAndCallbacks: 'Higher-Order Functions',
	Loops: 'Loops',
	MapsAndSets: 'Maps & Sets',
	Objects: 'Objects',
	'Variables And Strings': 'Variables & Strings',
};

function titleFromFilename(name) {
	const base = basename(name, '.js');
	if (/^[1-5]$/.test(base)) return `Exercise ${base}`;
	return base
		.replace(/([A-Z])/g, ' $1')
		.replace(/Benim|CHATGPT|ChatGPT/gi, '')
		.replace(/[-_]/g, ' ')
		.trim()
		.replace(/\b\w/g, (c) => c.toUpperCase())
		.replace(/\s+/g, ' ');
}

function slugify(str) {
	return str
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

function hasIndexHtml(dir) {
	return existsSync(join(dir, 'index.html'));
}

function getSub(relPath) {
	const parts = relPath.split('/');
	const top = parts[0];
	if (parts.length >= 2 && SUB_MAP[`${top}/${parts[1]}`]) {
		return SUB_MAP[`${top}/${parts[1]}`];
	}
	return SUB_MAP[top] || top.replace(/([A-Z])/g, ' $1').trim();
}

function inferConcepts(source) {
	const concepts = [];
	if (/\bfor\b|\bwhile\b/.test(source)) concepts.push('loops');
	if (/\bfunction\b|=>/.test(source)) concepts.push('functions');
	if (/\.map\(|\.filter\(|\.reduce\(/.test(source)) concepts.push('array methods');
	if (/\bSet\b|\bMap\b|\bWeakMap\b|\bWeakSet\b/.test(source))
		concepts.push('data structures');
	if (/RegExp|\/[^/]+\/[gim]*/.test(source)) concepts.push('regex');
	if (/\brecurs/i.test(source)) concepts.push('recursion');
	if (/\bclosure\b/i.test(source)) concepts.push('closures');
	return [...new Set(concepts)];
}

function collectJsFiles(dir, relBase = '') {
	const results = [];
	for (const entry of readdirSync(dir).filter((e) => !e.startsWith('.'))) {
		if (SKIP_DIRS.has(entry)) continue;
		const full = join(dir, entry);
		const rel = relBase ? `${relBase}/${entry}` : entry;
		const stat = statSync(full);

		if (stat.isDirectory()) {
			if (!hasIndexHtml(full)) {
				results.push(...collectJsFiles(full, rel));
			}
			continue;
		}

		if (!entry.endsWith('.js')) continue;
		if (VISUAL_SKIP.test(entry)) continue;

		const parentDir = dirname(full);
		if (hasIndexHtml(parentDir)) continue;

		const source = readFileSync(full, 'utf8');
		const snippet = source
			.split('\n')
			.filter((l) => {
				const t = l.trim();
				return t && !t.startsWith('//') && !t.startsWith('/*') && !t.startsWith('*');
			})
			.slice(0, 5)
			.join('\n')
			.slice(0, 220);

		results.push({
			id: slugify(`${getSub(rel)}-${basename(entry, '.js')}`),
			title: titleFromFilename(entry),
			sub: getSub(rel),
			path: `/projects/JS/${rel.replace(/\\/g, '/')}`,
			lang: 'javascript',
			concepts: inferConcepts(source),
			description: `${getSub(rel)} algoritma egzersizi`,
			mine: !/chatgpt/i.test(entry) && !/^fc/i.test(entry),
			snippet,
			_baseName: basename(entry, '.js').replace(/Benim|CHATGPT|ChatGPT/gi, ''),
			_folder: dirname(rel),
		});
	}
	return results;
}

let algorithms = collectJsFiles(jsRoot);

// Benim/ChatGPT çiftlerinde yalnızca Benim'i tut
const variantKey = (a) => `${a._folder}::${a._baseName.toLowerCase()}`;
const byVariant = new Map();
for (const algo of algorithms) {
	const key = variantKey(algo);
	const existing = byVariant.get(key);
	if (!existing) {
		byVariant.set(key, algo);
		continue;
	}
	if (algo.mine && !existing.mine) byVariant.set(key, algo);
}

algorithms = [...byVariant.values()].map(({ _baseName, _folder, ...rest }) => rest);

// Benzersiz id
const seenIds = new Set();
for (const a of algorithms) {
	let id = a.id;
	let i = 2;
	while (seenIds.has(id)) {
		id = `${a.id}-${i++}`;
	}
	a.id = id;
	seenIds.add(id);
}

algorithms.sort((a, b) => a.title.localeCompare(b.title, 'tr', { sensitivity: 'base' }));

const subs = [...new Set(algorithms.map((a) => a.sub))].sort();

const output = `/**
 * OTOMATİK ÜRETİLDİ — scripts/generate-algorithms.mjs
 * Elle düzenleme yapma. Yeniden üret: npm run generate:algorithms
 */
export const GENERATED_ALGORITHMS = ${JSON.stringify(algorithms, null, '\t')};

export const GENERATED_ALGO_SUBS = ${JSON.stringify(['Tümü', ...subs], null, '\t')};
`;

writeFileSync(outPath, output);
console.log(`Generated ${algorithms.length} algorithms → ${outPath}`);
