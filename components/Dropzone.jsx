'use client'

import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const Dropzone = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles)
  }, [])

  //you call the onDrop method to get the access to two functions down below
  //getInputProps gives us the event listeners for the click, drag and drop click events.
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <form>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
            {     
            isDragActive ? (
            <p>Drop the files here...</p>
            ) : (
            <p>Drag and drop some files here, or click to select files</p>
            )}
        </div>
    </form>
  )
}

export default Dropzone