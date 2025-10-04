import React from 'react'
import Task from "../Others/Task";
import { Bell, Search, Plus } from "lucide-react";
import { useClick } from "../../context/ClickContext";


const Navbar = () => {
  const { click, setClick } = useClick();
  return (
    <div>
        {/* Navbar */}
        <header className="flex justify-between items-center bg-white p-4 shadow">
          <div className="flex items-center gap-2">
            <Search className="text-gray-500" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="border p-2 rounded w-64"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-blue-500 text-white p-2 rounded-3xl text-nowrap flex gap-3" onClick={()=>setClick(4)}>
              {click == 4 && (
                <Task/> )}
              Add Task <Plus />
            </button>
            <Bell className="text-gray-600 cursor-pointer" />
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="rounded-full w-10 h-10"
            />
          </div>
        </header>
    </div>
  )
}

export default Navbar
