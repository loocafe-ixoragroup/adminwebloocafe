import React from "react";
import "./Order.css";
import { ViewButton, DateInput } from "../../components/form-fields";
const Order = () => {
  return (
    <div className="Order_main">
      <h3>Track Your Order</h3>
      <p>Order found: 16</p>
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
