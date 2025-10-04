import { useClick } from '../../context/ClickContext';

const Task = () => {
  const { setClick } = useClick();

  const formHandler = (e) => {
    e.preventDefault();
    console.log("Task created!");
  };

  return (
    <div className=" h-screen p-10  overflow-hidden  left-0 top-0 w-[100vw] absolute  backdrop-blur-sm flex items-center justify-center">
      <div className="h-full bg-white w-[70%] border-1 rounded-lg relative text-black py-4 px-6 lg:text-lg md:text-2xl text-sm">
        <h1 className=" font-bold text-2xl py-4">Create A Task</h1>
        <form onSubmit={formHandler} className="flex flex-col items-start gap-4 h-full">
          {/* Close Button */}
          <button
            type="button"
            className="absolute top-2 right-3"
            onClick={() => setClick(1)}
          >
            ✕
          </button>

          {/* Project Name */}
          <label className="font-medium text-sm ">Project Name</label>
          <input
            type="text"
            placeholder="Enter project name"
            className="w-full border-2 border-black rounded-lg md:p-2 p-1 outline-none"
          />

          {/* Task Description + Assign */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <div className="flex flex-col">
              <label className="font-medium text-sm p-2">Task Description</label>
              <textarea
                placeholder="Description"
                className="border-2 border-black rounded-lg md:px-2 p-1 outline-none resize-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-sm p-2">Assign To</label>
              <select className="border-2 border-black rounded-lg md:p-2 p-1 outline-none">
                <option value="employee1">Employee 1</option>
                <option value="employee2">Employee 2</option>
                <option value="employee3">Employee 3</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-sm md:p-2 p-1">Deadline</label>
              <input
                type="date"
                className="border-2 border-black rounded-lg md:p-2 p-1 outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-sm p-2">Priority</label>
              <select className="border-2 border-black rounded-lg md:p-2 p-1 outline-none">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4"
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
  