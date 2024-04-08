import { useState } from "react"
import { TaskProviderProps } from "../types/task"
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }: TaskProviderProps ) => {

    const [tasks, setTasks] = useState<string[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks}}>
      { children }
    </TaskContext.Provider>
  )
}
