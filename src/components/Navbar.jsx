/**
 * Projeler Navbar
 * Portfolyo sitesine geri dönmek için link içerir.
 * PORTFOLIO_URL'yi portfolyo sitenizin gerçek adresiyle değiştirin.
 */

// Portfolyo sitenizin Vercel URL'si — deploy ettikten sonra güncelleyin
export const PORTFOLIO_URL = 'https://mecit-portfolio.vercel.app/';

export default function Navbar() {
	return (
		<nav className="nav">
			<div className="nav-in">
				<button
					className="nav-logo"
					onClick={() => window.open(PORTFOLIO_URL, '_blank')}
				>
					<img src="src/assets/MecitLogo.png" alt="" />
				</button>
				<div className="nav-links">
					<span className="nl act">Projeler</span>
					<button
						className="nav-cta"
						onClick={() => window.open(PORTFOLIO_URL, '_blank')}
					>
						Portfolyo ↗
					</button>
				</div>
			</div>
		</nav>
	);
}
