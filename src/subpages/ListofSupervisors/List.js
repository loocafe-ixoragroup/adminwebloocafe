import React from "react";
//import { useNavigate } from "react-router-dom";
import "./List.css";
import { BlackButton, StateCity , ViewButton, LightButton} from "../../components/form-fields";

const List = () => {
    // const navigate = useNavigate();
    // const navigatetoAddsupervisors=()=>{
    //     navigate('/addsupervisors');
    // }
  return (
    <div className="list_main">
      <h3>List of Supervisors</h3>
      <StateCity />
      <div className="buttons">
        <BlackButton name={"Show List"} />
        <LightButton name={"Add Supervisor"}/>
      </div>
        <table>
            <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Assigned Loocafe</th>
            </tr>
            <tr>
                <td>Rohini</td>
                <td>Supervisor</td>
                <td><ViewButton name={"view"}/></td>
            </tr>
            <tr>
                <td>Rohini</td>
                <td>Supervisor</td>
                <td><ViewButton name={"view"}/></td>
            </tr>
            <tr>
                <td>Rohini</td>
                <td>Supervisor</td>
                <td><ViewButton name={"view"}/></td>
            </tr>
            <tr>
                <td>Rohini</td>
                <td>Supervisor</td>
                <td><ViewButton name={"view"}/></td>
            </tr>
            <tr>
                <td>Rohini</td>
                <td>Supervisor</td>
                <td><ViewButton name={"view"}/></td>
            </tr>
            <tr>
                <td>Rohini</td>
                <td>Supervisor</td>
                <td><ViewButton name={"view"}/></td>
            </tr>
            <tr>
                <td>Rohini</td>
                <td>Supervisor</td>
                <td><ViewButton name={"view"}/></td>
            </tr>
            <tr>
                <td>Rohini</td>
                <td>Supervisor</td>
                <td><ViewButton name={"view"}/></td>
            </tr>
            <tr>
                <td>Rohini</td>
                <td>Supervisor</td>
                <td><ViewButton name={"view"}/></td>
            </tr>
        </table>
    </div>
  );
};

export default List;
