/**
 * projects.js içindeki projelere previewMode, thumbnail ve JS files alanlarını ekler.
 * Bir kez çalıştırılır; idempotent.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const projectsPath = join(root, 'src/data/projects.js');

function getProjectFiles(htmlPath) {
	const dir = join(root, 'public', dirname(htmlPath.slice(1)));
	if (!existsSync(dir)) return [];

	const entries = readdirSync(dir).filter((f) => !f.startsWith('.') && !f.includes(' copy'));
	const result = [];

	const html = entries.find((f) => f === 'index.html');
	const js = entries.find((f) => f.endsWith('.js') && !f.toLowerCase().includes('freecodecamp'));
	const css = entries.find((f) => f.endsWith('.css'));

	if (js) {
		result.push({
			path: join(dirname(htmlPath), js).replace(/\\/g, '/'),
			label: 'JavaScript',
			lang: 'javascript',
		});
	}
	if (html) {
		result.push({
			path: htmlPath,
			label: 'HTML',
			lang: 'html',
		});
	}
	if (css) {
		result.push({
			path: join(dirname(htmlPath), css).replace(/\\/g, '/'),
			label: 'CSS',
			lang: 'css',
		});
	}
	return result;
}

function formatFiles(files) {
	const lines = files.map(
		(f) =>
			`\t\t\t{ path: '${f.path}', label: '${f.label}', lang: '${f.lang}' },`,
	);
	return `[\n${lines.join('\n')}\n\t\t]`;
}

let content = readFileSync(projectsPath, 'utf8');

// Her proje bloğunu işle
content = content.replace(
	/\{(\n\t\tid: '[^']+',[\s\S]*?\n\t\}),/g,
	(match) => {
		if (match.includes('previewMode:')) return match;

		const idMatch = match.match(/id: '([^']+)'/);
		const catMatch = match.match(/category: '([^']+)'/);
		const pathMatch = match.match(/path: '([^']+)'/);
		if (!idMatch || !catMatch || !pathMatch) return match;

		const id = idMatch[1];
		const category = catMatch[1];
		const path = pathMatch[1];

		if (category === 'JavaScript') {
			const files = getProjectFiles(path);
			const insert = `\n\t\tpreviewMode: 'code',\n\t\tfiles: ${formatFiles(files)},`;
			return match.replace(/(\n\t\}),/, `${insert}$1,`);
		}

		if (category === 'CSS') {
			const insert = `\n\t\tpreviewMode: 'iframe',\n\t\tthumbnail: '/previews/${id}.png',`;
			return match.replace(/(\n\t\}),/, `${insert}$1,`);
		}

		return match;
	},
);

// Header comment güncelle
content = content.replace(
	/\*   cover     — \{ gradient, accent, pattern \}/,
	`*   cover     — { gradient, accent, pattern }
 *   previewMode — 'iframe' | 'code'
 *   thumbnail   — /previews/{id}.webp (CSS)
 *   files       — kod modalı dosya listesi (JS)`,
);

writeFileSync(projectsPath, content);
console.log('projects.js patched successfully');
