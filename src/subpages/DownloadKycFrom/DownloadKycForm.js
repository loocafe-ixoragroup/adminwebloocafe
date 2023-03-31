import React, { useEffect, useRef, useState } from "react";
import "./DownloadKycForm.css";
import { FormComponents, FormComp } from "../../components/form-fields";
import { IconDownload, IconEdit } from "../../assets/icons";
import ReactToPrint from "react-to-print";
import FormRow from "../../components/form-fields/Form-Download-Components/FormRow";
import FormContainer from "../../components/form-fields/Form-Download-Components/FormContainer";
import DownloadCard from "../../components/form-fields/DownloadCard/DownloadCard";
import { useNavigate, useParams } from "react-router";

import Cookies from "universal-cookie";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { getKycData } from "../../features/KycSlice";
import { getAllSupervisor } from "../../features/SupervisorSlice";
import { useTrait } from "../../hooks/useTrait";
// import { getKycData } from "../../apis/Api";

const DownloadKycForm = () => {
  const navigate = useNavigate();
  const { loocafeId } = useParams();
  const { tenant, rental, partner, unit, isloading } = useSelector(
    (state) => state.kyc
  );
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const [loading, setLoading] = useState(false);
  // const [supervisorname, setSupervisorname] = useState("");
  const supervisorname = useTrait("");

  const { supervisor } = useSelector((state) => state.supervisor);

  useEffect(() => {
    dispatch(getAllSupervisor());
  }, []);

  useEffect(() => {
    dispatch(getKycData(loocafeId));
  }, []);

  useEffect(() => {
    setLoading(true);
    const sup = supervisor.filter((arr) => arr._id === unit?.supervisorID);
    supervisorname.set(sup[0]?.name);
    console.log(sup);
    setLoading(false);
  }, [supervisor]);

  // console.log(supervisorname);
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
      <button
        className="edit-button"
        onClick={() => navigate(`/track/edit-kyc/${loocafeId}`)}
      >
        <img className="edit-img" src={IconEdit} alt="edit" />
        Edit
      </button>
      {isloading || loading ? (
        <LoadingSpinner />
      ) : (
        <div className="main-download-kyc">
          <div id="printable" ref={divRef}>
            <div className="user-details-main">
              <p>User Profile</p>

              <div className="circle">
                <img
                  src={`https://loocafe.s3.amazonaws.com/${tenant?.photo}`}
                />
              </div>
              <div className="form-fields">
                <FormRow>
                  <FormComp label={"Name"} name={tenant?.name} />
                  <FormComp label={"Email"} name={tenant?.email} />
                  <FormComp label={"Date of Birth"} name={tenant?.dob} />
                  <FormComp label={"State"} name={tenant?.address?.state} />
                </FormRow>
                <FormRow>
                  <FormComp label={"Last Name"} name={" - "} />
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
                  <FormComponents label={"Last Name"} name={" -  "} />
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
                  <FormComponents
                    label={"State"}
                    name={unit?.location?.state}
                  />
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
                  <FormComponents label={"Type of Loocafe"} name={unit?.type} />
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
                    // name={unit?.supervisorID}
                    name={supervisorname.get()}
                  />
                  <FormComponents
                    label={"Timing of Loocafe(To)"}
                    name={unit?.timing?.to}
                  />
                </FormContainer>
              </div>
            </div>
          </div>
          <div className="uploaded-documents">
            <p>Uploaded Documents</p>
            <div>
              <FormContainer>
                <DownloadCard label={"Aadhar Card"} link={tenant?.aadhar} />
                <DownloadCard label={"PAN Card"} link={tenant?.pan} />
                <DownloadCard
                  label={"Agreement Details"}
                  link={rental?.agreement_file}
                />
                <DownloadCard
                  label={"Electricity Bill"}
                  link={tenant?.electricity_bill}
                />
                <DownloadCard label={"Cheque"} link={tenant?.cheque} />
              </FormContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadKycForm;
