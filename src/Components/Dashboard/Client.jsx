import { useState } from "react";
import { FiLogOut, FiSettings, FiBell, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import TasksList from "../Others/TasksList";

const EmployeeDashboard = () => {
    const navigate = useNavigate();  

  const logout = ()=>{
    navigate('/login')
  }

  const updateStatus = (id, newStatus) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="flex max-w-screen h-screen overflow-scroll  bg-gray-200 ">
      {/* Sidebar */}
      <div className="w-60 bg-white shadow-lg md:flex flex-col p-6 hidden ">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gray-300" />
          <div>
            <h2 className="font-semibold">Vikas Kumar</h2>
            <p className="text-sm text-gray-500">Employee</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-200">
            Dashboard
          </button>
          <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-200">
            My Tasks
          </button>
          <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-200">
            Profile
          </button>
        </div>

        <button className="mt-auto flex items-center gap-2 text-red-600 hover:text-red-800"
         onClick={logout}>
          <FiLogOut /> Logout
        </button>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}

        <nav className="flex items-center justify-between w-screen shadow px-6 py-4 md:w-full bg-white">
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="bg-transparent outline-none"
            />
          </div>
          <div className="flex items-center md:gap-6 gap-2 text-gray-600">
            <FiBell className="text-xl cursor-pointer hover:text-black" />
            <FiSettings className="text-xl cursor-pointer hover:text-black" />
          </div>
        </nav>
        <TasksList/>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
