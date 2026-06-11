// src/views/Dashboard.jsx
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid
} from "@mui/material";

import { obtenerProyectos } from "../services/proyectoService";

function Dashboard() {

  const proyectos = obtenerProyectos();

  const totalProyectos = proyectos.length;

  const proyectosEnCurso = proyectos.filter(
    proyecto => proyecto.estado === "En curso"
  ).length;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Bienvenido al sistema de gestión de proyectos.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Total de proyectos
              </Typography>
              <Typography variant="h4">
                {totalProyectos}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Proyectos en curso
              </Typography>
              <Typography variant="h4">
                {proyectosEnCurso}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;