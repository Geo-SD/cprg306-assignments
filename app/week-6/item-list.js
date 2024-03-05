"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {

  const [sortBy, setSortBy] = useState('name');

  
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return  0;
  });

  
  const sortByName = () => setSortBy('name');

  
  const sortByCategory = () => setSortBy('category');

  return (
    <div>
      <button onClick={sortByName} style={{ backgroundColor: sortBy === 'name' ? 'lightgrey' : 'white' }}>
        Sort by Name
      </button>
      <button onClick={sortByCategory} style={{ backgroundColor: sortBy === 'category' ? 'lightgrey' : 'white' }}>
        Sort by Category
      </button>
      <ul>
        {sortedItems.map(item => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}