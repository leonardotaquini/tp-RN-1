import { FC } from 'react'
import { useTaskContext } from "../hooks/useTaskContext"
import { List, ListItemText, Typography } from '@mui/material';

export const TaskList: FC = () => {


    const { tasks } = useTaskContext();



  return (
    <>
        <div>
            <Typography variant='h4'>Lista de Tareas</Typography>
            <List>
                {
                    tasks.map( ( task, i ) => (
                        <ListItemText key={ i } primary={ task }/>
                    ))
                }
            </List>
        </div>
    </>
  )
}
