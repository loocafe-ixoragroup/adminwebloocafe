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
import { useTrait } from "../../hooks/useTrait";

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

  const defaultState = useTrait("");
  const defaultCity = useTrait("");
  const states = State.getStatesOfCountry("IN");
  const [city1, setCity1] = useState([]);
  const onChangeState = (e) => {
    setCity1(City.getCitiesOfState("IN", e.target.value));
    defaultState.set(e.target.value);
    console.log(defaultState.get());
  };

  const onChangeCity = (e) => {
    defaultCity.set(e.target.value);
    console.log(defaultCity.get());
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
        city={city1}
        states={states}
        onChangeState={onChangeState}
        onChangeCity={onChangeCity}
        defaultState={defaultState.get()}
        defaultCity={defaultCity.get()}
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
