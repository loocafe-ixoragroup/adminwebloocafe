import React, { useState } from "react";
import "./PhotoUpload.css";
import { IconUpload1 } from "../../../assets/icons";

const PhotoUpload = ({ name, file, error, register }) => {
  const [uplodedFile, setUplodedFile] = useState((file && file[0]) || "");
  return (
    <>
      <div className="photo-upload">
        <input
          className="photo-input"
          type="file"
          {...register}
          id={name}
          accept="image/*"
          onChange={(e) => setUplodedFile(e.target.files[0])}
        />
        <label htmlFor={name} className="photo-label">
          <img src={IconUpload1} alt="" />
          <span className="upload-text">Upload Your Photo</span>
        </label>
        {uplodedFile && (
          <div className="previewImg">
            <img src={URL.createObjectURL(uplodedFile)} alt="" />
            <button onClick={() => setUplodedFile("")}>x</button>
          </div>
        )}
        <span className="error-photo">{error && error}</span>
      </div>
    </>
  );
};

export default PhotoUpload;
