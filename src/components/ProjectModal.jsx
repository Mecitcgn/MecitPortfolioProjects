import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
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

	return (
		<div
			className="modal-overlay"
			onClick={(e) => e.target === e.currentTarget && onClose()}
		>
			<div className="modal-box">
				{/* ── DESKTOP HEADER (orijinal tek satır) ── */}
				<div className="modal-header modal-header-desktop">
					<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
						<span
							style={{
								fontFamily: "'DM Mono',monospace",
								fontSize: 10,
								letterSpacing: '.22em',
								textTransform: 'uppercase',
								color: 'var(--acc)',
							}}
						>
							◈ Canlı Önizleme
						</span>
						<span
							style={{
								fontFamily: "'Bebas Neue',sans-serif",
								fontSize: 22,
								letterSpacing: '.03em',
							}}
						>
							{project.title}
						</span>
						<span
							style={{
								display: 'inline-flex',
								alignItems: 'center',
								padding: '3px 10px',
								background: 'rgba(255,255,255,.03)',
								border: '1px solid var(--b2)',
								fontFamily: "'DM Mono',monospace",
								fontSize: 10,
								color: 'var(--t2)',
								borderRadius: 2,
							}}
						>
							{project.sub}
						</span>
					</div>
					<div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
						<button
							className="btn-a"
							onClick={() => window.open(project.path, '_blank')}
						>
							Yeni Sekmede Aç ↗
						</button>
						<button className="modal-close" onClick={onClose}>
							×
						</button>
					</div>
				</div>

				{/* ── MOBİLE HEADER (3 satır) ── */}
				<div className="modal-header modal-header-mobile">
					<div className="modal-row">
						<span className="modal-label">◈ Canlı Önizleme</span>
						<button className="modal-close" onClick={onClose}>
							×
						</button>
					</div>
					<div className="modal-row">
						<span className="modal-title">{project.title}</span>
						<button
							className="btn-a"
							onClick={() => window.open(project.path, '_blank')}
						>
							Yeni Sekmede Aç ↗
						</button>
					</div>
					<div className="modal-row">
						<span className="modal-sub">{project.sub}</span>
					</div>
				</div>

				<iframe
					className="modal-iframe"
					src={project.path}
					title={project.title}
					sandbox="allow-scripts allow-same-origin allow-forms"
				/>
			</div>
		</div>
	);
}
