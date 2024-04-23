
import React from "react";

export default function Item(props) {
  const { name, category, onDelete } = props;

  const handleDelete = () => {
   
    onDelete(name); 
  };

  return (
    <div className="border-4 p-10 m-10 bg-violet-900 hover:bg-violet-400">
      <h2 className="text-xl font-extrabold text-white">{name}</h2>
      <div className="text-white">{category}</div>
      <button
        className="mt-4 bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}

