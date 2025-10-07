import React, { useState } from 'react'
const TasksList = () => {

    const [user, setuser] = useState(null)
    console.log(user);
    
    const [tasks, setTasks] = useState([
    { id: 1, title: "Fix homepage bug", status: "Pending" },
    { id: 2, title: "Update client report", status: "In Progress" },
    { id: 3, title: "Team meeting presentation", status: "Completed" },
  ]);

  return (
    <div>
       {/* Task List */}
        <div className="task card w-full  p-4">
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
  )
}

export default TasksList
