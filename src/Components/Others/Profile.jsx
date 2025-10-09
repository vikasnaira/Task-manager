import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="bg-gray-100 flex flex-col gap-4 p-5 h-[88vh]">
      <h1 className="font-bold text-3xl  sticky top-0 bg-gray-100 z-10">
        Profile
      </h1>

      {/* Profile Card */}
      <div className="bg-white shadow-md w-full flex flex-col md:flex-row items-center justify-between rounded-2xl p-6 gap-6">
        {/* Left Section - Profile Pic */}
        <div className="flex flex-col items-center md:w-1/4 gap-4">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="profile"
            className="rounded-full w-32 h-32 border-4 border-blue-500 shadow-md"
          />
          <button className="bg-blue-500 py-1 px-4 shadow rounded-xl text-white hover:bg-blue-600 transition">
            Change
          </button>
        </div>

        {/* Middle Section - Info */}
        <div className="flex flex-col md:w-1/2 gap-2">
          <h1 className="text-3xl font-semibold text-gray-800">Vikas Naira</h1>
          <p className="text-xl text-gray-500">Frontend Developer</p>

          <div className="mt-4">
            <p className="text-gray-500 text-lg mb-1">Social</p>
            <div className="flex gap-3 text-2xl text-gray-600">
              <button className="hover:text-pink-500">
                <FaInstagram />
              </button>
              <button className="hover:text-blue-600">
                <FaFacebook />
              </button>
              <button className="hover:text-sky-500">
                <FaTwitter />
              </button>
              <button className="hover:text-blue-700">
                <FaLinkedin />
              </button>
            </div>
          </div>
        </div>

        {/* for Details */}
        <div className="flex flex-col gap-2 text-gray-700 md:w-1/3 bg-gray-50 rounded-xl p-4 shadow-inner">
          {[
            { label: "Name", value: "Mr. Vikas" },
            { label: "Role", value: "Frontend Developer" },
            { label: "Email", value: "vikasnaira1322@gmail.com" },
            { label: "Experience", value: "3 Years" },
            { label: "Phone", value: "+91 8198947026" },
          ].map((item, i) => (
            <div key={i} className="flex justify-between border-b pb-1">
              <span className="font-semibold">{item.label}:</span>
              <span className="text-gray-500">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-white shadow rounded-2xl p-6 w-full md:w-1/2">
          <h2 className="text-gray-700 font-semibold text-lg mb-4">
            Performance
          </h2>
          {[
            { label: "Active", value: 0.3, color: "bg-blue-500" },
            { label: "Pending", value: 0.7, color: "bg-yellow-500" },
            { label: "Completed", value: 0.9, color: "bg-green-500" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between mb-3">
              <span className="w-1/4 text-gray-600">{item.label}</span>
              <div className="w-3/4 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`${item.color} h-full rounded-full transition-all`}
                  style={{ width: `${item.value * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white shadow rounded-2xl p-6 w-full md:w-1/2">
          <h2 className="text-gray-700 font-semibold text-lg mb-2">
            Additional Info
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Vikas is a dedicated Frontend Developer with a strong background in
            React, Tailwind, and UI design. He’s passionate about building clean
            and responsive interfaces, and actively contributes to team
            projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
