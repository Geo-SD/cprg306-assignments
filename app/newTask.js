"use client";
import { useState } from "react";
function NewItem({ addItem }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("low");
  const [id, setId] = useState(0);

  const submitFunction = (event) => {
    setId((prev) => prev + 1);
    const newItem = { id,task,priority};
    addItem(newItem);
    event.preventDefault();
    console.log(newItem);
  };

  return (
    <form onSubmit={submitFunction} className="p-4 rounded-lg shadow-md">
    <label className="block mb-2 text-lg">
      Task:
      <input
        type="text"
        className="block w-full mt-1 p-2 border rounded-md text-black"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
    </label>
    <label className="block mb-2 text-lg">
      Priority:
      <select
        className="block w-full mt-1 p-2 border rounded-md text-black"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </label>
    <button
      type="submit"
      className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Add Todo
    </button>
  </form>
  );
}

export default NewItem;
