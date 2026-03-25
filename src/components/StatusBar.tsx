import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Wifi, Battery, Clock, Terminal } from 'lucide-react';

export default function StatusBar() {
  const [time, setTime] = useState(new Date());
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const workspaces = [
    { id: 1, path: '/', name: 'home' },
    { id: 2, path: '/projects', name: 'projects' },
    { id: 3, path: '/experience', name: 'experience' },
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '4px 16px',
      backgroundColor: 'var(--surface0)',
      color: 'var(--text-main)',
      fontSize: '14px',
      borderBottom: '2px solid var(--surface1)',
      userSelect: 'none',
      height: '32px'
    }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--mauve)' }}>
          <Terminal size={14} />
          <span style={{ fontWeight: 'bold' }}>hendrick_scheifer</span>
        </div>

        <div style={{ display: 'flex', gap: '4px', marginLeft: '8px' }}>
          {workspaces.map(ws => {
            const isActive = location.pathname === ws.path || (ws.path !== '/' && location.pathname.startsWith(ws.path));
            return (
              <div
                key={ws.id}
                onClick={() => navigate(ws.path)}
                style={{
                  cursor: 'pointer',
                  padding: '2px 8px',
                  backgroundColor: isActive ? 'var(--surface2)' : 'transparent',
                  color: isActive ? 'var(--green)' : 'var(--text-main)',
                  borderRadius: '4px',
                  fontWeight: isActive ? 'bold' : 'normal',
                  transition: 'background-color 0.2s'
                }}
              >
                {ws.id}:{ws.name}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Wifi size={14} color="var(--blue)" /> <span>100%</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Battery size={14} color="var(--green)" /> <span>98%</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--yellow)' }}>
          <Clock size={14} /> <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    </div>
  );
}
