/**
 * ProjectCard — Projeler proje kartı.
 * Thumbnail varsa gerçek önizleme, yoksa gradient cover fallback.
 */

import { useState } from 'react';
import CodeCover from './CodeCover.jsx';

function ProjectCover({ cover, num }) {
	const { gradient, accent, pattern } = cover;
	const patterns = {
		circles: <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id={`p-${num}-c`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="20" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.25"/><circle cx="30" cy="30" r="10" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.15"/></pattern></defs><rect width="100%" height="100%" fill={`url(#p-${num}-c)`}/></svg>,
		dots: <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id={`p-${num}-d`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="12" cy="12" r="1.5" fill={accent} opacity="0.2"/></pattern></defs><rect width="100%" height="100%" fill={`url(#p-${num}-d)`}/></svg>,
		diagonal: <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id={`p-${num}-diag`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="40" stroke={accent} strokeWidth="0.5" opacity="0.2"/></pattern></defs><rect width="100%" height="100%" fill={`url(#p-${num}-diag)`}/></svg>,
		hex: <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id={`p-${num}-h`} x="0" y="0" width="52" height="60" patternUnits="userSpaceOnUse"><polygon points="26,2 50,14 50,46 26,58 2,46 2,14" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.2"/></pattern></defs><rect width="100%" height="100%" fill={`url(#p-${num}-h)`}/></svg>,
		waves: <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id={`p-${num}-w`} x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse"><path d="M0,20 Q20,0 40,20 Q60,40 80,20" fill="none" stroke={accent} strokeWidth="0.7" opacity="0.2"/></pattern></defs><rect width="100%" height="100%" fill={`url(#p-${num}-w)`}/></svg>,
		rings: <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><circle cx="50%" cy="50%" r="80" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.18"/><circle cx="50%" cy="50%" r="55" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.14"/><circle cx="50%" cy="50%" r="30" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.1"/></svg>,
		grid: <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id={`p-${num}-g`} x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0 L0 0 0 32" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.2"/></pattern></defs><rect width="100%" height="100%" fill={`url(#p-${num}-g)`}/></svg>,
		spectrum: <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id={`sg-${num}`} x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#f472b6" stopOpacity="0.3"/><stop offset="25%" stopColor="#a855f7" stopOpacity="0.3"/><stop offset="50%" stopColor="#38bdf8" stopOpacity="0.3"/><stop offset="75%" stopColor="#4ade80" stopOpacity="0.3"/><stop offset="100%" stopColor="#facc15" stopOpacity="0.3"/></linearGradient></defs><rect width="100%" height="8" y="0%" fill={`url(#sg-${num})`}/><rect width="100%" height="8" y="16%" fill={`url(#sg-${num})`}/><rect width="100%" height="8" y="32%" fill={`url(#sg-${num})`}/><rect width="100%" height="8" y="48%" fill={`url(#sg-${num})`}/><rect width="100%" height="8" y="64%" fill={`url(#sg-${num})`}/><rect width="100%" height="8" y="80%" fill={`url(#sg-${num})`}/></svg>,
	};
	return (
		<div style={{ position:'absolute', inset:0, background:gradient }}>
			<div style={{ position:'absolute', inset:0, overflow:'hidden' }}>{patterns[pattern]}</div>
			<div style={{ position:'absolute', bottom:'-20%', right:'-10%', width:'60%', aspectRatio:'1', borderRadius:'50%', background:`radial-gradient(circle,${accent}22 0%,transparent 70%)`, filter:'blur(20px)' }}/>
			<div style={{ position:'absolute', top:0, left:0, width:40, height:2, background:accent, opacity:0.6 }}/>
			<div style={{ position:'absolute', top:0, left:0, width:2, height:40, background:accent, opacity:0.6 }}/>
		</div>
	);
}

export default function ProjectCard({ project, index, onClick }) {
	const [thumbLoaded, setThumbLoaded] = useState(false);
	const [thumbError, setThumbError] = useState(false);
	const hasCover = !!project.cover;
	const hasThumb = project.thumbnail && !thumbError;
	const isCodePreview = project.previewMode === 'code';
	const showNumber = !hasThumb && !isCodePreview;
	const num = String(index + 1).padStart(2, '0');

	return (
		<div className="pc" onClick={() => onClick(project)}>
			<div className="pc-cover">
				{hasThumb ? (
					<>
						{!thumbLoaded && hasCover && (
							<ProjectCover cover={project.cover} num={num} />
						)}
						<img
							className={`pc-thumb${thumbLoaded ? ' loaded' : ''}`}
							src={project.thumbnail}
							alt={`${project.title} önizleme`}
							loading="lazy"
							onLoad={() => setThumbLoaded(true)}
							onError={() => setThumbError(true)}
						/>
						<div className="pc-thumb-overlay" />
					</>
				) : isCodePreview ? (
					<>
						{hasCover && <ProjectCover cover={project.cover} num={num} />}
						<CodeCover project={project} />
					</>
				) : (
					hasCover && <ProjectCover cover={project.cover} num={num} />
				)}
				{showNumber && (
					<span
						className="pc-num"
						style={hasCover ? { color: project.cover.accent, opacity: 0.18 } : {}}
					>
						{num}
					</span>
				)}
				{isCodePreview && (
					<span className="pc-mode-badge">◈ Kod</span>
				)}
				<div className="pc-arrow">↗</div>
			</div>
			<div className="pc-body">
				<div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 }}>
					<span style={{ display:'inline-flex', alignItems:'center', padding:'3px 10px', background:'rgba(255,255,255,.03)', border:'1px solid var(--b2)', fontFamily:"'DM Mono',monospace", fontSize:10, color:'var(--t2)', borderRadius:2 }}>
						{project.sub}
					</span>
					{project.mine && (
						<span style={{ display:'inline-flex', alignItems:'center', padding:'3px 10px', background:'var(--abg)', border:'1px solid var(--abdr)', fontFamily:"'DM Mono',monospace", fontSize:10, color:'var(--acc)', borderRadius:2 }}>
							mine
						</span>
					)}
				</div>
				<h3 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, letterSpacing:'.03em', marginBottom:8 }}>
					{project.title}
				</h3>
				<p style={{ fontFamily:"'Outfit',sans-serif", fontSize:13, color:'var(--t2)', lineHeight:1.65, marginBottom:14 }}>
					{project.description}
				</p>
				<div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
					{project.tech.map((t) => (
						<span key={t} style={{ display:'inline-flex', alignItems:'center', padding:'3px 10px', background:'var(--abg)', border:'1px solid var(--abdr)', fontFamily:"'DM Mono',monospace", fontSize:10, color:'var(--acc)', borderRadius:2 }}>
							{t}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
