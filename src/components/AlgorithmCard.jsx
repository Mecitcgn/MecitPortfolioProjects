export default function AlgorithmCard({ algorithm, index, onClick }) {
	const lines = (algorithm.snippet || '')
		.split('\n')
		.slice(0, 5)
		.map((l) => l.slice(0, 60));

	return (
		<div className="ac" onClick={() => onClick(algorithm)}>
			<div className="ac-terminal">
				<div className="ac-dots">
					<span />
					<span />
					<span />
				</div>
				<span className="ac-filename">
					{algorithm.path.split('/').pop()}
				</span>
				<span className="ac-badge">fn()</span>
			</div>
			<pre className="ac-code">
				{lines.map((line, i) => (
					<span key={i} className="ac-line">
						<span className="ac-ln">{i + 1}</span>
						{line || ' '}
					</span>
				))}
			</pre>
			<div className="ac-body">
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginBottom: 8,
					}}
				>
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
						{algorithm.sub}
					</span>
					<span
						style={{
							fontFamily: "'DM Mono',monospace",
							fontSize: 10,
							color: 'var(--t3)',
						}}
					>
						{String(index + 1).padStart(2, '0')}
					</span>
				</div>
				<h3
					style={{
						fontFamily: "'Bebas Neue',sans-serif",
						fontSize: 20,
						letterSpacing: '.03em',
						marginBottom: 6,
					}}
				>
					{algorithm.title}
				</h3>
				<p
					style={{
						fontFamily: "'Outfit',sans-serif",
						fontSize: 12,
						color: 'var(--t2)',
						lineHeight: 1.6,
						marginBottom: 10,
					}}
				>
					{algorithm.description}
				</p>
				{algorithm.concepts?.length > 0 && (
					<div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
						{algorithm.concepts.map((c) => (
							<span key={c} className="ac-concept">
								{c}
							</span>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
