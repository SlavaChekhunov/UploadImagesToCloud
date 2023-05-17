'use client'

const Target = () => {

    const handleDragOver = (event) => {
        event.preventDefault(); // Allow dropping
      };

      const handleDrop = (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/html');
        event.target.innerHTML = data;
      };


  return (
    <div id="droptarget" className=' dropzone p-16 mt-10 border border-neutral-200 flex flex-center flex-col mt-10'
    onDragOver={handleDragOver}
    onDrop={handleDrop}
    >Drop your HTML code here</div>
  )
}

export default Target