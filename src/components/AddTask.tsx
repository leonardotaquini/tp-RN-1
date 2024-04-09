import { ChangeEvent, FC, useState } from "react"
import { useTaskContext } from "../hooks/useTaskContext";
import { Button, TextField } from "@mui/material";

export const AddTask: FC = () => {

    const [ inputValue, setInputValue ] = useState('');
    const { tasks, setTasks } = useTaskContext();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue( e.target.value );
    }

    
    const generateId = ():number => {
      return new Date().getTime();
    }

    const handleAddTask = () => {
        setTasks([ 
          ...tasks,
          { id: generateId(), text: inputValue, completed: false  }
        ]);
        setInputValue('');
    }


  return (
    <div>
        <TextField id="outlined-basic" label="Add Task" variant="outlined" sx={{ width: '100%' }} value={ inputValue } onChange={ handleInputChange } />
        <Button onClick={ handleAddTask} variant="outlined" sx={{ width: '100%' , mt: 2}}>Add Task</Button>
    </div>
  )
}
