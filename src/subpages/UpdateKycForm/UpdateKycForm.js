import React, { useEffect, useState } from "react";
import "./UpdateKycForm.css";
import {
  BlackButton,
  LightButton,
  Dropdown,
} from "../../components/form-fields";
import { IconEdit } from "../../assets/icons";
import FormRow from "../../components/form-fields/Form-Download-Components/FormRow";
import FormContainer from "../../components/form-fields/Form-Download-Components/FormContainer";
import DownloadCard, {
  FileCard,
} from "../../components/form-fields/DownloadCard/DownloadCard";
import UpdateFormComp from "../../components/form-fields/Form-Download-Components/UpdateFormComp";
import UpdateDropdown from "../../components/form-fields/DropdownList/UpdateDropdown";
import UpdateFormComponents from "../../components/form-fields/Form-Download-Components/UpdateFormComponents";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getAllSupervisor } from "../../features/SupervisorSlice";
import { getKycData } from "../../features/KycSlice";
import { updateKyc } from "../../apis/Api";
const UpdateKycForm = () => {
  const { loocafeId } = useParams();
  const { tenant, rental, partner, unit, isloading } = useSelector(
    (state) => state.kyc
  );
  const dispatch = useDispatch();
  // const [tenant, setTenant] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [partner, setPartner] = useState([]);
  // const [rental, setRental] = useState([]);
  // const [unit, setUnit] = useState([]);
  const [files, setFiles] = useState({
    cleaner_photo: "",
    cleaner_aadhar: "",
    electricity_bill: "",
    cleaner_pan: "",
    cheque: "",
    rental_agreement: "",
  });

  const [data, setData] = useState({
    cleaner_name: tenant?.name,
    cleaner_phone: tenant?.phone,
    email: tenant?.email,
    dob: tenant?.dob,
    street_address: tenant?.address?.street_address,
    cleaner_city: tenant?.address?.city,
    cleaner_state: tenant?.address?.state,
    partner_name: partner?.name,
    partner_phone: partner?.phone,
    partner_alternate_phone: partner?.alternate_phone,
    security_deposit: rental?.security_deposit,
    monthly_rent: rental?.monthly_rent,
    tenant_name: rental?.tenant_name,
    rental_phone: rental?.phone,
    previous_tenant: rental?.previous_tenant,
    rental_electricity: rental?.electricity_unit_no,
    rental_water: rental?.water_bill_unit_no,
    loocafe_name: unit?.name,
    loocafe_type: unit?.type,
    latitude: unit?.coordinates?.latitude,
    longitude: unit?.coordinates?.longitude,
    loocafe_address: unit?.location?.address,
    state: unit?.location?.state,
    city: unit?.location?.city,
    pincode: unit?.location?.pincode,
    electricity_unit_no: unit?.electricity_unit_no,
    water_bill_unit_no: unit?.water_bill_unit_no,
    agreement_start: rental?.agreement_start,
    agreement_end: rental?.agreement_end,
    unit_start_date: rental?.unit_start_date,
    supervisorID: unit?.supervisorID,
    timing_from: unit?.timing?.from,
    timing_to: unit?.timing?.to,
    cleaner_updated: "false",
  });

  useEffect(() => {
    dispatch(getAllSupervisor());
    dispatch(getKycData(loocafeId));
  }, []);

  const navigate = useNavigate();

  const handleFile = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleInputs = (e) => {
    // console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const formData = new FormData();

    const entries = Object.entries(data);

    const formFiles = Object.entries(files).filter((entry) => entry[1] !== "");

    entries.forEach(([key, value]) => {
      formData.append(key, value);
    });

    formFiles.forEach((file) => {
      formData.append(file[0], file[1], file[0]);
    });
    formData.append("partner_updated", "false");

    Array.from(formData).forEach((form) => {
      console.log(form);
    });

    updateKyc(formData, loocafeId);

    setTimeout(() => {
      navigate(-1);
    }, 4000);
  };

  const handleUpdate = () => {
    const entries = Object.entries(data);
    const formData = new FormData();

    const formFiles = Object.entries(files).filter((entry) => entry[1] !== "");

    entries.forEach(([key, value]) => {
      formData.append(key, value);
    });

    formFiles.forEach((file) => {
      formData.append(file[0], file[1], file[0]);
    });
    formData.append("partner_updated", "true");
    updateKyc(formData, loocafeId);

    setTimeout(() => {
      navigate(-1);
    }, 4000);
  };

  return (
    <div>
      {isloading ? (
        <LoadingSpinner />
      ) : (
        <div className="main-download-kyc">
          <div>
            <div className="user-details-main">
              <p>User Profile</p>
              <div className="edit-circle">
                <img
                  src={
                    files.cleaner_photo
                      ? URL.createObjectURL(files.cleaner_photo)
                      : `https://loocafe.s3.amazonaws.com/${tenant?.photo}`
                  }
                />
                <label className="edit-profile" htmlFor="tenant_photo">
                  <div className="white-circle">
                    <img className="edit-icon" src={IconEdit} alt="Edit" />
                  </div>
                </label>
                <input
                  type={"file"}
                  accept={"image/*"}
                  hidden
                  onChange={handleFile}
                  name="cleaner_photo"
                  id="tenant_photo"
                />
              </div>

              <div className="form-fields">
                <FormRow>
                  <UpdateFormComp
                    label={"First Name"}
                    name={"cleaner_name"}
                    onChange={handleInputs}
                    editDetails={tenant?.name}
                  />
                  <UpdateFormComp
                    label={"Email"}
                    onChange={handleInputs}
                    name={"email"}
                    editDetails={tenant?.email}
                  />
                  <UpdateFormComp
                    label={"Date of Birth"}
                    name={"dob"}
                    onChange={handleInputs}
                    editDetails={tenant?.dob}
                  />
                  <UpdateFormComp
                    label={"State"}
                    name={"cleaner_state"}
                    onChange={handleInputs}
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
                    name={"cleaner_phone"}
                    onChange={handleInputs}
                    editDetails={tenant?.phone}
                  />
                  <UpdateFormComp
                    label={"Street Address"}
                    name={"street_address"}
                    onChange={handleInputs}
                    editDetails={tenant?.address?.street_address}
                  />
                  <UpdateFormComp
                    label={"City"}
                    name={"cleaner_city"}
                    onChange={handleInputs}
                    editDetails={tenant?.address?.city}
                  />
                </FormRow>
              </div>
            </div>
            {/* <div className="maintain-partner">
              <p>LooCafe Maintaining Partner Details</p>
              <div>
                <FormContainer>
                  <UpdateFormComponents
                    label={"First Name"}
                    name={"partner_name"}
                    onChange={handleInputs}
                    editDetails={partner?.name}
                  />
                  <UpdateFormComponents
                    label={"Mobile No."}
                    name={"partner_phone"}
                    onChange={handleInputs}
                    editDetails={partner?.phone}
                  />
                  <UpdateFormComponents
                    label={"Last Name"}
                    name={"X"}
                    editDetails={"-"}
                  />
                  <UpdateFormComponents
                    label={"Alternate Mobile No."}
                    name={"partner_alternate_phone"}
                    onChange={handleInputs}
                    editDetails={partner?.alternate_phone}
                  />
                </FormContainer>
              </div>
            </div> */}
            <div className="rental-details">
              <p>LooCafe Rental Details</p>

              <div>
                <FormContainer>
                  <UpdateFormComponents
                    label={"Tenant Name"}
                    name={"tenant_name"}
                    onChange={handleInputs}
                    editDetails={rental?.tenant_name}
                  />
                  <UpdateFormComponents
                    label={"Mobile No."}
                    name={"rental_phone"}
                    onChange={handleInputs}
                    editDetails={rental?.phone}
                  />
                  <UpdateFormComponents
                    label={"Electricity No."}
                    name={"rental_electricity"}
                    onChange={handleInputs}
                    editDetails={rental?.electricity_unit_no}
                  />
                  <UpdateFormComponents
                    label={"Security Deposit "}
                    name={"security_deposit"}
                    onChange={handleInputs}
                    editDetails={rental?.security_deposit}
                  />
                  <UpdateFormComponents
                    label={"Agreement Start Date"}
                    name={"agreement_start"}
                    onChange={handleInputs}
                    editDetails={rental?.agreement_start}
                  />
                  <UpdateFormComponents
                    label={"Unit Start Date"}
                    name={"unit_start_date"}
                    onChange={handleInputs}
                    editDetails={rental?.unit_start_date}
                  />
                  <UpdateFormComponents
                    label={"Previous Tenant Name"}
                    name={"previous_tenant"}
                    onChange={handleInputs}
                    editDetails={rental?.previous_tenant}
                  />
                  <UpdateFormComponents
                    label={"Water Bill No."}
                    name={"water_bill_unit_no"}
                    onChange={handleInputs}
                    editDetails={rental?.water_bill_unit_no}
                  />
                  <UpdateFormComponents
                    label={"Monthly Rent"}
                    name={"monthly_rent"}
                    onChange={handleInputs}
                    editDetails={rental?.monthly_rent}
                  />
                  <UpdateFormComponents
                    label={"Agreement End Date"}
                    name={"agreement_end"}
                    onChange={handleInputs}
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
                    name={"loocafe_name"}
                    onChange={handleInputs}
                    editDetails={unit?.name}
                  />
                  <UpdateFormComponents
                    label={"State"}
                    name={"state"}
                    onChange={handleInputs}
                    editDetails={unit?.location?.state}
                  />
                  <UpdateFormComponents
                    label={"Pincode"}
                    name={"pincode"}
                    onChange={handleInputs}
                    editDetails={unit?.location?.pincode}
                  />
                  <UpdateFormComponents
                    label={"Water Bill No. "}
                    name={"water_bill_unit_no"}
                    onChange={handleInputs}
                    editDetails={unit?.water_bill_unit_no}
                  />
                  <UpdateFormComponents
                    label={"Unit Address"}
                    name={"loocafe_address"}
                    onChange={handleInputs}
                    editDetails={unit?.location?.address}
                  />
                  <UpdateFormComponents
                    label={"City"}
                    name={"city"}
                    onChange={handleInputs}
                    editDetails={unit?.location?.city}
                  />
                  <UpdateFormComponents
                    label={"Electricity Bill No."}
                    name={"electricity_unit_no"}
                    onChange={handleInputs}
                    editDetails={unit?.electricity_unit_no}
                  />
                  <UpdateDropdown
                    label={"Type of Loocafe "}
                    defaultValue={unit?.type}
                    name={"loocafe_type"}
                    onChange={handleInputs}
                  />
                  <UpdateFormComponents
                    label={"Latitude"}
                    name={"latitude"}
                    onChange={handleInputs}
                    editDetails={unit?.coordinates?.latitude}
                  />
                  <UpdateFormComponents
                    label={"Longitude"}
                    name={"longitude"}
                    onChange={handleInputs}
                    editDetails={unit?.coordinates?.longitude}
                  />
                  <UpdateFormComponents
                    label={"Timing of Loocafe(From)"}
                    name={"timing_from"}
                    onChange={handleInputs}
                    editDetails={unit?.timing?.from}
                  />
                  <UpdateDropdown
                    label={"Assigned Supervisor"}
                    name={"supervisorID"}
                    onChange={handleInputs}
                    // defaultSup={supervisorname !== "" ? supervisorname : "sai"}
                    defaultSup={unit?.supervisorID}
                  />
                  <UpdateFormComponents
                    label={"Timing of Loocafe(To)"}
                    name={"timing_to"}
                    onChange={handleInputs}
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
                <FileCard
                  name="cleaner_aadhar"
                  onChange={handleFile}
                  label={"Aadhar Card"}
                  link={tenant?.aadhar}
                  file={files.cleaner_aadhar}
                />
                <FileCard
                  name="cleaner_pan"
                  label={"PAN Card"}
                  onChange={handleFile}
                  link={tenant?.pan}
                  file={files.cleaner_pan}
                />
                <FileCard
                  name="rental_agreement"
                  onChange={handleFile}
                  label={"Agreement Details"}
                  link={rental?.agreement_file}
                  file={files.rental_agreement}
                />
                <FileCard
                  name="electricity_bill"
                  label={"Address Proof"}
                  link={tenant?.electricity_bill}
                  onChange={handleFile}
                  file={files.electricity_bill}
                />
                <FileCard
                  name="cheque"
                  file={files.cheque}
                  label={"Cheque"}
                  onChange={handleFile}
                  link={tenant?.cheque}
                />
              </FormContainer>
            </div>
          </div>
          <div className="Kyc-update-Buttons">
            <BlackButton name={"Save"} handleClick={handleSave} />
            {/* To save partner details and updating new one */}
            <LightButton name={"Save and update"} handleClick={handleUpdate} />
            <LightButton name={"Back"} handleClick={() => navigate(-1)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateKycForm;
