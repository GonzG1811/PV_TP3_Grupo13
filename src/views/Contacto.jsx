import { Container, Typography, Paper } from "@mui/material";

function Contacto() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contacto
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Typography>
          Correo: grupo13@unju.edu.ar
        </Typography>

        <Typography>
          Facultad de Ingeniería - UNJu
        </Typography>
      </Paper>
    </Container>
  );
}

export default Contacto;