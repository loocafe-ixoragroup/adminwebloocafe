import React, {useRef} from "react";
import "./DownloadKycForm.css";
import { FormComponents, FormComp } from "../../components/form-fields";
import { IconDownload } from "../../assets/icons";
import ReactToPrint from 'react-to-print'; 
import FormRow from "../../components/form-fields/Form-Download-Components/FormRow";
import FormContainer from "../../components/form-fields/Form-Download-Components/FormContainer";

const DownloadKycForm = () => {
  const divRef = useRef();

  return (
    <div>
      <ReactToPrint
    trigger={() => <button className="download-button"><img className="download-img" src={IconDownload} alt="Download" />Download Report</button>}
    content={() => divRef.current}
    />
    <div className="main-download-kyc" id="printable" ref={divRef}>
      <div className="user-details-main">
        {/* <div className="title-btn"> */}
        <p>User Profile</p>
        <div className="circle"></div>
        {/* </div> */}
        {/* <div className="circle"></div> */}
        <div className="form-fields">
          {/* <FormContainer> */}
          <FormRow>
            <FormComp label={"Name"} name={"Rohini"} />
            <FormComp label={"Email"} name={"rohini@gmail.com"} />
            <FormComp label={"Date of Birth"} name={"17/10/2001"} />
            <FormComp label={"State"} name={"Telangana"} />
          </FormRow>
          <FormRow>
            <FormComp label={"Last Name"} name={"Kukka"} />
            <FormComp label={"Mobile no."} name={"XXXXXXXXXX"} />
            <FormComp label={"Street Address"} name={"Sainikpuri"} />
            <FormComp label={"City"} name={"Hyderabad"} />
          </FormRow>
          
        </div>
      </div>
      <div className="maintain-partner">
        <p>LooCafe Maintaining Partner Details</p>
        <div>
          <FormContainer>
            <FormComponents label={"First Name"} name={"Rohini"}/>
            <FormComponents label={"Mobile No."} name={"XXXXXXXXXX"}/>
          <FormComponents label={"Last Name"} name={"Rohini"}/>
            <FormComponents label={"Mobile No."} name={"XXXXXXXXXX"}/>
          </FormContainer>
        </div>
      </div>
      <div className="rental-details">
        <p>LooCafe Rental Details</p>

        <div>
          <FormContainer>
            <FormComponents label={"Tenant Name"} name={"Rohini K"} />
            <FormComponents label={"Mobile No."} name={"XXXXXXXXXX"} />
            <FormComponents label={"Electricity No."} name={"XXXX"} />
            <FormComponents label={"Security Deposit "} name={"XXXX"} />
            <FormComponents label={"Agreement Start Date"} name={"XXXX"} />
            <FormComponents label={"Unit Start Date"} name={"Rohini K"} />
            <FormComponents
              label={"Previous Tenant Name"}
              name={"XXXXXXXXXX"}
            />
            <FormComponents label={"Water Bill No."} name={"XXXX"} />
            <FormComponents label={"Monthly Rent"} name={"XXXX"} />
            <FormComponents label={"Agreement End Date"} name={"XXXX"} />
          </FormContainer>
        </div>
      </div>
      <div className="unit-details">
        <p>Loocafe Unit Details</p>
        <div>
        <FormContainer>
            <FormComponents label={"Unit Name"} name={"Rohini K"} />
            <FormComponents label={"State"} name={"XXXXXXXXXX"} />
            <FormComponents label={"Pincode"} name={"XXXX"} />
            <FormComponents label={"Water Bill No. "} name={"XXXX"} />
            <FormComponents label={"Unit Address"} name={"Rohini K"} />
            <FormComponents label={"City"} name={"XXXXXXXXXX"} />
            <FormComponents label={"Electricity Bill No."} name={"XXXX"} />
            <FormComponents label={"Type of Loocafe "} name={"XXXX"} />
            <FormComponents label={"Latitude & Logitude"} name={"XXXX & XXXX"}/>
            <FormComponents label={"Timing of Loocafe(From)"} name={"XX:XX"}/>
            <FormComponents label={"Assigned Supervisor"} name={"XXXX & XXXX"}/>
            <FormComponents label={"Timing of Loocafe(To)"} name={"XX:XX"}/>
          </FormContainer>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DownloadKycForm;
