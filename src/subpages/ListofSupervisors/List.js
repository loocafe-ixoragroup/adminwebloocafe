import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import "./List.css";
import { City, State } from "country-state-city";

import {
  BlackButton,
  StateCity,
  ViewButton,
  LightButton,
} from "../../components/form-fields";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  sup_city: yup.string().required("Required!"),
  sup_state: yup.string().required("Required!"),
});

const List = ({ setPage }) => {
  // const navigate = useNavigate();
  // const navigatetoAddsupervisors=()=>{
  //     navigate('/addsupervisors');
  // }
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const states = State.getStatesOfCountry("IN");
  const [city, setCity] = useState([]);

  const onChange = (e) => {
    setCity(City.getCitiesOfState("IN", e.target.value));
  };
  return (
    <div className="list_main">
      <h3>List of Supervisors</h3>
      <StateCity
        errorc={errors.sup_city?.message}
        namec={"sup_city"}
        registerc={{ ...register("sup_city") }}
        errors={errors.sup_state?.message}
        names={"sup_state"}
        registers={{ ...register("sup_state") }}
        onChange={onChange}
        city={city}
        states={states}
      />
      <div className="buttons">
        <BlackButton name={"Show List"} />
        <LightButton name={"Add Supervisor"} handleClick={handleNext} />
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Assigned Loocafe</th>
        </tr>
        <tr>
          <td>Rohini</td>
          <td>Supervisor</td>
          <td>
            <ViewButton name={"view"} />
          </td>
        </tr>
        <tr>
          <td>Rohini</td>
          <td>Supervisor</td>
          <td>
            <ViewButton name={"view"} />
          </td>
        </tr>
        <tr>
          <td>Rohini</td>
          <td>Supervisor</td>
          <td>
            <ViewButton name={"view"} />
          </td>
        </tr>
        <tr>
          <td>Rohini</td>
          <td>Supervisor</td>
          <td>
            <ViewButton name={"view"} />
          </td>
        </tr>
        <tr>
          <td>Rohini</td>
          <td>Supervisor</td>
          <td>
            <ViewButton name={"view"} />
          </td>
        </tr>
        <tr>
          <td>Rohini</td>
          <td>Supervisor</td>
          <td>
            <ViewButton name={"view"} />
          </td>
        </tr>
        <tr>
          <td>Rohini</td>
          <td>Supervisor</td>
          <td>
            <ViewButton name={"view"} />
          </td>
        </tr>
        <tr>
          <td>Rohini</td>
          <td>Supervisor</td>
          <td>
            <ViewButton name={"view"} />
          </td>
        </tr>
        <tr>
          <td>Rohini</td>
          <td>Supervisor</td>
          <td>
            <ViewButton name={"view"} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default List;
