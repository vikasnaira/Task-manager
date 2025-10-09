import React, { useState } from "react";

const ReportSection = () => {
  const [task, setTask] = useState("");
  const [report, setReport] = useState("");
  const [help, setHelp] = useState(false);
  const [reportsList, setReportsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !report) return alert("Please fill all fields");

    const newReport = {
      id: Date.now(),
      task,
      report,
      help,
      date: new Date().toLocaleString(),
    };

    setReportsList([newReport, ...reportsList]);
    setTask("");
    setReport("");
    setHelp(false);
    alert("Report submitted successfully!");
  };

  return (
    <div className="p-6 flex flex-col gap-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">Submit Task Report</h1>

      {/* Report Form */}
      <form
        className="bg-white p-6 rounded-2xl shadow flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <label className="font-semibold">Select Task:</label>
        <select
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="">-- Select Task --</option>
          <option value="Task 1">Task 1</option>
          <option value="Task 2">Task 2</option>
          <option value="Task 3">Task 3</option>
        </select>

        <label className="font-semibold">Report Details:</label>
        <textarea
          value={report}
          onChange={(e) => setReport(e.target.value)}
          rows={4}
          className="border p-2 rounded-lg"
          placeholder="Write your report or issues here..."
        />

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={help}
            onChange={(e) => setHelp(e.target.checked)}
          />
          <label className="font-semibold">Need Help / Urgent</label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Report
        </button>
      </form>

      {/* Previous Reports */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Previous Reports</h2>
        {reportsList.length === 0 && <p className="text-gray-500">No reports submitted yet.</p>}
        {reportsList.map((r) => (
          <div
            key={r.id}
            className="bg-white p-4 rounded-xl shadow flex flex-col gap-2"
          >
            <div className="flex justify-between text-gray-600">
              <span>Task: {r.task}</span>
              <span>{r.date}</span>
            </div>
            <p>{r.report}</p>
            {r.help && <p className="text-red-500 font-semibold">⚠ Needs Help</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportSection;
