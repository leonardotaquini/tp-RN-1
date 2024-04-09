import { Box, Button, Typography } from "@mui/material";
import { useTaskContext } from "../hooks/useTaskContext";
import { TaskModel } from '../types/task';

const Task = ( { task }: { task: TaskModel } ) => {

    const { toggleCompleted, updateTask, deleteTask } = useTaskContext();

    
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, boxShadow: 1 , p: 2 }}>
            <Typography>{task.text}</Typography>
            <Button variant="outlined" color={task.completed ? "primary" : "success"} onClick={ () => toggleCompleted(task.id) }>
                {task.completed ? "Undone" : "Done"}
            </Button>   
            <Button variant="outlined" color="secondary" onClick={ () => updateTask(task.id, task.text) }>
                Change
            </Button>
            <Button variant="outlined" color="error" onClick={ () => deleteTask(task.id) }>
                Delete
            </Button> 
        </Box>
    );
};

export default Task;
