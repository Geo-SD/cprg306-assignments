"use client";
import { useState } from "react";
import Items from "./tasks";
import DisplayItem from "./displayTask";
import NewItem from "./newTask";

export default function MainPage() {
  const [items, setItems] = useState([...Items]);

  // Function to add a new item
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Function to delete an item by ID
  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <main className="min-h-screen bg-black p-4">
      <NewItem addItem={addItem} />
      <DisplayItem items={items} onDelete={deleteItem} />
    </main>
  );
}
