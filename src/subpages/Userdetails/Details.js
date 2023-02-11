import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../features/UserSlice";

const schema = yup.object({
  city: yup.string().required("Required!"),
  state: yup.string().required("Required!"),
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

  const { users, isloading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  // const handleShow = (data) => {
  //   dispatch(getAllUser(data));
  // };

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
        <BlackButton name={"Show List"} handleClick={handleSubmit()} />
      </div>
      <table>
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>Mail Id</th>
          <th>Contact No</th>
        </tr>
        {users?.length > 0 ? (
          users?.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.full_name ? user.full_name : "-"}</td>
              <td>{user.email ? user.email : "-"}</td>
              <td>{user.phone ? user.phone : "-"}</td>
            </tr>
          ))
        ) : isloading ? (
          <>Loading...</>
        ) : (
          <tr>
            <td></td>
            <td>No data to show</td>
            <td></td>
            <td></td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default Details;
