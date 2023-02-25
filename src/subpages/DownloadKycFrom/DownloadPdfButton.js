import React from 'react';
import html2pdf from 'html2pdf.js';
import { saveAs } from 'file-saver';
import { IconDownload } from "../../assets/icons";
import './DownloadKycForm.css';
const DownloadPDFButton = ({ target }) => {
  const handleDownload = () => {
    const element = document.getElementById(target);
    html2pdf().set({ html2canvas: { scale: 4 } }).from(element).save();
  };

  return (
    <button onClick={handleDownload}><img className="download-img" src={IconDownload} alt="Download" />Download Report</button>
  );
};

export default DownloadPDFButton;