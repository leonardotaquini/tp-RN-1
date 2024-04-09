import { createContext } from "react";
import { TaskContextType } from "../types/task";

export const TaskContext = createContext<TaskContextType | undefined >(undefined);
