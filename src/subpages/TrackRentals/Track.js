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
import { useDispatch, useSelector } from "react-redux";
import { trackRental } from "../../features/TrackRentalSlice";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const schema = yup.object({
  city: yup.string().required("Required!"),
  state: yup.string().required("Required!"),
  from: yup.string().required("Required!"),
  to: yup.string().required("Required!"),
});

const Track = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm({
    defaultValues: {
      city: "",
      state: "",
      from: "",
      to: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { rentals, isloading } = useSelector((state) => state.trackrental);
  const dispatch = useDispatch();

  const defaultState = useTrait("");
  const defaultCity = useTrait("");
  const states = State.getStatesOfCountry("IN");
  const [city1, setCity1] = useState([]);
  const onChangeState = (e) => {
    setCity1(City.getCitiesOfState("IN", e.target.value));
    defaultState.set(e.target.value);
    // console.log(defaultState.get());
  };

  const onChangeCity = (e) => {
    defaultCity.set(e.target.value);
    // console.log(defaultCity.get());
  };

  const handleShow = (data) => {
    dispatch(trackRental(data));
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
        <DateInput
          label={"From"}
          error={errors.from?.message}
          name={"from"}
          register={{ ...register("from") }}
        />
        <DateInput
          label={"To"}
          error={errors.to?.message}
          name={"to"}
          register={{ ...register("to") }}
        />
      </div>
      <div className="buttons">
        <BlackButton
          name={"Show List"}
          handleClick={handleSubmit(handleShow)}
        />
      </div>
      <table>
        <tr>
          <th>Pending</th>
          <th>Over Due</th>
          <th>Completed</th>
          <th>Rent</th>
          <th>View</th>
        </tr>
        {isloading ? (
          <LoadingSpinner />
        ) : rentals?.length > 0 ? (
          rentals.map((r) => (
            <tr key={r._id}>
              <td>
                {r.ele.rental_collection === "Pending" ? r.loocafe_name : "--"}
              </td>
              <td>
                {r.ele.rental_collection === "Over Due" ? r.loocafe_name : "--"}
              </td>
              <td>
                {r.ele.rental_collection === "Completed"
                  ? r.loocafe_name
                  : "--"}
              </td>
              <td>₹{r.ele.monthly_rent}</td>
              <td>
                <ViewButton name={"view"} />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No data to show</td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default Track;
