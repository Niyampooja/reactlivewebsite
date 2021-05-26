import React from 'react';
const DownloadButton = () => {
    const downloadFile = () => {
      window.location.href = "https://yoursite.com/src/assets/files/exampleDoc.pdf"
    }
    return (
              <button onClick={downloadFile} />
    )
  }
  export default DownloadButton;