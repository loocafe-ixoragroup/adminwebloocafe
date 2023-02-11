import React, { useState } from "react";
import "./Order.css";
import {
  ViewButton,
  DateInput, DropdownStatus,
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
      <h3>Track Loocafe’s</h3>
      <p>Order found: 16</p>
      <div className="Order_date">
        <DateInput label={"From"}/>
        <DateInput label={"To"}/>
        </div>
        <div className="Track-order-statecity">
        <StateCity
          city={city1}
          states={states}
          onChangeState={onChangeState}
          onChangeCity={onChangeCity}
          defaultState={defaultState.get()}
          defaultCity={defaultCity.get()}
        />
      </div>
      <div className="view-orders-button">
      <BlackButton name={"View"} />
      </div>
      <table className="order_table">
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Address</th>
          <th>Date</th>
          <th>Price</th>
          <th>Status</th>
          <th>Details</th>
        </tr>
        <tr>
          <td>#2525</td>
          <td>Rohini</td>
          <td>201, Sainikpuri</td>
          <td>07 feb 2023</td>
          <td>₹10000</td>
          <td><DropdownStatus/></td>
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
          <td><DropdownStatus/></td>
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
          <td><DropdownStatus/></td>
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
          <td><DropdownStatus/></td>
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
          <td><DropdownStatus/></td>
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
          <td><DropdownStatus/></td>
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
          <td><DropdownStatus/></td>
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
          <td><DropdownStatus/></td>
          <td>
            <ViewButton name={"Open form"} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Order;
