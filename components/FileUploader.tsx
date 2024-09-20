"use client";

import React from "react";

const FileUploader = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default FileUploader;
function useCallback(arg0: (acceptedFiles: any) => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}

function useDropzone(arg0: { onDrop: any }): {
  getRootProps: any;
  getInputProps: any;
  isDragActive: any;
} {
  throw new Error("Function not implemented.");
}
