
"use client";
import Item from "./task";


import { useState } from "react";
function DisplayItem({ Items }) {

  return (
    <div>
      {Items.map((item) => (
        <Item
          key={item.id}
          name={item.task}
          category={item.priority}
        />
      ))}
    </div>
  );
}
export default DisplayItem;
