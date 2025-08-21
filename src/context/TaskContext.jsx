import { createContext , useState } from "react";

export const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
  return (
    <div>
      <TaskContext.Provider value={{tasks,setTasks}}>
        {children}
      </TaskContext.Provider>   
    </div>
  )
}

