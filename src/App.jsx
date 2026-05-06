import { useState, useMemo } from 'react';
import { ToastProvider } from './hooks/useToast';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { PROJECTS, CATEGORIES, CSS_SUBS, JS_SUBS } from './data/projects';
import './styles/globals.css';

/**
 * Demo Hub — Ana sayfa.
 * Tüm projeler filtrelenebilir ve iframe modal ile görüntülenebilir.
 */
export default function App() {
  const [catFilter, setCatFilter] = useState('Tümü');
  const [subFilter, setSubFilter] = useState('Tümü');
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Alt kategoriler aktif ana kategoriye göre değişir
  const subCategories = useMemo(() => {
    if (catFilter === 'CSS') return CSS_SUBS;
    if (catFilter === 'JavaScript') return JS_SUBS;
    return ['Tümü'];
  }, [catFilter]);

  // Filtreli proje listesi
  const filtered = useMemo(() => {
    let list = catFilter === 'Tümü' ? PROJECTS : PROJECTS.filter((p) => p.category === catFilter);
    if (subFilter !== 'Tümü') list = list.filter((p) => p.sub === subFilter);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.sub.toLowerCase().includes(q) ||
          p.tech.some((t) => t.toLowerCase().includes(q)),
      );
    }
    return list;
  }, [catFilter, subFilter, search]);

  const handleCatChange = (cat) => {
    setCatFilter(cat);
    setSubFilter('Tümü'); // alt kategoriyi sıfırla
  };

  return (
    <ToastProvider>
      <div>
        <Navbar />

        {/* ── HERO ── */}
        <section style={{ padding:'80px 24px 60px', maxWidth:1200, margin:'0 auto' }}>
          <div className="a1" style={{ display:'flex', alignItems:'center', gap:12, marginBottom:28 }}>
            <span style={{ width:32, height:1, background:'var(--acc)', display:'block' }}/>
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--acc)' }}>
              Demo Hub
            </span>
          </div>
          <div className="a2" style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(60px,9vw,130px)', lineHeight:.9, letterSpacing:'.01em', marginBottom:24 }}>
            TÜM<br/>
            <span style={{ color:'var(--acc)' }}>PROJELER</span>
          </div>
          <p className="a3" style={{ fontFamily:"'DM Mono',monospace", fontSize:12, color:'var(--t2)', maxWidth:460, lineHeight:1.9 }}>
            Projeye tıklayarak canlı önizleme aç.
            <br />
            Yeni sekmede açmak için modal içindeki butonu kullan.
          </p>

          {/* İstatistikler */}
          <div className="a4" style={{ display:'flex', gap:40, marginTop:40 }}>
            {[
              { label:'Toplam Proje', val: PROJECTS.length },
              { label:'CSS', val: PROJECTS.filter(p => p.category === 'CSS').length },
              { label:'JavaScript', val: PROJECTS.filter(p => p.category === 'JavaScript').length },
              { label:'Benim', val: PROJECTS.filter(p => p.mine).length },
            ].map(({ label, val }) => (
              <div key={label}>
                <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:40, lineHeight:1, color:'var(--acc)' }}>{val}</div>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:'var(--t3)', letterSpacing:'.15em', textTransform:'uppercase', marginTop:4 }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div style={{ height:1, background:'var(--b1)' }}/>

        {/* ── FILTER BAR ── */}
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'28px 24px', display:'flex', flexDirection:'column', gap:14 }}>
          {/* Ana kategori */}
          <div style={{ display:'flex', gap:8, flexWrap:'wrap', alignItems:'center' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`fb${catFilter === cat ? ' act' : ''}`}
                onClick={() => handleCatChange(cat)}
              >
                {cat}
                <span style={{ marginLeft:6, opacity:.55 }}>
                  ({cat === 'Tümü' ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length})
                </span>
              </button>
            ))}
          </div>

          {/* Alt kategori (sadece CSS veya JS seçiliyse) */}
          {catFilter !== 'Tümü' && (
            <div style={{ display:'flex', gap:6, flexWrap:'wrap', alignItems:'center' }}>
              {subCategories.map((sub) => (
                <button
                  key={sub}
                  className={`fb${subFilter === sub ? ' act' : ''}`}
                  style={{ padding:'4px 12px', fontSize:10 }}
                  onClick={() => setSubFilter(sub)}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          {/* Arama + sonuç sayısı */}
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:10 }}>
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:'var(--t3)' }}>
              {filtered.length !== PROJECTS.length && `${filtered.length} sonuç`}
            </span>
            <input
              className="search"
              type="text"
              placeholder="Proje ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* ── GRID ── */}
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px 100px' }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign:'center', padding:'80px 0' }}>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:56, color:'var(--t3)', marginBottom:16 }}>OOF</div>
              <p style={{ fontFamily:"'DM Mono',monospace", fontSize:12, color:'var(--t3)' }}>
                Arama kriterine uyan proje bulunamadı.
              </p>
              <button
                className="btn-g"
                style={{ marginTop:24 }}
                onClick={() => { handleCatChange('Tümü'); setSearch(''); }}
              >
                Sıfırla
              </button>
            </div>
          ) : (
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:20 }}>
              {filtered.map((project, i) => (
                <div key={project.id} className={`a${Math.min(i + 1, 5)}`}>
                  <ProjectCard project={project} index={i} onClick={setSelectedProject} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop:'1px solid var(--b1)', padding:'32px 24px', maxWidth:1200, margin:'0 auto' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:'var(--t3)', letterSpacing:'.12em', textTransform:'uppercase' }}>
              © 2024 Mecit Çağan — Demo Hub
            </span>
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:'var(--t3)' }}>
              Frontend Developer
            </span>
          </div>
        </footer>
      </div>

      {/* ── MODAL ── */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </ToastProvider>
  );
}
