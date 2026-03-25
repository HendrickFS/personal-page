import { Outlet } from 'react-router-dom';
import StatusBar from './StatusBar';

export default function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw' }}>
      <StatusBar />
      <div style={{ 
        flex: 1, 
        padding: '32px 16px', 
        overflowY: 'auto',
        overflowX: 'hidden',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative'
      }}>
        <Outlet />
      </div>
    </div>
  );
}
