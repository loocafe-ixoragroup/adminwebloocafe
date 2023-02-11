import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSupervisor,
  getSupervisor,
} from "../../features/SupervisorSlice";
import { useTrait } from "../../hooks/useTrait";

const schema = yup.object({
  city: yup.string().required("Required"),
  state: yup.string().required("Required"),
});

const List = ({ setPage }) => {
  // const navigate = useNavigate();
  // const navigatetoAddsupervisors=()=>{
  //     navigate('/addsupervisors');
  // }
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      city: "",
      state: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  // const [defaultValue, setDefaultValue] = useState({ state: "", city: "" });
  const defaultState = useTrait("");
  const defaultCity = useTrait("");
  const states = State.getStatesOfCountry("IN");
  const [cities, setCities] = useState([]);

  const { supervisor, isloading } = useSelector((state) => state.supervisor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSupervisor());
  }, []);

  const handleShow = (data) => {
    dispatch(getSupervisor(data));
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const onChangeState = (e) => {
    setCities(City.getCitiesOfState("IN", e.target.value));
    defaultState.set(e.target.value);
    // console.log(defaultState.get());
  };

  const onChangeCity = (e) => {
    defaultCity.set(e.target.value);
    // console.log(defaultCity.get());
  };
  return (
    <div className="list_main">
      <h3>List of Supervisors</h3>
      <StateCity
        errorc={errors.city?.message}
        namec={"city"}
        registerc={{ ...register("city") }}
        errors={errors.state?.message}
        names={"state"}
        // onChange={onChange}
        registers={{ ...register("state") }}
        onChangeState={onChangeState}
        onChangeCity={onChangeCity}
        city={cities}
        states={states}
        defaultState={defaultState.get()}
        defaultCity={defaultCity.get()}
      />
      <div className="buttons">
        <BlackButton
          name={"Show List"}
          handleClick={handleSubmit(handleShow)}
        />
        <LightButton name={"Add Supervisor"} handleClick={handleNext} />
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Assigned Loocafe</th>
        </tr>
        {supervisor?.length > 0 ? (
          supervisor.map((s) => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>Supervisor</td>
              <td>
                <ViewButton name={"view"} />
              </td>
            </tr>
          ))
        ) : isloading?<>Loading...</>: (
          <tr>
            <td></td>
            <td> No data to show</td>
            <td></td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default List;
