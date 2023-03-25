import React, { useEffect, useRef, useState } from "react";
import "./SupervisorDetails.css";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import FormRow from "../../components/form-fields/Form-Download-Components/FormRow";
import FormComponents from "../../components/form-fields/Form-Download-Components/FormComponents";
import FormContainer from "../../components/form-fields/Form-Download-Components/FormContainer";
import { BlackButton, LightButton } from "../../components/form-fields";
import { IconEdit, IconProfile } from "../../assets/icons";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import ReactToPrint from "react-to-print";

const SupervisorDetails = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const { supervisorId } = useParams();
  const [supervisor, setSupervisor] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    setIsLoading(true);
    const getSupervisor = async (id) => {
      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_BASE_URL}/supervisor/get-specific-supervisor/${id}`,
          headers: { Authorization: `Bearer ${cookies.get("token")}` },
        });
        // const data = await response.data;
        setSupervisor(response.data.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getSupervisor(supervisorId);
    // console.log(supervisor);
  }, []);

  return (
    <div className="supervisor-details-main">
      <h3>Supervisor Details</h3>
      <button
        className="supervisor-edit-button"
        onClick={() => navigate(`/supervisor/edit-supervisor/${supervisorId}`)}
      >
        <img className="edit-img" src={IconEdit} />
        Edit
      </button>
      {}
      {isloading ? (
        <LoadingSpinner />
      ) : (
        <div ref={divRef}>
          <div className="profile-container">
            <div className="supervisor-profile">
              {/* <img className="edit" src={IconEdit}></img> */}
              <img
                src={
                  supervisor.photo
                    ? `https://loocafe.s3.amazonaws.com/${supervisor.photo}`
                    : IconProfile
                }
              />
            </div>
            <div className="supervisor-profile-data">
              <FormComponents label={"Name"} name={supervisor?.name} />

              <FormComponents label={"Location"} name={supervisor?.state} />
            </div>
          </div>
          <div className="supervisor-details-container">
            <FormContainer>
              <FormComponents
                label={"Mobile Number"}
                name={supervisor?.phone}
              />
              <FormComponents
                label={"Alternative Mobile Number"}
                name={supervisor?.alternate_phone}
              />
            </FormContainer>
            <FormContainer>
              <FormComponents label={"State"} name={supervisor?.state} />
              <FormComponents label={"City"} name={supervisor?.city} />
            </FormContainer>
            <FormContainer>
              <FormComponents label={"User Id"} name={supervisor?.username} />
              <FormComponents label={"Password"} name={supervisor?.password} />
            </FormContainer>
          </div>
        </div>
      )}
      <div className="Supervisor-page-buttons">
        <ReactToPrint
          trigger={() => <button className="download_btn">Download</button>}
          content={() => divRef.current}
        />
        <LightButton name={"Back"} handleClick={() => navigate(-1)} />
      </div>
    </div>
  );
};

export default SupervisorDetails;
