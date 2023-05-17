'use client'

import { useState } from "react";
import { HiOutlineCode, HiOutlinePlus } from "react-icons/hi";

const Button = () => {
    const [dragged, setDragged] = useState(false);


    const handleDragStart = (event) => {
        // Set the data to be transferred during the drag operation
        event.dataTransfer.setData('text/plain', event.target.id);
      };
    
    const handleDragEnd = (event) => {
        // Clear any data that was set during the drag operation
        event.dataTransfer.clearData();
        setDragged(true);
      };


  return (
    <button className={`cursor-move ${dragged ? 'py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75' : ''}`}
    id="draggableButton"
    draggable="true"
    onDragStart={handleDragStart}
    onDragEnd={handleDragEnd}>
    Button
    </button>
  )
}

export default Button