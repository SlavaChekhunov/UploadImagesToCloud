'use client'
import { useState } from "react";
import { HiOutlineCode } from "react-icons/hi";

const Special = () => {
    const [isDropped, setIsDropped] = useState(false);
    const [htmlContent, setHtmlContent] = useState('');

    const handleDragStart = (event) => {
    event.dataTransfer.setData('text/html', htmlContent);
    };
    
    const handleDragEnd = (event) => {
        // Clear any data that was set during the drag operation
        event.dataTransfer.clearData();
        setIsDropped(true);
      };

      const handleInputChange = (event) => {
        setHtmlContent(event.target.value);
      };
    
  return (
    <div className={`cursor-move w-50 ${isDropped ? 'border 1px' : ''}`}
    id="draggable-text"
    draggable="true"
    placeholder='Insert your text here...'
    onDragStart={handleDragStart}
    onDragEnd={handleDragEnd}
    >
        {isDropped ? (
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      ) : (
        <div className="flex flex-row items-center">
        <HiOutlineCode />
        <input
          type="text"
          placeholder="Insert your HTML content here..."
          value={htmlContent}
          onChange={handleInputChange}
        />
        </div>
      )}
    </div>
  )
}

export default Special