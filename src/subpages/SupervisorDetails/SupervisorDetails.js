import React from "react";
import "./SupervisorDetails.css";
import FormRow from "../../components/form-fields/Form-Download-Components/FormRow";
import FormComponents from "../../components/form-fields/Form-Download-Components/FormComponents";
import FormContainer from "../../components/form-fields/Form-Download-Components/FormContainer";
import { BlackButton , LightButton } from "../../components/form-fields";
import { IconEdit , IconProfile} from "../../assets/icons";
const SupervisorDetails = () => {
  return (
    <div className="supervisor-details-main">
      <h3>Supervisor Details</h3>
      <button className="supervisor-edit-button"><img className="edit-img" src={IconEdit}></img>Edit</button>
      <div className="profile-container">
        <div className="supervisor-profile">
          {/* <img className="edit" src={IconEdit}></img> */}
          <img src={IconProfile}></img>
        </div>
        <div className="supervisor-profile-data">
          <FormRow>
            <FormComponents label={"Name"} name={"Karthik"} />
          </FormRow>
          <FormRow>
            <FormComponents label={"Location"} name={"Hyderabad"} />
          </FormRow>
        </div>
      </div>
      <div className="supervisor-details-container">
      <FormContainer>
           <FormComponents label={"Mobile Number"} name={"XXXXXXXXX"}/>
           <FormComponents label={"Alternative Mobile Number"} name={"XXXXXXXXX"}/>
        </FormContainer>
        <FormContainer>
          <FormComponents label={"State"} name={"Telangana"}/>
          <FormComponents label={"City"} name={"Hyderabad"}/>
        </FormContainer>
        <FormContainer>
          <FormComponents label={"User Id"} name={"karthik17"}/>
          <FormComponents label={"Password"} name={"**********"}/>
        </FormContainer>
      </div>
      <div className="Supervisor-page-buttons">
        <BlackButton name={"Download Form"}/>
        <LightButton name={"Back"}/>
      </div>
    </div>
  );
};

export default SupervisorDetails;
