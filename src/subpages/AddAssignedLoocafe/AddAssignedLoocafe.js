import React, { useState } from "react";
import "./AddAssignedLoocafe.css";
import { City, State } from "country-state-city";
import {
  SimpleInput,
  BlackButton,
  StateCity,
  LabelComp,
} from "../../components/form-fields";
import { useTrait } from "../../hooks/useTrait";
import axios from "axios";
import Cookies from "universal-cookie";
import { IconAsterisk } from "../../assets/icons";
import { useDispatch } from "react-redux";
import { assignLoocafe } from "../../apis/Api";
import { useParams } from "react-router-dom";
import { getLoocafeBySupervisor } from "../../features/LoocafeSlice";
const AddAssignedLoocafe = ({ show, setShow, onClose }) => {
  const { supervisorId } = useParams();
  const cookies = new Cookies();
  const defaultState = useTrait("");
  const defaultCity = useTrait("");
  const states = State.getStatesOfCountry("IN");
  const [cities, setCities] = useState([]);
  const [unitName, setUnitName] = useState("");
  const [unitNo, setUnitNo] = useState();
  const [unitArr, setUnitArr] = useState([]);

  const dispatch = useDispatch();
  const onChangeState = (e) => {
    setCities(City.getCitiesOfState("IN", e.target.value));
    defaultState.set(e.target.value);
    // console.log(defaultState.get());
  };

  const handleAssign = () => {
    console.log("in submission");
    assignLoocafe(unitNo, supervisorId);
    setTimeout(() => {
      setShow(false);
      dispatch(getLoocafeBySupervisor(supervisorId));
    }, 3000);
  };

  const handleUnit = (e) => {
    const arr = unitArr.filter((arr) => arr._id === e.target.value);
    setUnitName(arr[0].name);
    setUnitNo(arr[0]._id);
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
        <div className="simple-inputs-sub">
          
          {/* <SimpleInput label={"LooCafe Unit No"} /> */}

          <div className="select">
            <LabelComp name={"Loocafe Unit No."} error={""} />
            <select onChange={handleUnit} defaultValue="-">
              <option>--select--</option>
              {unitArr.map(({ id, _id }) => (
                <option key={_id} value={_id}>
                  {id}
                </option>
              ))}
            </select>
          </div>
          <SimpleInput label={"LooCafe name"} value={unitName} />
        </div>
        <div className="add-btn">
          <BlackButton name={"Add"} handleClick={handleAssign} />
        </div>
      </div>
    </div>
  );
};

export default AddAssignedLoocafe;
