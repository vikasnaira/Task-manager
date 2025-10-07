import React from 'react'
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
setLocalStorage();
const data = getLocalStorage();
const clients = data.users.filter((u) => u.role === "client");

const EmployeesLIst = () => {
  return (
    <div className='overflow-y-scroll h-[80vh] p-3 '>
          <h2 className="text-2xl font-bold mb-4 sticky top-0 z-99 bg-gray-200 p-2 rounded-2xl">Task overview</h2>
         {clients.map((client)=>(
           <div className='bg-white rounded-2xl mb-2 py-3 px-3 h-fit items-center justify-between shadow-lg'>         
            <h1 className='text-xl font-semibold  w-fit'>{client.name.toUpperCase()}</h1>
          <div className='md:flex-row flex justify-end items-center flex-wrap flex-col h-fit gap-3 px-3 py-2'>
            {client.tasks.map((task)=>(
              <div key={client.id} className='flex-1 md:flex min-w-1/2  flex-col md:justify-end text-center px-3 w-fit  gap-5 md:items-start  border-b border-gray-300 py-2  hover:bg-blue-800 hover:scale-101 hover:text-white transition all-linear duration-300 rounded-3xl'>
                <p>{task.description}</p>
                <p>{task.complete? "✔️" : "❌"}</p>
                <p >{task.title}</p>
               <p className='px-2 py-1 bg-yellow-200 text-black rounded-full'>Priority : {task.priority}</p>
              </div>
              ))}
              </div>
          </div>
         ))}
    </div>
  )
}

export default EmployeesLIst
 