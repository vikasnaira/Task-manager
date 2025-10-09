  import React, { useState } from 'react'
  import { FaUser } from "react-icons/fa";
  import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
  import { Plus } from 'lucide-react'
  import { useClick } from '../../context/ClickContext';
  import AddEmp from './AddEmp';

  setLocalStorage();
  const data = getLocalStorage();
  const clients = data.users.filter((u) => u.role === "client");

  const EmployeesLIst = () => {
     const { click, setClick } = useClick();
   
    return (
      <div className=' h-[80vh] overflow-scroll'>
              <div className='flex w-full justify-between sticky top-0 bg-gray-200'>
                  <h2 className="text-2xl font-bold mb-4">Employees</h2>
                <button className='bg-blue-500 text-white rounded-3xl flex h-fit p-2 items-center gap-3'
                  onClick={()=>{setClick(5)}}>Add employee<Plus size={18} />
                   {click == 4 && <AddEmp />}
                   </button>
              </div>
            <div className=''>
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
