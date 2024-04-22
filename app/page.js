"use client";
import Link from "next/link";
import Items from "./tasks";
import DisplayItem from "./displayTask";
import NewItem from "./newTask";
import { useState } from "react";


export default function MainPage() {
  const [item, setItems] = useState([...Items]);

  const addItem = (newItem) => {
    setItems([...item, newItem]);
  };
  return (
    <main className="min-h-screen bg-black">
      <NewItem addItem={addItem} />
      <DisplayItem Items={item} />
    </main>
  );
}

