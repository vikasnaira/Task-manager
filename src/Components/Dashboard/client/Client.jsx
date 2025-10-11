import { useState } from "react";
import { FiLogOut, FiSettings, FiBell, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { useClick } from "../../../context/ClickContext";
import TasksList from "./TasksList";
import Profile from "./Profile";
import Report from "./Report";

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const { click, setClick } = useClick(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const finalUser = JSON.parse(localStorage.getItem("current client"));
  
  const logout = () => {
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex max-w-screen overflow-hidden bg-gray-200 h-screen relative">
      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-60 bg-white shadow-lg flex-col p-6 
        transform transition-transform duration-300 z-50
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:flex`}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gray-300" />
          <div>
            <h2 className="font-semibold">{finalUser.name}</h2>
            <p className="text-sm text-gray-500">Employee</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <button
            className="text-left px-3 py-2 rounded-lg hover:bg-gray-200"
            onClick={() => {
              setClick(1);
              setIsSidebarOpen(false); // close on click
            }}
          >
            Profile
          </button>
          <button
            className="text-left px-3 py-2 rounded-lg hover:bg-gray-200"
            onClick={() => {
              setClick(2);
              setIsSidebarOpen(false);
            }}
          >
            Tasks Overview
          </button>
          <button
            className="text-left px-3 py-2 rounded-lg hover:bg-gray-200"
            onClick={() => {
              setClick(3);
              setIsSidebarOpen(false);
            }}
          >
          Help & Report
          </button>
        </div>

        <button
          className="mt-auto flex items-center gap-2 text-red-600 hover:text-red-800"
          onClick={logout}
        >
          <FiLogOut /> Logout
        </button>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <nav className="flex md:items-center gap-2 md:justify-between w-full shadow md:px-6 px-2  py-4 bg-white">
          <div
            className="md:hidden text-2xl cursor-pointer  py-2 px-1"
            onClick={toggleSidebar}
          >
            <CiMenuFries />
          </div>
          <div className="flex items-center gap-2 bg-gray-100 md:px-3 px-1 py-2 rounded-lg">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="bg-transparent outline-none"
            />
          </div>
          <div className="flex items-center gap-2  text-gray-600">
            <FiBell className="text-xl cursor-pointer hover:text-black" />
            <FiSettings className="text-xl cursor-pointer hover:text-black" />
          </div>
        </nav>

        <div className="flex-1 overflow-scroll">
          {click === 1 && <Profile />}
          {click === 2 && <TasksList />}
          {click === 3 && <Report />}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
