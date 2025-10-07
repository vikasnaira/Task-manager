import React from 'react'
import { FaUser } from "react-icons/fa";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
setLocalStorage();
const data = getLocalStorage();
const clients = data.users.filter((u) => u.role === "client");
const EmployeesLIst = () => {
  return (
    <div>
              <h2 className="text-xl font-bold mb-4">Employees</h2>
           <div>
            {clients.map((client)=>(
              <div className='bg-white shadow-lg flex overflow-y-scroll p-2 justify-around items-start w-full rounded-2xl  mb-2'>
               <div className='icon bg-black text-white shadow mr-5 h-full text-4xl p-2 rounded-full '><FaUser /></div>
              <div className="info w-full" >
                 <h2 className='text-lg font-semibold'>{client.name}</h2>
                <p className='text-gray-600 text-sm'>{client.email}</p>
              </div>
             </div>
            ))}
           </div>
    </div>
  )
}

export default EmployeesLIst
