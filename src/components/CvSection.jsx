import React from "react";

const CvSection = () => {
  const handleDownload = () => {
    // Specify the CV file (replace with your file path)
    const fileURL = '/path-to-your-cv.pdf'; // You can use a local or hosted file path

    const link = document.createElement('a');
    link.href = fileURL;
    link.download = 'Your_CV.pdf'; // The name of the downloaded file
    link.click();
  };

  return (
    <div className="p-6 rounded-lg shadow-md">
 
      
      <button
        onClick={handleDownload}
        className="px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-200"
      >
        Download CV
      </button>
    </div>
  );
};

export default CvSection;
