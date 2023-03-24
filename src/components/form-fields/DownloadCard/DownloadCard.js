import React from "react";
import "./DownloadCard.css";
import { IconDownload } from "../../../assets/icons";

const DownloadCard = ({ label, link }) => {
  return (
    <div className="document-card">
      <img src={IconDownload} alt="Download Icon" />
      <p>{label}</p>
      {link ? (
        <a href={`https://loocafe.s3.amazonaws.com/${link}`}>{link}</a>
      ) : (
        <span>No file uploaded</span>
      )}
    </div>
  );
};

export const FileCard = ({ file, label, link, ...props }) => {
  // console.log(file);
  return (
    <div className="document-card">
      <label htmlFor={label} className="file-label">
        <img src={IconDownload} alt="Download Icon" />
        <p>{label}</p>
      </label>
      <input
        type={"file"}
        hidden
        id={label}
        {...props}
        accept="application/pdf, image/png"
      />
      {file ? (
        <span className="file-name">{file?.name} uploaded</span>
      ) : link ? (
        <a href={`https://loocafe.s3.amazonaws.com/${link}`}>{link}</a>
      ) : (
        <span>No file uploaded</span>
      )}
    </div>
  );
};

export default DownloadCard;
