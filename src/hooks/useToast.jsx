import { createContext, useContext, useState, useRef, useCallback } from 'react';

const ToastCtx = createContext(null);
export const useToast = () => useContext(ToastCtx);

function ToastUI({ data, onDone }) {
  const [leaving, setLeaving] = useState(false);
  const close = () => { setLeaving(true); setTimeout(onDone, 300); };
  return (
    <div className="toast-wrap">
      <div className={`toast-box${leaving ? ' out' : ''}`}>
        <div className="toast-prog" />
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
          <span style={{ fontFamily:'var(--fm)', fontSize:10, letterSpacing:'.22em', textTransform:'uppercase', color:'var(--acc)' }}>
            ◈ Bildirim
          </span>
          <button onClick={close} style={{ background:'none', border:'none', color:'var(--t2)', fontSize:18, cursor:'pointer', lineHeight:1, padding:'0 2px' }}>×</button>
        </div>
        <p style={{ fontFamily:'var(--fb)', fontSize:13, color:'var(--t)', lineHeight:1.7, marginBottom:14 }}>{data.message}</p>
        {data.action && (
          <button className="btn-a" onClick={() => { data.action.fn(); close(); }}>
            → {data.action.label}
          </button>
        )}
      </div>
    </div>
  );
}

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const timer = useRef(null);
  const show = useCallback((message, action) => {
    if (timer.current) clearTimeout(timer.current);
    setToast({ message, action, key: Date.now() });
    timer.current = setTimeout(() => setToast(null), 4400);
  }, []);
  return (
    <ToastCtx.Provider value={show}>
      {children}
      {toast && <ToastUI key={toast.key} data={toast} onDone={() => setToast(null)} />}
    </ToastCtx.Provider>
  );
}
