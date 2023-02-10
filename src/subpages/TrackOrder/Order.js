import React from "react";
import "./Order.css";
import { ViewButton, DateInput, StateCity, DropdownStatus } from "../../components/form-fields";
const Order = () => {
  return (
    <div className="Order_main">
      <h3>Track Loocafe’s</h3>
      <p>Order found: 16</p>
      <div className="State-city-track">
         {/* <StateCity/> */}
      </div>
      <div className="Order_date">
        <DateInput label={"From"} />
        <DateInput label={"To"} />
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
