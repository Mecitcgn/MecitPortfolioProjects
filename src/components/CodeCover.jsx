import { useEffect, useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const coverStyle = {
	...oneDark,
	'pre[class*="language-"]': {
		...oneDark['pre[class*="language-"]'],
		margin: 0,
		padding: '14px 12px',
		background: '#0d1117',
		fontSize: '9px',
		lineHeight: '1.45',
		height: '100%',
		overflow: 'hidden',
	},
	'code[class*="language-"]': {
		...oneDark['code[class*="language-"]'],
		fontFamily: "'DM Mono', monospace",
	},
};

const MAX_LINES = 16;

function pickPrimaryFile(files = []) {
	return (
		files.find((f) => f.lang === 'javascript') ||
		files.find((f) => /\.jsx?$/.test(f.path)) ||
		files[0]
	);
}

function trimCode(text) {
	return text.split('\n').slice(0, MAX_LINES).join('\n').trimEnd();
}

export default function CodeCover({ project }) {
	const rootRef = useRef(null);
	const [code, setCode] = useState('');
	const [lang, setLang] = useState('javascript');
	const primary = pickPrimaryFile(project.files);

	useEffect(() => {
		if (!primary) return;

		const node = rootRef.current;
		if (!node) return;

		let cancelled = false;

		const load = () => {
			fetch(primary.path)
				.then((res) => (res.ok ? res.text() : ''))
				.then((text) => {
					if (cancelled || !text) return;
					setLang(primary.lang || 'javascript');
					setCode(trimCode(text));
				})
				.catch(() => {});
		};

		if (typeof IntersectionObserver === 'undefined') {
			load();
			return () => {
				cancelled = true;
			};
		}

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((entry) => entry.isIntersecting)) {
					load();
					observer.disconnect();
				}
			},
			{ rootMargin: '120px' },
		);

		observer.observe(node);
		return () => {
			cancelled = true;
			observer.disconnect();
		};
	}, [primary?.path, primary?.lang]);

	return (
		<div ref={rootRef} className="pc-code-cover">
			{code ? (
				<SyntaxHighlighter
					language={lang}
					style={coverStyle}
					showLineNumbers={false}
					wrapLongLines
				>
					{code}
				</SyntaxHighlighter>
			) : (
				<div className="pc-code-cover-skeleton" aria-hidden="true" />
			)}
		</div>
	);
}
