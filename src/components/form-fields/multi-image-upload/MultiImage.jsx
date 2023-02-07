import React, { useState } from "react";
import { IconUpload2 } from "../../../assets/icons";
import { LabelComp } from "../simple-input/SimpleInput";
import "./MultiImage.css";

function useTrait(initialValue) {
  const [trait, updateTrait] = useState(initialValue);
  let current = trait;

  // console.log("trait", current);
  const get = () => current;

  const set = (newValue) => {
    current = newValue;
    updateTrait(newValue);
    return current;
  };

  return {
    get,
    set,
  };
}

const MultiImage = ({ name, error }) => {
  // const [imgArr, setImgArr] = useState([]);

  const [imgObj, setImgObj] = useState([]);
  const imgArr = useTrait([]);

  const imgUpload = (e) => {
    imgArr.set(e.target.files);
    console.log(imgArr.get());
    for (let i = 0; i < imgArr.get().length; i++) {
      console.log("into for");
      setImgObj((prev) => [...prev, URL.createObjectURL(imgArr.get()[i])]);
    }
  };

  const deleteImg = (i) => {
    const s = imgObj.filter((item, index) => index !== i);
    setImgObj(s);
    // console.log(s);
  };

  return (
    <div>
      <LabelComp name={name} error={error} />
      <div className="uploadimg_container">
        <input
          type="file"
          name=""
          id="multi-img"
          accept="image/*"
          multiple
          onChange={imgUpload}
        />
        <label htmlFor="multi-img">
          <img src={IconUpload2} alt="" />
        </label>
        <div className="previewimg_box">
          {imgObj.length > 0 ? (
            imgObj.map((item, index) => {
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
        </div>
      </div>
    </div>
  );
};

export default MultiImage;
