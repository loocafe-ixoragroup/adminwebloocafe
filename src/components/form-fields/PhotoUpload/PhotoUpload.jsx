import React, { useState } from "react";
import "./PhotoUpload.css";
import { IconUpload1 } from "../../../assets/icons";

const PhotoUpload = ({ name, value, error, onChange }) => {
  const [file, setFile] = useState("");
  return (
    <>
      <div className="photo-upload">
        <input
          className="photo-input"
          type="file"
          // {...register}
          id={name}
          accept="image/*"
          onChange={onChange}
        />
        <label htmlFor={name} className="photo-label">
          {value && (
            <div className="previewImg">
              <img src={URL.createObjectURL(value)} alt="" />
              <button onClick={() => setFile("")}>x</button>
            </div>
          )}
          <img src={IconUpload1} alt="" />
          <span className="upload-text">Upload Your Photo</span>
        </label>
        <span className="error-photo">{error && error}</span>
      </div>
    </>
  );
};

export default PhotoUpload;
