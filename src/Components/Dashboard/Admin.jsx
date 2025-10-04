import { FaTasks, FaUsers, FaChartPie } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import AdminDashboard from "../Dashboard";
import TaskOverview from "../Others/TaskOverview";
import EmployeesLIst from "../Others/EmployeesLIst";
import Navbar from "../Others/Navbar";
import { useClick } from "../../context/ClickContext";
import Task from "../Others/Task";
export default function TaskManagerBossUI() {
  const { click, setClick } = useClick();

  return (
    <div className="flex bg-red-500">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white  flex-col relative md:flex hidden"> 
        <h1 className="text-2xl font-bold p-4">Admin Panel</h1>
        <nav className="flex flex-col gap-4 p-4">
          <button
            className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded"
            onClick={() => setClick(1)}
          >
            <FaChartPie /> Dashboard
          </button>
          <button
            className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded"
            onClick={() => setClick(2)}
          >
            <FaUsers /> Employees
          </button>
          <button
            className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded"
            onClick={() => setClick(3)}
          >
            <FaTasks /> Tasks Overview
          </button>
        </nav>
          <button className="absolute bottom-10 left-3 px-3 py-2 hover:bg-blue-700 rounded flex items-center gap-3 justify-items-start w-[14rem]"> <FiLogOut /> Logout</button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
       <Navbar setClick={setClick} click={click} />

        {/* Content Switching */}
        <main className="md:p-6  flex-1">
          {click === 1 && (
            <AdminDashboard />
          )}

          {click === 2 && (
            <EmployeesLIst />
          )}

          {click === 3 && (
            <TaskOverview />
          )}
          {click === 4 && (
            <Task/>
          )}
        </main>
      </div>
    </div>
  );
}
