import React, { useState } from "react";
import { IconUpload2 } from "../../../assets/icons";
import { LabelComp } from "../simple-input/SimpleInput";
import "./MultiImage.css";

const MultiImage = ({ label, name, error, previews, onChange, deleteImg }) => {
  // const [imgArr, setImgArr] = useState([]);
  console.log(previews);
  return (
    <div>
      <LabelComp name={label} error={error} />
      <div className="uploadimg_container">
        <input
          type="file"
          name={name}
          id={name}
          accept="image/*"
          // multiple
          onChange={onChange}
        />
        <label htmlFor={name}>
          <img src={IconUpload2} alt="" />
        </label>
        {/* <div className="previewimg_box">
          {previews.length > 0 ? (
            previews.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item} />
                  <button onClick={() => deleteImg(index)}>x</button>
                </div>
              );
            })
          ) : (
            <>
              <div></div>
              <div></div>
            </>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default MultiImage;
