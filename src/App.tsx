import { FC } from "react";
import { TaskProvider } from "./context/TaskProvider";
import { Typography, Container, Grid } from "@mui/material";
import { AddTask, TaskList } from "./components";

const App: FC = () => {
  return (
    <TaskProvider>
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" gutterBottom>
          Aplicación de Tareas
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <AddTask />
          </Grid>
          <Grid item xs={12}>
            <TaskList />
          </Grid>
        </Grid>
      </Container>
    </TaskProvider>
  );
};

export default App;
