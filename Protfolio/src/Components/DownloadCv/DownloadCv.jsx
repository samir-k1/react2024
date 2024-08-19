import React, { useState } from 'react';

const DownloadCvButton = () => {
  const [showCv, setShowCv] = useState(false);

  const handleToggleCv = () => {
    setShowCv(!showCv);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <a
        href="../../assets/UI RESUME.pdf"
        download="My_CV.pdf"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-700 transition duration-300"
      >
        Download CV
      </a>

      {showCv && (
        <div className="mt-6 w-full max-w-4xl h-auto">
          <embed
            src="../../assets/UI RESUME.pdf"
            type="application/pdf"
            className="w-full h-screen"
          />
        </div>
      )}
    </div>
  );
};

export default DownloadCvButton;
