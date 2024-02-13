"use client";
import { useState } from "react";

export default function NewItem() {
  const [Name, setName] = new useState("");
  const [Quantity, setQuantity] = new useState(1);
  const [Category, setCategory] = new useState("produce");

  const whenSubmitt = (event) => {
    event.preventDefault();
    const item = { Name, Quantity, Category };
    console.log(item);
    alert("nice " + item.Name + item.Category + item.Quantity);
  };

  return (
    <>
      <form
        onSubmit={whenSubmitt}
        className="w-full max-w-sm mx-auto border border-gray-300 p-4 rounded-md"
      >
        <label className="block mb-4 ">
          Name
          <input
            type="text"
            value={Name}
            onChange={(event) => setName(event.target.value)}
            required
            className="input border border-gray-300 rounded-md w-full text-black"
          ></input>
        </label>
        <label className="block mb-4">
          Quantity
          <input
            type="number"
            min={1}
            max={99}
            value={Quantity}
            onChange={(event) => setQuantity(event.target.value)}
            className="input border border-gray-300 rounded-md w-full text-black"
          ></input>
        </label>
        <label className="block mb-4">
          Category
          <select
            onChange={(event) => setCategory(event.target.value)}
            value={Category}
            className="input border border-gray-300 rounded-md w-full text-black"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </>
  );
}
