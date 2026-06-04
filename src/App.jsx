import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ListaProyectos from './views/ListaProyectos';
import DetalleProyecto from './views/DetalleProyecto';
import Dashboard from './views/Dashboard';
import PerfilUsuario from './views/PerfilUsuario';
import './css/estilos.css';


function App() {
  return (
    <>
      <Header />
      <Nav />
      <main style={{ padding: '10px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/perfil" element={<PerfilUsuario />} />
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/proyectos/:id" element={<DetalleProyecto />} />
        </Routes>
      </main>
      
      <Footer />
    </>
  );
}

export default App;