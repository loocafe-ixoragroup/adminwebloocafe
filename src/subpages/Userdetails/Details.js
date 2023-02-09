import React, { useState } from "react";
import "./Details.css";
import {
  BlackButton,
  StateCity,
  ViewButton,
  DateInput,
} from "../../components/form-fields";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { City, State } from "country-state-city";

const schema = yup.object({
  sup_city: yup.string().required("Required!"),
  sup_state: yup.string().required("Required!"),
});
const Details = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const states = State.getStatesOfCountry("IN");
  const [city, setCity] = useState([]);

  const onChange = (e) => {
    setCity(City.getCitiesOfState("IN", e.target.value));
  };
  return (
    <div className="user_main">
      <h3>All User Details</h3>
      <StateCity
        errorc={errors.city?.message}
        namec={"city"}
        registerc={{ ...register("city") }}
        errors={errors.state?.message}
        names={"state"}
        registers={{ ...register("state") }}
        onChange={onChange}
        city={city}
        states={states}
      />
      <div className="buttons">
        <BlackButton name={"Show List"} />
      </div>
      <table>
        <tr>
          <th>S No.</th>
          <th>Name</th>
          <th>Mail Id</th>
          <th>Mobile No</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Rohini</td>
          <td>rohini@gmail.com</td>
          <td>7793982265</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Rohini</td>
          <td>rohini@gmail.com</td>
          <td>7793982265</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Rohini</td>
          <td>rohini@gmail.com</td>
          <td>7793982265</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Rohini</td>
          <td>rohini@gmail.com</td>
          <td>7793982265</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Rohini</td>
          <td>rohini@gmail.com</td>
          <td>7793982265</td>
        </tr>
      </table>
    </div>
  );
};

export default Details;
