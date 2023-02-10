import React, { useEffect, useState } from "react";
import { IconUpload2 } from "../../../assets/icons";
import { LabelComp } from "../simple-input/SimpleInput";
import "./MultiImage.css";
import { useTrait } from "../../../hooks/useTrait";

const MultiImage = ({ label, name, error, register, files }) => {
  // const [imgArr, setImgArr] = useState([]);
  const [imgObj, setImgObj] = useState([]);
  const imgArr = useTrait((files && files) || []);
  // console.log([...files]);
  // console.log(imgArr.get());

  const onChange = (e) => {
    imgArr.set(e.target.files);
    // console.log(typeof imgArr.get());
    for (let i = 0; i < imgArr?.get()?.length; i++) {
      setImgObj((prev) => [...prev, URL.createObjectURL(imgArr.get()[i])]);
    }
  };

  const deleteImg = (i) => {
    const s = imgObj.filter((item, index) => index !== i);
    setImgObj(s);
    // console.log(s);
  };
  // console.log(previews);
  return (
    <div>
      <LabelComp name={label} error={error} />
      <div className="uploadimg_container">
        <input
          type="file"
          name={name}
          id={name}
          accept="image/*"
          multiple
          {...register}
          onChange={onChange}
          onLoad={onChange}
        />
        <label htmlFor={name}>
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
