import React from 'react';
import './UpdateSupervisorDetails.css';
import { Phoneinput , SimpleInput, BlackButton, LightButton } from '../../components/form-fields';

const UpdateSupervisorDetails = () => {
  return (
    <div className="update-supervisor-main">
        <div className='update-mobileno'>
        <Phoneinput label={"Mobile No."}/>
        <Phoneinput label={"Alternative Mobile No."}/>
        </div>
        <div>
           <SimpleInput label={"User Id"}/> 
        </div>
        <div className='buttons'>
        <BlackButton name={"Save"}/>
        <LightButton name={"Back"}/>
        </div>
    </div>
  )
}

export default UpdateSupervisorDetails