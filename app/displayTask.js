import React from "react";
import Item from "./task";

function DisplayItem({ items, onDelete }) {
  return (
    <div>
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.task}
          category={item.priority}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </div>
  );
}

export default DisplayItem;
