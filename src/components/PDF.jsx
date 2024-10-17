import React, { useState } from "react";

export const PDF = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  // Function to handle form submission or further processing
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log("PDF file selected:", selectedFile);
      // You can now process the PDF file here
    } else {
      alert("Please select a PDF file to upload.");
    }
  };

  return (
    <div>
      <h2>Upload a PDF to Query</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          accept="application/pdf" 
          onChange={handleFileChange} 
        />
        <button type="submit">Upload PDF</button>
      </form>

      {selectedFile && <p>Selected PDF: {selectedFile.name}</p>}
    </div>
  );
};
