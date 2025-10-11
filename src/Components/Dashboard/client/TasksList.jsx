import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../../utils/LocalStorage";

const TasksList = () => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const finalUser = JSON.parse(localStorage.getItem("current client"));
    const data = getLocalStorage();

    if (finalUser && data) {
      const currentUser = data.users.find((u) => u.email === finalUser.email);
      if (currentUser) {
        setUser(currentUser);
        setTasks(currentUser.tasks || []);
      }
    }
  }, []);

  // Toggle complete status
  const toggleComplete = (index, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].complete = value;
    updatedTasks[index].status = value ? "Complete" : "Pending";

    setTasks(updatedTasks);

    // Update localStorage
    const data = getLocalStorage();
    const userIndex = data.users.findIndex((u) => u.email === user.email);
    if (userIndex !== -1) {
      data.users[userIndex].tasks = updatedTasks;
      localStorage.setItem("taskManagerData", JSON.stringify(data));
      console.log(data);
      
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="w-full bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Tasks Overview
        </h1>

        {tasks.length === 0 ? (
          <p className="text-gray-600">No tasks assigned yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gray-100 shadow flex flex-col gap-3"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {task.title}
                </h2>

                <p className="text-sm text-gray-600">
                  Status:{" "}
                  <span
                    className={`font-medium ${
                      task.complete ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {task.complete ? "Complete" : "Pending"}
                  </span>
                </p>

                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => toggleComplete(index, false)}
                    className={`px-3 py-1 rounded-xl border border-gray-300 transition-colors ${
                      !task.complete
                        ? "bg-yellow-400 text-white hover:bg-yellow-500"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    In Progress
                  </button>

                  <button
                    onClick={() => toggleComplete(index, true)}
                    className={`px-3 py-1 rounded-xl transition-colors text-white ${
                      task.complete
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    Complete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksList;
