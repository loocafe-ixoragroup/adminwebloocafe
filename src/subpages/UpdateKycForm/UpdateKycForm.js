import React, { useEffect, useState } from "react";
import "./UpdateKycForm.css";
import { BlackButton, LightButton } from "../../components/form-fields";
import { IconEdit } from "../../assets/icons";
import FormRow from "../../components/form-fields/Form-Download-Components/FormRow";
import FormContainer from "../../components/form-fields/Form-Download-Components/FormContainer";
import DownloadCard from "../../components/form-fields/DownloadCard/DownloadCard";
import UpdateFormComp from "../../components/form-fields/Form-Download-Components/UpdateFormComp";
import UpdateFormComponents from "../../components/form-fields/Form-Download-Components/UpdateFormComponents";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
const UpdateKycForm = () => {
  const { loocafeId } = useParams();
  const [tenant, setTenant] = useState([]);
  const [partner, setPartner] = useState([]);
  const [rental, setRental] = useState([]);
  const [unit, setUnit] = useState([]);
  const cookies = new Cookies();

  useEffect(() => {
    const getKycData = async (id) => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_BASE_URL}/loocafe/get-kyc-details/${id}`,
          headers: { Authorization: `Bearer ${cookies.get("token")}` },
        });
        const data = await response.data;
        setTenant(data.tenant[0]);
        setRental(data.rental);
        setPartner(data.partner);
        setUnit(data.loocafe);
      } catch (error) {
        console.log(error);
      }
    };
    getKycData(loocafeId);
  }, []);
  const navigate = useNavigate();
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
                <UpdateFormComp
                  label={"First Name"}
                  name={"X"}
                  editDetails={tenant?.name}
                />
                <UpdateFormComp
                  label={"Email"}
                  name={"X"}
                  editDetails={tenant?.email}
                />
                <UpdateFormComp
                  label={"Date of Birth"}
                  name={"X"}
                  editDetails={tenant?.dob}
                />
                <UpdateFormComp
                  label={"State"}
                  name={"X"}
                  editDetails={tenant?.address?.state}
                />
              </FormRow>
              <FormRow>
                <UpdateFormComp
                  label={"Last Name"}
                  name={" - "}
                  editDetails={"-"}
                />
                <UpdateFormComp
                  label={"Mobile no."}
                  name={"X"}
                  editDetails={tenant?.phone}
                />
                <UpdateFormComp
                  label={"Street Address"}
                  name={"X"}
                  editDetails={tenant?.address?.street_address}
                />
                <UpdateFormComp
                  label={"City"}
                  name={"X"}
                  editDetails={tenant?.address?.city}
                />
              </FormRow>
            </div>
          </div>
          <div className="maintain-partner">
            <p>LooCafe Maintaining Partner Details</p>
            <div>
              <FormContainer>
                <UpdateFormComponents
                  label={"First Name"}
                  name={"X"}
                  editDetails={partner?.name}
                />
                <UpdateFormComponents
                  label={"Mobile No."}
                  name={"X"}
                  editDetails={partner?.phone}
                />
                <UpdateFormComponents
                  label={"Last Name"}
                  name={"X"}
                  editDetails={"-"}
                />
                <UpdateFormComponents
                  label={"Alternate Mobile No."}
                  name={"X"}
                  editDetails={partner?.alternate_phone}
                />
              </FormContainer>
            </div>
          </div>
          <div className="rental-details">
            <p>LooCafe Rental Details</p>

            <div>
              <FormContainer>
                <UpdateFormComponents
                  label={"Tenant Name"}
                  name={"X"}
                  editDetails={rental?.tenant_name}
                />
                <UpdateFormComponents
                  label={"Mobile No."}
                  name={"X"}
                  editDetails={rental?.phone}
                />
                <UpdateFormComponents
                  label={"Electricity No."}
                  name={"X"}
                  editDetails={rental?.electricity_unit_no}
                />
                <UpdateFormComponents
                  label={"Security Deposit "}
                  name={"X"}
                  editDetails={rental?.security_deposit}
                />
                <UpdateFormComponents
                  label={"Agreement Start Date"}
                  name={"X"}
                  editDetails={rental?.agreement_start}
                />
                <UpdateFormComponents
                  label={"Unit Start Date"}
                  name={"X"}
                  editDetails={rental?.unit_start_date}
                />
                <UpdateFormComponents
                  label={"Previous Tenant Name"}
                  name={"X"}
                  editDetails={rental?.previous_tenant}
                />
                <UpdateFormComponents
                  label={"Water Bill No."}
                  name={"X"}
                  editDetails={rental?.water_bill_unit_no}
                />
                <UpdateFormComponents
                  label={"Monthly Rent"}
                  name={"X"}
                  editDetails={rental?.monthly_rent}
                />
                <UpdateFormComponents
                  label={"Agreement End Date"}
                  name={"X"}
                  editDetails={rental?.agreement_end}
                />
              </FormContainer>
            </div>
          </div>
          <div className="unit-details">
            <p>Loocafe Unit Details</p>
            <div>
              <FormContainer>
                <UpdateFormComponents
                  label={"Unit Name"}
                  name={"X"}
                  editDetails={unit?.name}
                />
                <UpdateFormComponents
                  label={"State"}
                  name={"X"}
                  editDetails={unit?.location?.state}
                />
                <UpdateFormComponents
                  label={"Pincode"}
                  name={"X"}
                  editDetails={unit?.location?.pincode}
                />
                <UpdateFormComponents
                  label={"Water Bill No. "}
                  name={"X"}
                  editDetails={unit?.water_bill_unit_no}
                />
                <UpdateFormComponents
                  label={"Unit Address"}
                  name={"X"}
                  editDetails={unit?.location?.address}
                />
                <UpdateFormComponents
                  label={"City"}
                  name={"X"}
                  editDetails={unit?.location?.city}
                />
                <UpdateFormComponents
                  label={"Electricity Bill No."}
                  name={"X"}
                  editDetails={unit?.electricity_unit_no}
                />
                <UpdateFormComponents
                  label={"Type of Loocafe "}
                  name={"X"}
                  editDetails={unit?.type}
                />
                <UpdateFormComponents
                  label={"Latitude"}
                  name={"X"}
                  editDetails={unit?.coordinates?.latitude}
                />
                <UpdateFormComponents
                  label={"Longitude"}
                  name={"X"}
                  editDetails={unit?.coordinates?.longitude}
                />
                <UpdateFormComponents
                  label={"Timing of Loocafe(From)"}
                  name={"X"}
                  editDetails={unit?.timing?.from}
                />
                <UpdateFormComponents
                  label={"Assigned Supervisor"}
                  name={"XXXX"}
                  editDetails={"-"}
                />
                <UpdateFormComponents
                  label={"Timing of Loocafe(To)"}
                  name={"X"}
                  editDetails={unit?.timing?.to}
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
          <LightButton name={"Back"} handleClick={() => navigate(-1)} />
        </div>
      </div>
    </div>
  );
};

export default UpdateKycForm;
