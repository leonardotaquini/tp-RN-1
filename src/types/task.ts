import { Dispatch, ReactNode, SetStateAction } from "react"

export type TaskProviderProps = {
    children: ReactNode
}

export type TaskContextType = {
    tasks:TaskModel[],
    setTasks: Dispatch< SetStateAction< TaskModel[] > >,
    updateTask: ( id: number, text: string ) => void
    deleteTask: ( id: number ) => void
    toggleCompleted: ( id: number ) => void
}

export type TaskModel = {
    id: number,
    text: string,
    completed: boolean
}