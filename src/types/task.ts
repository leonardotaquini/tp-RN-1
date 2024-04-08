import { Dispatch, ReactNode, SetStateAction } from "react"

export type TaskProviderProps = {
    children: ReactNode
}

export type TaskContextType = {
    tasks: string[],
    setTasks: Dispatch< SetStateAction<string[] > >
}