/**
 * Playwright ile CSS (ve isteğe bağlı JS) projelerinin screenshot'larını üretir.
 * Kullanım: npm run generate:previews
 */
import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'public/previews');

const PORT = 5173;
const BASE = `http://localhost:${PORT}`;

async function getProjects() {
	const { PROJECTS } = await import(join(root, 'src/data/projects.js'));
	return PROJECTS.filter(
		(p) => p.thumbnail || p.previewMode === 'iframe' || p.category === 'CSS',
	);
}

function waitForServer(url, timeout = 30000) {
	const start = Date.now();
	return new Promise((resolve, reject) => {
		const check = async () => {
			try {
				const res = await fetch(url);
				if (res.ok) return resolve();
			} catch {
				/* not ready */
			}
			if (Date.now() - start > timeout) {
				return reject(new Error('Vite server timeout'));
			}
			setTimeout(check, 500);
		};
		check();
	});
}

function startVite() {
	const proc = spawn('npx', ['vite', '--port', String(PORT)], {
		cwd: root,
		stdio: 'pipe',
		shell: true,
	});
	return proc;
}

async function main() {
	mkdirSync(outDir, { recursive: true });
	const projects = await getProjects();
	console.log(`Generating ${projects.length} previews…`);

	let vite = null;
	let startedVite = false;

	try {
		await fetch(BASE);
		console.log(`Using existing dev server at ${BASE}`);
	} catch {
		vite = startVite();
		startedVite = true;
		await waitForServer(BASE);
	}

	try {
		const browser = await chromium.launch();
		const context = await browser.newContext({
			viewport: { width: 1280, height: 720 },
			deviceScaleFactor: 1,
		});
		const page = await context.newPage();

		let ok = 0;
		let fail = 0;

		for (const project of projects) {
			const outPath = join(outDir, `${project.id}.png`);
			try {
				await page.goto(`${BASE}${project.path}`, {
					waitUntil: 'networkidle',
					timeout: 20000,
				});
				await page.waitForTimeout(600);
				await page.screenshot({
					path: outPath,
					type: 'png',
					fullPage: false,
				});
				console.log(`  ✓ ${project.id}`);
				ok++;
			} catch (err) {
				console.warn(`  ✗ ${project.id}: ${err.message}`);
				fail++;
			}
		}

		await browser.close();
		console.log(`\nDone: ${ok} ok, ${fail} failed → ${outDir}`);
	} finally {
		if (startedVite && vite) vite.kill('SIGTERM');
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
