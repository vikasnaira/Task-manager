import React, { useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";
import { useClick } from "../../context/ClickContext";

const AddEmp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
    });
    
    const { setClick } = useClick();
    // Handle input change
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setClick(1);

    const { name, email, password, gender } = formData;
    if (!name || !email || !password || !gender) {
      alert("Please fill all fields!");
      return;
    }

    const data = getLocalStorage();
    const newEmp = {
      id: data.users.length + 1,
      name,
      email,
      password,
      gender,
      role: "client",
      tasks: [],
    };

    data.users.push(newEmp);
    localStorage.setItem("taskManagerData", JSON.stringify(data));

    alert("Employee added successfully!");
    setFormData({ name: "", email: "", password: "", gender: "" });
  };

  return (
    <div className="fixed inset-0 h-screen w-full bg-black/30 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 relative md:w-1/2  h-[70%] overflow-scroll bg-white px-10  rounded-2xl"
      >
        <div className="sticky top-0 p-4  bg-white  flex justify-between items-start ">
        <h2 className="text-2xl font-bold mb-4  sticky top-0">Add Employee</h2>
           <button className=" text-2xl "  onClick={()=>{setClick(2)}}>✕</button>
        </div>
        

        {/* Name */}
        <div className="flex flex-col">
          <label className="font-medium text-sm mb-1">Emp Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Employee name"
            className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
{/* email data */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="font-medium text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="border-2 border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="border-2 border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

    {/* contact and role */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
         <div className="flex flex-col">
            <label className="font-medium text-sm mb-1">Contact</label>
            <input
              type="tel"
              defaultValue={"+91"}
              required
              maxLength={10}
              name="password"
              placeholder="Enter Contact"
              className="border-2 border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-sm mb-1">Role</label>
            <input
              type="text"
              name="role"
              placeholder="Enter Role"
              className="border-2 border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
      </div>
        <div className="flex flex-col">
          <label className="font-medium text-sm mb-1">Gender</label>
          <div className="flex items-center gap-5 p-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 m-3 hover:bg-blue-700 text-white px-6 py-2 rounded-lg mt-4 transition"
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmp;
