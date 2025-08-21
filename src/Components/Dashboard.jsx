import { useNavigate } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import {  LoaderCircle , UserStar , Settings , Plus} from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    alert("You have been logged out successfully.");
    navigate("/login");
  };

  return (
    <div className="flex h-screen w-full  bg-gray-100 overflow-scroll flex-col relative">
      {/* Main Area */}
      <div className="flex-1 flex flex-col">

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Overview</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold"><FiUsers />Employees</h2>
              <p className="text-3xl font-bold mt-2">25</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold"><LoaderCircle />Active Tasks</h2>
              <p className="text-3xl font-bold mt-2">42</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold"> <UserStar />Clients</h2>
              <p className="text-3xl font-bold mt-2">12</p>
            </div>
          </div>

          {/* Reports & Tables */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Dummy Chart Section */}
            <div className="bg-white p-6 rounded-xl shadow-md h-64 flex items-center justify-center text-gray-400">
              📊 Chart / Graph Placeholder
            </div>

            {/* Task Table */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold mb-4">Recent Tasks</h2>
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-500">
                    <th className="pb-2">Task</th>
                    <th className="pb-2">Employee</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-2">Fix Homepage Bug</td>
                    <td>Vikas</td>
                    <td><span className="text-yellow-600">In Progress</span></td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Update Client Report</td>
                    <td>Rohan</td>
                    <td><span className="text-green-600">Completed</span></td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Team Presentation</td>
                    <td>Amit</td>
                    <td><span className="text-blue-600">Pending</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
