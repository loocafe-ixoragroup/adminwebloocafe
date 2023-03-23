import React, { useState } from "react";
import "./AddAssignedLoocafe.css";
import { City, State } from "country-state-city";
import {
  SimpleInput,
  BlackButton,
  StateCity,
} from "../../components/form-fields";
import { useTrait } from "../../hooks/useTrait";
import axios from "axios";
import Cookies from "universal-cookie";
const AddAssignedLoocafe = ({ show, setShow, onClose }) => {
  const cookies = new Cookies();
  const defaultState = useTrait("");
  const defaultCity = useTrait("");
  const states = State.getStatesOfCountry("IN");
  const [cities, setCities] = useState([]);
  const [unitNo, setUnitNo] = useState();
  const [unitArr, setUnitArr] = useState([]);
  const onChangeState = (e) => {
    setCities(City.getCitiesOfState("IN", e.target.value));
    defaultState.set(e.target.value);
    // console.log(defaultState.get());
  };

  const handleUnit = (e) => {
    console.log(e.target.value);
  };

  const onChangeCity = async (e) => {
    defaultCity.set(e.target.value);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/loocafe/get-unit-no`,
        { state: defaultState.get(), city: defaultCity.get() },
        { headers: { Authorization: `Bearer ${cookies.get("token")}` } }
      );
      // console.log(res);
      setUnitArr(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={show ? "smodal__container show" : "smodal__container"}
      onClick={onClose}
    >
      <div
        className="add-assigned-loocafe-main"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Add Assigned Loocafe</h3>
        {/* <div className="add-assigned-loocafe-sub"> */}
        <div className="simple-inputs-sub">
          <SimpleInput label={"LooCafe name"} value={unitArr[0]?.name} />
          {/* <SimpleInput label={"LooCafe Unit No"} /> */}
          <select onChange={handleUnit}>
            {unitArr.map(({ id, _id }) => (
              <option value={_id}>{id}</option>
            ))}
          </select>
        </div>
        <div className="state-city-sub">
          <StateCity
            onChangeState={onChangeState}
            onChangeCity={onChangeCity}
            city={cities}
            states={states}
            defaultState={defaultState.get()}
            defaultCity={defaultCity.get()}
          />
        </div>
        <div className="add-btn">
          <BlackButton name={"Add"} />
        </div>
      </div>
    </div>
  );
};

export default AddAssignedLoocafe;
