import React, { useState } from "react";
import "./Track.css";
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

const Track = () => {
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
    <div className="track_main">
      <h3>Track Your Rentals</h3>
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
      <div className="date_picker">
        <DateInput label={"From"} />
        <DateInput label={"To"} />
      </div>
      <div className="buttons">
        <BlackButton name={"Show List"} />
      </div>
      <table>
        <tr>
          <th>Pending</th>
          <th>Over Due</th>
          <th>Completed</th>
          <th>Rent</th>
          <th>View</th>
        </tr>
        <tr>
          <td>Loocafe1</td>
          <td>--</td>
          <td>--</td>
          <td>₹10000</td>
          <td>
            <ViewButton name={"view"} />
          </td>
        </tr>
        <tr>
          <td>--</td>
          <td>Loocafe2</td>
          <td>--</td>
          <td>₹10000</td>
          <td>
            <ViewButton name={"view"} />
          </td>
        </tr>
        <tr>
          <td>--</td>
          <td>--</td>
          <td>Loocafe3</td>
          <td>₹10000</td>
          <td>
            <ViewButton name={"view"} />
          </td>
        </tr>
        <tr>
          <td>Loocafe4</td>
          <td>--</td>
          <td>--</td>
          <td>₹10000</td>
          <td>
            <ViewButton name={"view"} />
          </td>
        </tr>
        <tr>
          <td>--</td>
          <td>--</td>
          <td>Loocafe5</td>
          <td>₹10000</td>
          <td>
            <ViewButton name={"view"} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Track;
