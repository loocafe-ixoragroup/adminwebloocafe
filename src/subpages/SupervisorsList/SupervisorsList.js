import React, { useEffect, useState } from "react";
import "./SupervisorsList.css";
import { City, State } from "country-state-city";
import { useTrait } from "../../hooks/useTrait";
import {
  StateCity,
  SimpleInput,
  BlackButton,
  LightButton,
} from "../../components/form-fields";
import SupervisorCard from "../../components/SupervisorCard/SupervisorCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoocafeBySupervisor } from "../../features/LoocafeSlice";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddAssignedLoocafe from "../AddAssignedLoocafe/AddAssignedLoocafe";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
const SupervisorsList = () => {
  // const defaultState = useTrait("");
  // const defaultCity = useTrait("");
  // const states = State.getStatesOfCountry("IN");
  // const [cities, setCities] = useState([]);

  const dispatch = useDispatch();
  const { loocafe } = useSelector((state) => state.loocafe);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  // console.log(loocafe =);
  const navigate = useNavigate();
  const { supervisorId, isloading } = useParams();
  // console.log(typeof loocafe);

  const onClose = () => {
    setShow(false);
  };

  // var cards = [
  //   {
  //     id: 1,
  //   },
  //   {
  //     id: 2,
  //   },
  //   {
  //     id: 3,
  //   },
  //   {
  //     id: 4,
  //   },
  //   {
  //     id: 5,
  //   },
  //   {
  //     id: 6,
  //   },
  // ];

  // const onChangeState = (e) => {
  //   setCities(City.getCitiesOfState("IN", e.target.value));
  //   defaultState.set(e.target.value);
  //   // console.log(defaultState.get());
  // };

  // const onChangeCity = (e) => {
  //   defaultCity.set(e.target.value);
  //   // console.log(defaultCity.get());
  // };

  useEffect(() => {
    setLoading(true);
    dispatch(getLoocafeBySupervisor(supervisorId));
    setLoading(false);
  }, []);

  return (
    <div className="supervisors-list-main">
      <div className="supervisors-list-sub">
        <h3>Assigned Loocafes</h3>
        <button className="add-supervisor-btn" onClick={() => setShow(true)}>
          Add Assigned Loocafe
        </button>
      </div>
      <div>
        {/* <SimpleInput label={"LooCafe name"} />
        <SimpleInput label={"LooCafe Unit No"} /> */}
        {/* <StateCity
          onChangeState={onChangeState}
          onChangeCity={onChangeCity}
          city={cities}
          states={states}
          defaultState={defaultState.get()}
          defaultCity={defaultCity.get()}
        /> */}
      </div>
      {/* <div className="buttons">
        <BlackButton name={"Show List"} />
        <LightButton
          name={"Add Supervisor"}
          handleClick={() => navigate("/add-supervisor")}
        />
      </div> */}
      <div>
        {isloading ? (
          <LoadingSpinner />
        ) : loocafe.length !== 0 ? (
          <SupervisorCard loocafe={loocafe} />
        ) : (
          <ErrorPage setShow={setShow} />
        )}
      </div>
      <AddAssignedLoocafe show={show} setShow={setShow} onClose={onClose} />
    </div>
  );
};

export default SupervisorsList;
