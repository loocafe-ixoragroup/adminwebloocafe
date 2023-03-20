import React from "react";
import "./UpdateKycForm.css";
import { BlackButton, LightButton } from "../../components/form-fields";
import { IconEdit } from "../../assets/icons";
import FormRow from "../../components/form-fields/Form-Download-Components/FormRow";
import FormContainer from "../../components/form-fields/Form-Download-Components/FormContainer";
import DownloadCard from "../../components/form-fields/DownloadCard/DownloadCard";
import UpdateFormComp from "../../components/form-fields/Form-Download-Components/UpdateFormComp";
import UpdateFormComponents from "../../components/form-fields/Form-Download-Components/UpdateFormComponents";
const UpdateKycForm = () => {
  return (
    <div>
      <div className="main-download-kyc">
        <div>
          <div className="user-details-main">
            <p>User Profile</p>
            <div className="circle">
              <img></img>
              <div className="edit-profile">
              <div className="white-circle">
                <img className="edit-icon" src={IconEdit} alt="Edit" />
              </div>
            </div>
            </div>
            
            <div className="form-fields">
              <FormRow>
                <UpdateFormComp label={"First Name"} name={"X"} />
                <UpdateFormComp label={"Email"} name={"X"} />
                <UpdateFormComp label={"Date of Birth"} name={"X"} />
                <UpdateFormComp label={"State"} name={"X"} />
              </FormRow>
              <FormRow>
                <UpdateFormComp label={"Last Name"} name={" - "} />
                <UpdateFormComp label={"Mobile no."} name={"X"} />
                <UpdateFormComp label={"Street Address"} name={"X"} />
                <UpdateFormComp label={"City"} name={"X"} />
              </FormRow>
            </div>
          </div>
          <div className="maintain-partner">
            <p>LooCafe Maintaining Partner Details</p>
            <div>
              <FormContainer>
                <UpdateFormComponents label={"First Name"} name={"X"} />
                <UpdateFormComponents label={"Mobile No."} name={"X"} />
                <UpdateFormComponents label={"Last Name"} name={"X"} />
                <UpdateFormComponents label={"Mobile No."} name={"X"} />
              </FormContainer>
            </div>
          </div>
          <div className="rental-details">
            <p>LooCafe Rental Details</p>

            <div>
              <FormContainer>
                <UpdateFormComponents label={"Tenant Name"} name={"X"} />
                <UpdateFormComponents label={"Mobile No."} name={"X"} />
                <UpdateFormComponents label={"Electricity No."} name={"X"} />
                <UpdateFormComponents label={"Security Deposit "} name={"X"} />
                <UpdateFormComponents
                  label={"Agreement Start Date"}
                  name={"X"}
                />
                <UpdateFormComponents label={"Unit Start Date"} name={"X"} />
                <UpdateFormComponents
                  label={"Previous Tenant Name"}
                  name={"X"}
                />
                <UpdateFormComponents label={"Water Bill No."} name={"X"} />
                <UpdateFormComponents label={"Monthly Rent"} name={"X"} />
                <UpdateFormComponents label={"Agreement End Date"} name={"X"} />
              </FormContainer>
            </div>
          </div>
          <div className="unit-details">
            <p>Loocafe Unit Details</p>
            <div>
              <FormContainer>
                <UpdateFormComponents label={"Unit Name"} name={"X"} />
                <UpdateFormComponents label={"State"} name={"X"} />
                <UpdateFormComponents label={"Pincode"} name={"X"} />
                <UpdateFormComponents label={"Water Bill No. "} name={"X"} />
                <UpdateFormComponents label={"Unit Address"} name={"X"} />
                <UpdateFormComponents label={"City"} name={"X"} />
                <UpdateFormComponents
                  label={"Electricity Bill No."}
                  name={"X"}
                />
                <UpdateFormComponents label={"Type of Loocafe "} name={"X"} />
                <UpdateFormComponents
                  label={"Latitude & Logitude"}
                  name={"X"}
                />
                <UpdateFormComponents
                  label={"Timing of Loocafe(From)"}
                  name={"X"}
                />
                <UpdateFormComponents
                  label={"Assigned Supervisor"}
                  name={"XXXX"}
                />
                <UpdateFormComponents
                  label={"Timing of Loocafe(To)"}
                  name={"X"}
                />
              </FormContainer>
            </div>
          </div>
        </div>
        <div className="uploaded-documents">
          <p>Edit Documents</p>
          <div>
            <FormContainer>
              <DownloadCard label={"Aadhar Card"} />
              <DownloadCard label={"PAN Card"} />
              <DownloadCard label={"Agreement Details"} />
              <DownloadCard label={"Electricity Bill"} />
            </FormContainer>
          </div>
        </div>
        <div className="Kyc-update-Buttons">
          <BlackButton name={"Save"} />
          <LightButton name={"Back"} />
        </div>
      </div>
    </div>
  );
};

export default UpdateKycForm;
