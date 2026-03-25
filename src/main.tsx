import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider, theme } from 'antd'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#a6e3a1', // Catppuccin Green
          colorBgBase: '#1e1e2e',   // Catppuccin Base
          colorTextBase: '#cdd6f4', // Catppuccin Text
          fontFamily: "'Fira Code', monospace",
          colorInfo: '#89b4fa',
          colorSuccess: '#a6e3a1',
          colorWarning: '#f9e2af',
          colorError: '#f38ba8',
          colorBgContainer: '#313244', // Surface
          colorBorder: '#45475a',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
)
