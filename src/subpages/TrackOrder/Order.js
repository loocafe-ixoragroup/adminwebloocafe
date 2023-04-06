import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import "./Order.css";
import {
  ViewButton,
  DateInput,
  DropdownStatus,
  StateCity,
  BlackButton,
} from "../../components/form-fields";
import Tabs from "../../components/TabComponent/Tabs";
import { IconSearchbar } from "../../assets/icons";
import { City, State } from "country-state-city";
import { useTrait } from "../../hooks/useTrait";
import { useDispatch, useSelector } from "react-redux";
import { getAllLoocafe, getLoocafeBySearch } from "../../features/LoocafeSlice";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { updateFunctionalStatus } from "../../apis/Api";
const Order = () => {
  const navigate = useNavigate();
  const defaultState = useTrait("");
  const defaultCity = useTrait("");
  const states = State.getStatesOfCountry("IN");
  const [city1, setCity1] = useState([]);
  const [status, setStatus] = useState("");

  const { loocafe, isloading } = useSelector((state) => state.loocafe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLoocafe());
  }, []);

  const getBackground = (days) => {
    // console.log(days);
    if (days <= 0) return "black";
    else if (days <= 30) return "red";
    else if (days <= 60) return "#ffef00";
    else if (days <= 80) return "blue";
    else return "green";
  };

  const handleChange = (e) => {
    dispatch(getLoocafeBySearch({ loocafe: e.target.value }));
    // console.log(loocafe);
  };

  const onChange = (e, id) => {
    // setStatus(e.target.value);
    const res = updateFunctionalStatus(e.target.value, id);
    setTimeout(() => {
      dispatch(getAllLoocafe());
    }, 200);
    console.log(res);
  };

  const onChangeState = (e) => {
    setCity1(City.getCitiesOfState("IN", e.target.value));
    defaultState.set(e.target.value);
    // console.log(defaultState.get());
  };

  const onChangeCity = (e) => {
    defaultCity.set(e.target.value);
    // console.log(defaultCity.get());
  };
  return (
    <div className="Order_main">
      <h3>Track Loocafe’s</h3>
      {/* <p>Order found: 16</p> */}
      <div className="State-city-track">{/* <StateCity/> */}</div>
      {/* <div className="Order_date">
        <DateInput label={"From"} />
        <DateInput label={"To"} />
      </div>  */}
      {/* <div className="Track-order-statecity">
        <StateCity
          city={city1}
          states={states}
          onChangeState={onChangeState}
          onChangeCity={onChangeCity}
          defaultState={defaultState.get()}
          defaultCity={defaultCity.get()}
        />
      </div> */}
      {/* <div className="view-orders-button">
        <BlackButton name={"View"} />
      </div> */}
      <div className="track-main-top-bar">
        <div>
          <Tabs />
        </div>
        <div className="search-field">
          <input
            className="search-bar"
            type="text"
            key="search-bar"
            onChange={handleChange}
          />
          <img
            className="search-bar-img"
            src={IconSearchbar}
            alt="search Bar"
          />
        </div>
      </div>
      {/* <div className="search-bar"></div> */}
      <table className="order_table">
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Address</th>
          <th>Date</th>
          <th>Reminder</th>
          <th>Price</th>
          <th>Status</th>
          <th>Details</th>
        </tr>
        {isloading ? (
          <LoadingSpinner />
        ) : loocafe?.length > 0 ? (
          loocafe?.map((lc, index) => (
            <tr key={lc?.loocafe?._id}>
              <td>{index + 1}</td>
              <td>{lc?.loocafe?.name}</td>
              <td>{lc?.loocafe?.location.address}</td>
              <td>{lc?.agreement_start_date}</td>
              <td>
                <div
                  className="reminder-circle"
                  style={{
                    backgroundColor: getBackground(lc?.days_left),
                  }}
                />
              </td>
              <td>₹{lc?.monthly_rent}</td>
              <td>
                <DropdownStatus
                  value={lc?.loocafe?.functional_status}
                  id={lc?.loocafe?._id}
                  onChange={(e) => onChange(e, lc?.loocafe?._id)}
                />
              </td>

              <td>
                <Link to={`/track/download-kyc/${lc?.loocafe?._id}`}>
                  <ViewButton name={"Open form"} />
                </Link>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td></td>
            <td>No</td>
            <td>Data </td>
            <td>to </td>
            <td>Show</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default Order;