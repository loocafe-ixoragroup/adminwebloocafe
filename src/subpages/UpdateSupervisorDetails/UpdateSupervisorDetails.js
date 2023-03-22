import React, { useEffect, useState } from "react";
import "./UpdateSupervisorDetails.css";
import {
  Phoneinput,
  SimpleInput,
  BlackButton,
  LightButton,
} from "../../components/form-fields";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Cookies from "universal-cookie";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSupervisor } from "../../features/SupervisorSlice";
import { updateSupervisor } from "../../apis/Api";

// const schema = yup.object({
//   username: yup.string().required("Required!"),
//   phone: yup.string().required("Required!"),
//   alternate_phone: yup.string(),
// });

const UpdateSupervisorDetails = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const { supervisorId } = useParams();
  const { supervisor } = useSelector((state) => state.supervisor);
  const [newsupervisor, setNewSupervisor] = useState({
    username: supervisor?.username,
    phone: supervisor?.phone,
    alternate_phone: supervisor?.alternate_phone,
  });
  const dispatch = useDispatch();

  const handleUpdate = () => {
    updateSupervisor(newsupervisor, supervisorId);

    setTimeout(() => {
      navigate(-1);
    }, 3000);
  };

  const handleChange = (e, value) => {
    if (value !== undefined) {
      setNewSupervisor({
        ...newsupervisor,
        [e.target.name]: value,
      });
    } else {
      setNewSupervisor({
        ...newsupervisor,
        [e.target.name]: e.target.value,
      });
    }
  };

  useEffect(() => {
    dispatch(getSupervisor(supervisorId));
  }, []);
  return (
    <div className="update-supervisor-main">
      <div className="update-mobileno">
        <Phoneinput
          label={"Mobile No."}
          name={"phone"}
          phone={supervisor?.phone}
          handlePhoneNumberChange={(value) =>
            setNewSupervisor({
              ...newsupervisor,
              ["phone"]: value,
            })
          }
        />
        <Phoneinput
          label={"Alternative Mobile No."}
          name={"alternate_phone"}
          phone={supervisor?.alternate_phone}
          handlePhoneNumberChange={(value) =>
            setNewSupervisor({
              ...newsupervisor,
              ["alternate_phone"]: value,
            })
          }
        />
      </div>
      <div>
        <SimpleInput
          defaultValue={supervisor?.username}
          label={"User Id"}
          type={"text"}
          name={"username"}
          onChange={(e) =>
            setNewSupervisor({
              ...newsupervisor,
              ["username"]: e.target.value,
            })
          }
        />
      </div>
      <div className="buttons">
        <BlackButton name={"Save"} handleClick={handleUpdate} />
        <LightButton name={"Back"} handleClick={() => navigate(-1)} />
      </div>
    </div>
  );
};

export default UpdateSupervisorDetails;
