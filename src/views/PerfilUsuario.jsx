import { useContext, useState } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Box
} from '@mui/material';

function PerfilUsuario() {

  const { usuario, actualizarPerfil } = useContext(UsuarioContext);

  const [editando, setEditando] = useState(false);

  const [formData, setFormData] = useState(usuario);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const guardarCambios = () => {
    actualizarPerfil(formData);
    setEditando(false);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Perfil de Usuario
      </Typography>

      <Paper elevation={3} sx={{ p: 3 }}>

        <TextField
          fullWidth
          margin="normal"
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          disabled={!editando}
        />

        <TextField
          fullWidth
          margin="normal"
          label="DNI"
          name="dni"
          value={formData.dni}
          onChange={handleChange}
          disabled={!editando}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Rol"
          name="rol"
          value={formData.rol}
          onChange={handleChange}
          disabled={!editando}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Institución"
          name="institucion"
          value={formData.institucion}
          onChange={handleChange}
          disabled={!editando}
        />

        <Box sx={{ mt: 2 }}>
          {!editando ? (
            <Button
              variant="contained"
              onClick={() => setEditando(true)}
            >
              Editar Perfil
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              onClick={guardarCambios}
            >
              Guardar Cambios
            </Button>
          )}
        </Box>

      </Paper>
    </Container>
  );
}

export default PerfilUsuario;