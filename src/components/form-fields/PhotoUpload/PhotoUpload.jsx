import React, { useState } from "react";
import "./PhotoUpload.css";
import { IconUpload1 } from "../../../assets/icons";

const PhotoUpload = () => {
  const [file, setFile] = useState("");
  return (
    <>
      <div>
        <input
          className="photo-input"
          type="file"
          name=""
          id="photo"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="photo" className="photo-label">
          {file && (
            <div className="previewImg">
              <img src={URL.createObjectURL(file)} alt="" />
              <button onClick={() => setFile("")}>x</button>
            </div>
          )}
          <img src={IconUpload1} alt="" />
          <span className="upload-text">Upload Your Photo</span>
        </label>
      </div>
    </>
  );
};

export default PhotoUpload;
