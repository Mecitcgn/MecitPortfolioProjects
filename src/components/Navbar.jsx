/**
 * Demo Hub Navbar
 * Portfolyo sitesine geri dönmek için link içerir.
 * PORTFOLIO_URL'yi portfolyo sitenizin gerçek adresiyle değiştirin.
 */

// Portfolyo sitenizin Vercel URL'si — deploy ettikten sonra güncelleyin
export const PORTFOLIO_URL = 'https://mecit-cagan.vercel.app';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-in">
        <button className="nav-logo" onClick={() => window.open(PORTFOLIO_URL, '_blank')}>
          MC
        </button>
        <div className="nav-links">
          <button className="nl" onClick={() => window.open(PORTFOLIO_URL, '_blank')}>
            Portfolyo ↗
          </button>
          <span className="nl act">Demo Hub</span>
          <button className="nav-cta" onClick={() => window.open(PORTFOLIO_URL, '_blank')}>
            Portfolio ↗
          </button>
        </div>
      </div>
    </nav>
  );
}
