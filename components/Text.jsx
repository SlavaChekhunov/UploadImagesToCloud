'use client'

import { useState } from "react";
import { HiAnnotation } from "react-icons/hi";

const Text = () => {
    const [dragged, setDragged] = useState(false);
    const [inputText, setInputText] = useState('');

    const handleDragStart = (event) => {
        // Set the data to be transferred during the drag operation
        event.dataTransfer.setData('text/plain', event.target.id);
      };
    
    const handleDragEnd = (event) => {
        // Clear any data that was set during the drag operation
        event.dataTransfer.clearData();
        setDragged(true);
      };

      const handleInputChange = (event) => {
        setInputText(event.target.value);
      };


  return (
    <div className={`cursor-move w-50 ${dragged ? 'border 1px' : ''}`}
    id="draggable-text"
    draggable="true"
    placeholder='Insert your text here...'
    onDragStart={handleDragStart}
    onDragEnd={handleDragEnd}
    >
        {dragged ? (
        <input
        id="draggable-text"
          type="text"
          placeholder="Insert your text here..."
          value={inputText}
          onChange={handleInputChange}
        />
      ) : (
        <div className="flex flex-row items-center">
        <HiAnnotation />
        Rich Text
        </div>
      )}
    </div>
  )
}

export default Text