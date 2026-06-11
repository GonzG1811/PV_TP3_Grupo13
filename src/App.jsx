import { UsuarioProvider } from './context/UsuarioProvider';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ListaProyectos from './views/ListaProyectos';
import DetalleProyecto from './views/DetalleProyecto';
import './css/estilos.css';
import Dashboard from './views/Dashboard';
import PerfilUsuario from './views/PerfilUsuario';

function App() {
  return (
    <UsuarioProvider>
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Nav />
      
      <Container component="main" maxWidth="lg" sx={{ py: 3, flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/perfil" element={<PerfilUsuario />} />
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/proyectos/:id" element={<DetalleProyecto />} />
        </Routes>
      </Container>
      
      <Footer />
    </Box>
    </UsuarioProvider>
  );
}

export default App;