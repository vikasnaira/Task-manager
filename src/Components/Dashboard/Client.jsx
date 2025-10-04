import { useState } from "react";
import { FiLogOut, FiSettings, FiBell, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const EmployeeDashboard = () => {
    const navigate = useNavigate();  

  const logout = ()=>{
    navigate('/login')
  }

  const [tasks, setTasks] = useState([
    { id: 1, title: "Fix homepage bug", status: "Pending" },
    { id: 2, title: "Update client report", status: "In Progress" },
    { id: 3, title: "Team meeting presentation", status: "Completed" },
  ]);

  const updateStatus = (id, newStatus) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="flex h-screen w-full  bg-gray-600 ">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gray-300" />
          <div>
            <h2 className="font-semibold">Vikas Kumar</h2>
            <p className="text-sm text-gray-500">Employee</p>
          </div>
        </div>

        <nav className="flex flex-col gap-4 flex-1">
          <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-200">
            Dashboard
          </button>
          <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-200">
            My Tasks
          </button>
          <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-200">
            Profile
          </button>
        </nav>

        <button className="mt-auto flex items-center gap-2 text-red-600 hover:text-red-800"
         onClick={logout}>
          <FiLogOut /> Logout
        </button>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="flex items-center justify-between bg-white shadow px-6 py-4">
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="bg-transparent outline-none"
            />
          </div>

          <div className="flex items-center gap-6 text-gray-600">
            <FiBell className="text-xl cursor-pointer hover:text-black" />
            <FiSettings className="text-xl cursor-pointer hover:text-black" />
          </div>
        </div>

        {/* Task List */}
        <div className="flex-1 w-full p-6">
          <h1 className="text-2xl font-bold mb-6">My Tasks</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map(task => (
              <div
                key={task.id}
                className="bg-white p-4 rounded-2xl shadow-md flex flex-col gap-3"
              >
                <h2 className="text-lg font-semibold">{task.title}</h2>
                <p className="text-sm text-gray-500">
                  Status: <b>{task.status}</b>
                </p>

                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => updateStatus(task.id, "In Progress")}
                    className="px-3 py-1 rounded-xl border border-gray-300 hover:bg-gray-200"
                  >
                    In Progress
                  </button>
                  <button
                    onClick={() => updateStatus(task.id, "Completed")}
                    className="px-3 py-1 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Complete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
