import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ListaProyectos from './components/ListaProyectos';
import DetalleProyecto from './components/DetalleProyecto';
import './css/estilos.css';

// Placeholders provisiorias
const Dashboard = () => <h2>Pantalla Dashboard (En construcción)</h2>;
const PerfilUsuario = () => <h2>Pantalla Perfil de Usuario (En construcción)</h2>;

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