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

  // Function to handle form submission and sending the file to the backend
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);  // Attach the selected PDF file

      try {
        // Send POST request to the backend
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        console.log("Response from server:", data);

        if (response.ok) {
          alert("PDF uploaded successfully!");
          console.log("Summary:", data.summary); // You can process/display the summary
        } else {
          alert("Error uploading PDF");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("There was an error uploading the PDF.");
      }
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
