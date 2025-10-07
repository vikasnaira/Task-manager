import React from "react";
import Task from "../Others/Task";
import { Bell, Search, Plus } from "lucide-react";
import { useClick } from "../../context/ClickContext";

const Navbar = () => {
  const { click, setClick } = useClick();

  return (
    <header className="flex flex-wrap md:flex-nowrap justify-between items-center bg-white p-4 shadow gap-3">
      {/* Left: Search */}
      <div className="flex items-center gap-2 w-full md:w-auto">
        <Search className="text-gray-500 hidden sm:block" />
        <input
          type="text"
          placeholder="Search tasks..."
          className="border p-2 rounded w-full sm:w-64 text-sm"
        />
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
        <button
          className="bg-blue-500 text-white px-3 py-2 rounded-3xl flex items-center gap-2 text-sm sm:text-base whitespace-nowrap"
          onClick={() => setClick(4)}
        >
          Add Task <Plus size={18} />
        </button>

        {click == 4 && <Task />}

        <Bell className="text-gray-600 cursor-pointer hidden sm:block" />
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
        />
      </div>
    </header>
  );
};

export default Navbar;
