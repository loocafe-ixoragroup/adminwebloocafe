import React from 'react';
import './Track.css';
import { BlackButton, StateCity , ViewButton, DateInput} from "../../components/form-fields";
const Track = () => {
  return (
    <div className='track_main'>
        <h3>Track Your Rentals</h3>
        <StateCity/>
        <div className='date_picker'>
        <DateInput name={"From"}/>
        <DateInput name={"To"}/>
        </div>
        <div className='buttons'><BlackButton name={"Show List"}/></div>
        <table>
            <tr>
                <th>Pending</th>
                <th>Over Due</th>
                <th>Completed</th>
                <th>Rent</th>
                <th>View</th>
            </tr>
            <tr>
                <td>Loocafe1</td>
                <td>--</td>
                <td>--</td>
                <td>₹10000</td>
                <td><ViewButton name={"view"}/></td>
            </tr>
            <tr>
                <td>--</td>
                <td>Loocafe2</td>
                <td>--</td>
                <td>₹10000</td>
                <td><ViewButton name={"view"}/></td>
            </tr>
            <tr>
                <td>--</td>
                <td>--</td>
                <td>Loocafe3</td>
                <td>₹10000</td>
                <td><ViewButton name={"view"}/></td>
            </tr>
            <tr>
                <td>Loocafe4</td>
                <td>--</td>
                <td>--</td>
                <td>₹10000</td>
                <td><ViewButton name={"view"}/></td>
            </tr>
            <tr>
                <td>--</td>
                <td>--</td>
                <td>Loocafe5</td>
                <td>₹10000</td>
                <td><ViewButton name={"view"}/></td>
            </tr>
        </table>
    </div>
  )
}

export default Track