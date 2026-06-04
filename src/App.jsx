import { Routes, Route, Navigate } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ListaProyectos from './views/ListaProyectos';
import DetalleProyecto from './views/DetalleProyecto';
import './css/estilos.css';


const Dashboard = () => <h2>Pantalla Dashboard (En construcción)</h2>;
const PerfilUsuario = () => <h2>Pantalla Perfil de Usuario (En construcción)</h2>;

function App() {
  return (
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
  );
}

export default App;