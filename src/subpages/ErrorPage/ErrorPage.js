import React from "react";
import "./ErrorPage.css";
import { ImageError } from "../../assets/icons";
import { BlackButton } from "../../components/form-fields";
const ErrorPage = () => {
  return (
    <div className="Error-main-page">
      <div className="Error-image">
        <img src={ImageError} alt={"Error Image"} />
      </div>
      <div className="error-heading">
        <h3>No Loocafe Found</h3>
        <p>
          Please click on “Add Assigned LooCafe” to add an assigned loocafe of
          yours.
        </p>
        <button>Add Assigned Loocafe</button>
      </div>

      {/* <BlackButton name={"Add Assigned Loocafe"}/> */}
    </div>
  );
};

export default ErrorPage;
