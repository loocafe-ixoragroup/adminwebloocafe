import React from 'react';
import './Details.css'
import { BlackButton, StateCity , ViewButton, DateInput} from "../../components/form-fields";
const details = () => {
  return (
    <div className='user_main'>
        <h3>All User Details</h3>
        <StateCity/>
        <div className='buttons'>
        <BlackButton name={"Show List"}/>
        </div>
        <table>
            <tr>
                <th>S No.</th>
                <th>Name</th>
                <th>Mail Id</th>
                <th>Mobile No</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Rohini</td>
                <td>rohini@gmail.com</td>
                <td>7793982265</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Rohini</td>
                <td>rohini@gmail.com</td>
                <td>7793982265</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Rohini</td>
                <td>rohini@gmail.com</td>
                <td>7793982265</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Rohini</td>
                <td>rohini@gmail.com</td>
                <td>7793982265</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Rohini</td>
                <td>rohini@gmail.com</td>
                <td>7793982265</td>
            </tr>
        </table>
    </div>
  )
}

export default details