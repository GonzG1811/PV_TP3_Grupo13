// src/views/PerfilUsuario.jsx

import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

function PerfilUsuario() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Perfil de Usuario
      </Typography>

      <Paper elevation={3} sx={{ p: 2 }}>
        <List>
          <ListItem>
            <ListItemText
              primary="Nombre"
              secondary="Valen"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Rol"
              secondary="Alumno"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Institución"
              secondary="UNJU"
            />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}

export default PerfilUsuario;