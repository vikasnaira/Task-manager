import { useState } from "react";
import { FaTasks, FaUsers, FaChartPie, FaPlus } from "react-icons/fa";
import { Bell, Search , Plus} from "lucide-react";
import AdminDashboard from "./Dashboard";

export default function TaskManagerBossUI() {

  const [click, setclick] = useState(false)
  
  const [tasks] = useState([
    { id: 1, title: "Design Homepage", assignee: "Rahul", status: "Pending" },
    { id: 2, title: "API Integration", assignee: "Sneha", status: "In Progress" },
    { id: 3, title: "Testing Module", assignee: "Amit", status: "Completed" },
    { id: 4, title: "Testing Module", assignee: "Amit", status: "Completed" },
    { id: 5, title: "Testing Module", assignee: "Amit", status: "Completed" },
    { id: 6, title: "Testing Module", assignee: "Amit", status: "Completed" },
    { id: 7, title: "Testing Module", assignee: "Amit", status: "Completed" },
    { id: 8, title: "Testing Module", assignee: "Amit", status: "Completed" },
    { id: 9, title: "Testing Module", assignee: "Amit", status: "Completed" },
    { id: 10, title: "Testing Module", assignee: "Amit", status: "Completed" },
    { id: 11, title: "Testing Module", assignee: "Amit", status: "Completed" },
    { id: 12, title: "Testing Module", assignee: "Amit", status: "Completed" },
    { id: 13, title: "Testing Module", assignee: "Amit", status: "Completed" },
    { id: 14, title: "Testing Module", assignee: "Amit", status: "Completed" },
    { id: 14, title: "Testing Module", assignee: "Amit", status: "Completed" },
    { id: 16, title: "Testing Module", assignee: "Amit", status: "Completed" },
    { id: 17, title: "Testing Module", assignee: "Amit", status: "Completed" },
    { id: 18, title: "Testing Module", assignee: "Amit", status: "Completed" },
  ]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <h1 className="text-2xl font-bold p-4">Admin Panel</h1>
        <nav className="flex flex-col gap-4 p-4">
          <button className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded" onClick={()=>setclick(false)}>
            <FaChartPie /> Dashboard
          </button>
          <button className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
            <FaUsers /> Employees
          </button>
          <button className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded" onClick={()=>setclick(true)}>
            <FaTasks /> Tasks
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
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
          <button className="bg-blue-500 text-white px-3 rounded-3xl py-2 flex gap-3">Add Task<Plus/></button>
            <Bell className="text-gray-600 cursor-pointer" />
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="rounded-full w-10 h-10"
            />
          </div>
        </header>

        {/* Tasks Section */}
       {click? ( <main className="p-6 flex-1 overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Tasks Overview</h2>
          </div>

          <div className="grid main grid-cols-3 gap-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white p-4 rounded shadow hover:shadow-lg"
              >
                <h3 className="font-bold">{task.title}</h3>
                <p className="text-gray-500">Assigned to: {task.assignee}</p>
                <span
                  className={`px-2 py-1 text-sm rounded ${
                    task.status === "Pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : task.status === "In Progress"
                      ? "bg-blue-200 text-blue-800"
                      : "bg-green-200 text-green-800"
                  }`}
                >
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </main>):<AdminDashboard/> }
      </div>
    </div>
  );
}
