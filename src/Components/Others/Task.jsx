import { useState, useEffect } from "react";
import { useClick } from "../../context/ClickContext";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

const Task = () => {
  const { setClick } = useClick();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("medium");

  useEffect(() => {
    // initialize data only once
    setLocalStorage();
    const data = getLocalStorage();

    if (data && data.users) {
      const clients = data.users.filter((u) => u.role === "client");
      setUsers(clients);
    }
  }, []);

  const formHandler = (e) => {
    e.preventDefault();

    if (!selectedUser || !projectName || !description || !deadline) {
      alert("Please fill all required fields.");
      return;
    }

    const data = getLocalStorage();
    if (!data || !data.users) return alert("No users found!");

    const userIndex = data.users.findIndex((u) => u.name === selectedUser);
    if (userIndex === -1) return alert("Selected user not found!");

    // ✅ Create task object
    const newTask = {
      id: Date.now(),
      title: projectName,
      description,
      active: true,
      inProcess: false,
      complete: false,
      timing: deadline,
      priority
    };

    // ✅ Add to selected user
    data.users[userIndex].tasks.push(newTask);

    // ✅ Save updated data
    localStorage.setItem("taskManagerData", JSON.stringify(data));

    console.log("✅ Task Added:", newTask);
    alert(`Task assigned to ${selectedUser} successfully!`);

    setClick(1); // close modal

    // ✅ Reset form
    setProjectName("");
    setDescription("");
    setSelectedUser("");
    setDeadline("");
    setPriority("medium");
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-3xl rounded-lg relative text-black py-6 px-6 md:px-10 shadow-lg overflow-y-auto max-h-[90vh]">
        <button
          type="button"
          className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-red-500"
          onClick={() => setClick(1)}
        >
          ✕
        </button>

        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mb-6">
          Create A Task
        </h1>

        <form onSubmit={formHandler} className="flex flex-col gap-5">
          {/* Project Name */}
          <div className="flex flex-col">
            <label className="font-medium text-sm mb-1">Project Name</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter project name"
              className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Task Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label className="font-medium text-sm mb-1">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="Enter description"
                className="border-2 border-gray-300 rounded-lg px-3 py-2 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="font-medium text-sm mb-1">Assign To</label>
                <select
                  value={selectedUser}
                  onChange={(e) => setSelectedUser(e.target.value)}
                  className="border-2 border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">-- Choose an employee --</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.name}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-sm mb-1">Deadline</label>
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="border-2 border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-sm mb-1">Priority</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="border-2 border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg mt-4 transition"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Task;
 