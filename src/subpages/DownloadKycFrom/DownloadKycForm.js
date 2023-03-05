import React, { useEffect, useRef, useState } from "react";
import "./DownloadKycForm.css";
import { FormComponents, FormComp } from "../../components/form-fields";
import { IconDownload } from "../../assets/icons";
import ReactToPrint from "react-to-print";
import FormRow from "../../components/form-fields/Form-Download-Components/FormRow";
import FormContainer from "../../components/form-fields/Form-Download-Components/FormContainer";
import { useParams } from "react-router";

import Cookies from "universal-cookie";
import axios from "axios";
// import { getKycData } from "../../apis/Api";

const DownloadKycForm = () => {
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
  const divRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button className="download-button">
            <img className="download-img" src={IconDownload} alt="Download" />
            Download Report
          </button>
        )}
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
              <FormComp label={"Name"} name={tenant?.name} />
              <FormComp label={"Email"} name={tenant?.email} />
              <FormComp label={"Date of Birth"} name={tenant?.dob} />
              <FormComp label={"State"} name={tenant?.address?.state} />
            </FormRow>
            <FormRow>
              <FormComp label={"Last Name"} name={"not there"} />
              <FormComp label={"Mobile no."} name={tenant?.phone} />
              <FormComp
                label={"Street Address"}
                name={tenant?.address?.street_address}
              />
              <FormComp label={"City"} name={tenant?.address?.city} />
            </FormRow>
          </div>
        </div>
        <div className="maintain-partner">
          <p>LooCafe Maintaining Partner Details</p>
          <div>
            <FormContainer>
              <FormComponents label={"First Name"} name={partner?.name} />
              <FormComponents label={"Mobile No."} name={partner?.phone} />
              <FormComponents label={"Last Name"} name={"Rohini"} />
              <FormComponents
                label={"Mobile No."}
                name={partner?.alternate_phone}
              />
            </FormContainer>
          </div>
        </div>
        <div className="rental-details">
          <p>LooCafe Rental Details</p>

          <div>
            <FormContainer>
              <FormComponents
                label={"Tenant Name"}
                name={rental?.tenant_name}
              />
              <FormComponents label={"Mobile No."} name={rental.phone} />
              <FormComponents
                label={"Electricity No."}
                name={rental?.electricity_unit_no}
              />
              <FormComponents
                label={"Security Deposit "}
                name={rental?.security_deposit}
              />
              <FormComponents
                label={"Agreement Start Date"}
                name={rental?.agreement_start}
              />
              <FormComponents
                label={"Unit Start Date"}
                name={rental?.unit_start_date}
              />
              <FormComponents
                label={"Previous Tenant Name"}
                name={rental?.previous_tenant}
              />
              <FormComponents
                label={"Water Bill No."}
                name={rental?.water_bill_unit_no}
              />
              <FormComponents
                label={"Monthly Rent"}
                name={rental?.monthly_rent}
              />
              <FormComponents
                label={"Agreement End Date"}
                name={rental?.agreement_end}
              />
            </FormContainer>
          </div>
        </div>
        <div className="unit-details">
          <p>Loocafe Unit Details</p>
          <div>
            <FormContainer>
              <FormComponents label={"Unit Name"} name={unit?.name} />
              <FormComponents label={"State"} name={unit?.location?.state} />
              <FormComponents
                label={"Pincode"}
                name={unit?.location?.pincode}
              />
              <FormComponents
                label={"Water Bill No. "}
                name={unit?.water_bill_unit_no}
              />
              <FormComponents
                label={"Unit Address"}
                name={unit?.location?.address}
              />
              <FormComponents label={"City"} name={unit?.location?.city} />
              <FormComponents
                label={"Electricity Bill No."}
                name={unit?.electricity_unit_no}
              />
              <FormComponents label={"Type of Loocafe "} name={unit?.type} />
              <FormComponents
                label={"Latitude & Logitude"}
                name={
                  unit?.coordinates?.latitude +
                  " & " +
                  unit?.coordinates?.longitude
                }
              />
              <FormComponents
                label={"Timing of Loocafe(From)"}
                name={unit?.timing?.from}
              />
              <FormComponents
                label={"Assigned Supervisor"}
                name={"XXXX & XXXX"}
              />
              <FormComponents
                label={"Timing of Loocafe(To)"}
                name={unit?.timing?.to}
              />
            </FormContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadKycForm;
