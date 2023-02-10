import React, { useState } from "react";
import "./Order.css";
import {
  ViewButton,
  DateInput,
  StateCity,
  BlackButton,
} from "../../components/form-fields";
import { City, State } from "country-state-city";
import { useTrait } from "../../hooks/useTrait";
const Order = () => {
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
    <div className="Order_main">
      <h3>Track Your Order</h3>
      <p>Order found: 16</p>
      <div className="Order_date">
        <StateCity
          city={city1}
          states={states}
          onChangeState={onChangeState}
          onChangeCity={onChangeCity}
          defaultState={defaultState.get()}
          defaultCity={defaultCity.get()}
        />
      </div>
      <BlackButton name={"View"} />
      <table className="order_table">
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Address</th>
          <th>Date</th>
          <th>Price</th>
          <th>Status</th>
          <th>Expenses</th>
        </tr>
        <tr>
          <td>#2525</td>
          <td>Rohini</td>
          <td>201, Sainikpuri</td>
          <td>07 feb 2023</td>
          <td>₹10000</td>
          <td>Live</td>
          <td>
            <ViewButton name={"Open form"} />
          </td>
        </tr>
        <tr>
          <td>#2525</td>
          <td>Rohini</td>
          <td>201, Sainikpuri</td>
          <td>07 feb 2023</td>
          <td>₹10000</td>
          <td>Live</td>
          <td>
            <ViewButton name={"Open form"} />
          </td>
        </tr>
        <tr>
          <td>#2525</td>
          <td>Rohini</td>
          <td>201, Sainikpuri</td>
          <td>07 feb 2023</td>
          <td>₹10000</td>
          <td>Live</td>
          <td>
            <ViewButton name={"Open form"} />
          </td>
        </tr>
        <tr>
          <td>#2525</td>
          <td>Rohini</td>
          <td>201, Sainikpuri</td>
          <td>07 feb 2023</td>
          <td>₹10000</td>
          <td>Live</td>
          <td>
            <ViewButton name={"Open form"} />
          </td>
        </tr>
        <tr>
          <td>#2525</td>
          <td>Rohini</td>
          <td>201, Sainikpuri</td>
          <td>07 feb 2023</td>
          <td>₹10000</td>
          <td>Live</td>
          <td>
            <ViewButton name={"Open form"} />
          </td>
        </tr>
        <tr>
          <td>#2525</td>
          <td>Rohini</td>
          <td>201, Sainikpuri</td>
          <td>07 feb 2023</td>
          <td>₹10000</td>
          <td>Live</td>
          <td>
            <ViewButton name={"Open form"} />
          </td>
        </tr>
        <tr>
          <td>#2525</td>
          <td>Rohini</td>
          <td>201, Sainikpuri</td>
          <td>07 feb 2023</td>
          <td>₹10000</td>
          <td>Live</td>
          <td>
            <ViewButton name={"Open form"} />
          </td>
        </tr>
        <tr>
          <td>#2525</td>
          <td>Rohini</td>
          <td>201, Sainikpuri</td>
          <td>07 feb 2023</td>
          <td>₹10000</td>
          <td>Live</td>
          <td>
            <ViewButton name={"Open form"} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Order;
