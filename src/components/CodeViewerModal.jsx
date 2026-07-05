import { useState, useEffect, useCallback } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const customStyle = {
	...oneDark,
	'pre[class*="language-"]': {
		...oneDark['pre[class*="language-"]'],
		margin: 0,
		padding: '20px 0',
		background: '#0d1117',
		fontSize: '13px',
		lineHeight: '1.6',
	},
	'code[class*="language-"]': {
		...oneDark['code[class*="language-"]'],
		fontFamily: "'DM Mono', monospace",
	},
};

export default function CodeViewerModal({
	project,
	onClose,
	showDemoTab = true,
}) {
	const [mainTab, setMainTab] = useState('code');
	const [fileIndex, setFileIndex] = useState(0);
	const [contents, setContents] = useState({});
	const [loading, setLoading] = useState(true);
	const [copied, setCopied] = useState(false);

	const files = project.files || [
		{
			path: project.path,
			label: 'JavaScript',
			lang: project.lang || 'javascript',
		},
	];

	useEffect(() => {
		const fn = (e) => e.key === 'Escape' && onClose();
		window.addEventListener('keydown', fn);
		return () => window.removeEventListener('keydown', fn);
	}, [onClose]);

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = '';
		};
	}, []);

	useEffect(() => {
		let cancelled = false;
		setLoading(true);
		Promise.all(
			files.map(async (f) => {
				const res = await fetch(f.path);
				const text = await res.text();
				return [f.path, text];
			}),
		).then((pairs) => {
			if (cancelled) return;
			const map = {};
			for (const [path, text] of pairs) map[path] = text;
			setContents(map);
			setLoading(false);
		});
		return () => {
			cancelled = true;
		};
	}, [project.id]);

	const activeFile = files[fileIndex];
	const activeContent = contents[activeFile?.path] || '';

	const handleCopy = useCallback(async () => {
		try {
			await navigator.clipboard.writeText(activeContent);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			/* clipboard unavailable */
		}
	}, [activeContent]);

	const demoPath =
		project.path?.endsWith('.html') || project.path?.endsWith('/index.html')
			? project.path
			: files.find((f) => f.lang === 'html')?.path;

	return (
		<div
			className="modal-overlay"
			onClick={(e) => e.target === e.currentTarget && onClose()}
		>
			<div className="modal-box code-modal-box">
				<div className="modal-header modal-header-desktop">
					<div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 0 }}>
						<span className="modal-label">◈ Kod Görüntüleyici</span>
						<span
							style={{
								fontFamily: "'Bebas Neue',sans-serif",
								fontSize: 22,
								letterSpacing: '.03em',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
							}}
						>
							{project.title}
						</span>
						<span className="modal-sub">{project.sub}</span>
					</div>
					<div style={{ display: 'flex', gap: 10, alignItems: 'center', flexShrink: 0 }}>
						{demoPath && (
							<button
								className="btn-a"
								onClick={() => window.open(demoPath, '_blank')}
							>
								Yeni Sekmede Aç ↗
							</button>
						)}
						<button className="modal-close" onClick={onClose}>
							×
						</button>
					</div>
				</div>

				<div className="modal-header modal-header-mobile">
					<div className="modal-row">
						<span className="modal-label">◈ Kod Görüntüleyici</span>
						<button className="modal-close" onClick={onClose}>
							×
						</button>
					</div>
					<div className="modal-row">
						<span className="modal-title">{project.title}</span>
						{demoPath && (
							<button
								className="btn-a"
								onClick={() => window.open(demoPath, '_blank')}
							>
								Aç ↗
							</button>
						)}
					</div>
					<div className="modal-row">
						<span className="modal-sub">{project.sub}</span>
					</div>
				</div>

				{showDemoTab && demoPath && (
					<div className="code-main-tabs">
						<button
							className={`code-main-tab${mainTab === 'code' ? ' act' : ''}`}
							onClick={() => setMainTab('code')}
						>
							Kod
						</button>
						<button
							className={`code-main-tab${mainTab === 'demo' ? ' act' : ''}`}
							onClick={() => setMainTab('demo')}
						>
							Canlı Demo
						</button>
					</div>
				)}

				{mainTab === 'code' ? (
					<div className="code-viewer-body">
						<div className="code-file-tabs">
							{files.map((f, i) => (
								<button
									key={f.path}
									className={`code-file-tab${fileIndex === i ? ' act' : ''}`}
									onClick={() => setFileIndex(i)}
								>
									{f.label}
								</button>
							))}
							<button className="code-copy-btn" onClick={handleCopy}>
								{copied ? 'Kopyalandı ✓' : 'Kopyala'}
							</button>
						</div>
						<div className="code-scroll">
							{loading ? (
								<div className="code-loading">Yükleniyor…</div>
							) : (
								<SyntaxHighlighter
									language={activeFile.lang}
									style={customStyle}
									showLineNumbers
									wrapLongLines
								>
									{activeContent}
								</SyntaxHighlighter>
							)}
						</div>
					</div>
				) : (
					<iframe
						className="modal-iframe"
						src={demoPath}
						title={`${project.title} demo`}
						sandbox="allow-scripts allow-same-origin allow-forms"
					/>
				)}
			</div>
		</div>
	);
}
