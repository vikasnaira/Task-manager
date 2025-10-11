import { useNavigate } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { LoaderCircle, UserStar } from "lucide-react";
import { getLocalStorage } from "../../utils/LocalStorage";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const data = getLocalStorage();

  const employees = data.users.filter((u) => u.role === "employee");
  const clients = data.users.filter((u) => u.role === "client");

  const logout = () => {
    alert("You have been logged out successfully.");
    navigate("/login");
  };

  return (
    <div className="flex flex-col max-h-[83vh] overflow-y-scroll w-full bg-gray-50">
      <div className="flex-1 md:p-4 p-1">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <FiUsers /> Employees
            </h2>
            <p className="text-3xl font-bold mt-2">{employees.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <LoaderCircle /> Active Tasks
            </h2>
            <p className="text-3xl font-bold mt-2">
              {data.users
                .flatMap((u) => u.tasks || [])
                .filter((t) => t.status !== "Completed").length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <UserStar /> Clients
            </h2>
            <p className="text-3xl font-bold mt-2">{clients.length}</p>
          </div>
        </div>

        {/* Clients and Employees Lists */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Clients */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Clients</h2>
            <ul className="space-y-2">
              {clients.map((c) => (
                <li key={c.id} className="border-b pb-2">
                  <p className="font-medium">{c.name}</p>
                  <p className="text-sm text-gray-500">{c.email}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Employees */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Employees</h2>
            <ul className="space-y-2">
              {employees.map((e) => (
                <li key={e.id} className="border-b pb-2">
                  <p className="font-medium">{e.name}</p>
                  <p className="text-sm text-gray-500">{e.email}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tasks */}
        <div className="bg-white p-6 rounded-xl shadow-md mt-6">
          <h2 className="text-lg font-semibold mb-4">All Tasks</h2>
          <table className="w-full text-left border">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="pb-2">Task</th>
                <th className="pb-2">Assigned To</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.users.flatMap((user) =>
                (user.tasks || []).map((task, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2">{task.title}</td>
                    <td>{user.name}</td>
                    <td
                      className={
                        task.status === "Completed"
                          ? "text-green-600"
                          : task.status === "In Progress"
                          ? "text-yellow-600"
                          : "text-blue-600"
                      }
                    >
                      {task.status}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
