import { StrictMode } from 'react';
import { UsuarioProvider } from './context/UsuarioProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsuarioProvider>
  </StrictMode>,
)