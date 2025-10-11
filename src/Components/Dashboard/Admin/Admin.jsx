import { useState } from "react";
import { FaTasks, FaUsers, FaChartPie } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useClick } from "../../../context/ClickContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import AdminDashboard from "./Dashboard"; 
import AddEmp from "../../Others/AddEmp";
import Task from "./Task";
import TaskOverview from "./TaskOverview";
import EmployeeLIst from "../../Others/EmployeesLIst";

export default function Admin() {
  const navigate = useNavigate();
  const { click, setClick } = useClick();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex bg-gray-200 min-w-full max-h-screen w-fit relative">
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-blue-900 text-white flex-col z-50 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:flex`}
      >
        <h1 className="text-2xl font-bold p-4 border-b border-blue-700">
          Admin Panel
        </h1>

        <nav className="flex flex-col gap-4 p-4">
          <button
            className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded"
            onClick={() => {
              setClick(1);
            setSidebarOpen(false);}

            }
          >
            <FaChartPie /> Dashboard
          </button>
          <button
            className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded"
            onClick={() =>{ setClick(2);
              setSidebarOpen(false);
            }}
          >
            <FaUsers /> Employees
          </button>
          <button
            className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded"
            onClick={() => 
              {
                setClick(3);
                setSidebarOpen(false);
              }}
          >
            <FaTasks /> Tasks Overview
          </button>
        </nav>

        <button
          className="absolute bottom-10 left-3 px-3 py-2 hover:bg-blue-700 rounded flex items-center gap-3 justify-items-start w-[14rem]"
          onClick={() => navigate("/login")}
        >
          <FiLogOut /> Logout
        </button>
      </aside>

      {/* Overlay for small screens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30  z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="md:p-6 flex-1">
          {click === 1 && <AdminDashboard />}
          {click === 2 && <EmployeeLIst/>}
          {click === 3 && <TaskOverview />}
          {click === 4 && <Task />}
          {click === 5 && <AddEmp />}
        </main>
      </div>
    </div>
  );
}
