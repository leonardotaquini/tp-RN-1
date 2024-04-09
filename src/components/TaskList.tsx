import { FC } from 'react'
import { useTaskContext } from "../hooks/useTaskContext"
import { List, Typography } from '@mui/material';
import Task from './Task';

export const TaskList: FC = () => {


    const { tasks } = useTaskContext();




  return (
    <>
        <div>
            <Typography variant='h4'>Task List</Typography>
            <List>
                {
                    tasks.map( ( task, i ) => (
                        <Task key={ i } task={ task } />
                    ))
                }
            </List>
        </div>
    </>
  )
}
