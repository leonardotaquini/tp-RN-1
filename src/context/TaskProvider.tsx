import { useEffect, useState } from "react"
import { TaskModel, TaskProviderProps } from "../types/task"
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }: TaskProviderProps ) => {

    const [tasks, setTasks] = useState< TaskModel[] >( ()=>{
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse( savedTasks ) : [];
    });

    useEffect(() => {

        localStorage.setItem('tasks', JSON.stringify(tasks));
        
    }, [tasks])
    

    const updateTask = ( id: number, text: string ) => {
        setTasks( tasks.map( task => task.id === id ? { ...task, text } : task ) );
    }

    const deleteTask = ( id: number ) => {
        setTasks( tasks.filter( task => task.id !== id ) );
    }

    const toggleCompleted = ( id: number ) => {
        setTasks( tasks.map( task => task.id === id ? { ...task, completed: !task.completed } : task ) );
    }


  return (
    <TaskContext.Provider value={{ tasks, setTasks, updateTask, deleteTask, toggleCompleted}}>
      { children }
    </TaskContext.Provider>
  )
}
