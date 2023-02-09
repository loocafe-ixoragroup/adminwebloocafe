import React from 'react';
import { BlackButton , Phoneinput , SimpleInput , PhotoUpload, StateCity} from '../../components/form-fields';
import './Supervisor.css';
const Supervisor = () => {
  return (
    <div className='supervisor_main'>
        <h3>Add Supervisor</h3>
        <div className='UploadPhoto'><PhotoUpload/></div>
        <SimpleInput name={"Applicant's Name"} error={""}/>
        <div className='mobile_no'>
           <Phoneinput name={"Mobile No."} error={""}/>
           <Phoneinput name={"Alternative Mobile No."} error={""} />
        </div>
        <StateCity/>
        <SimpleInput name={"Create User Id"} error={""}/>
        <SimpleInput name={"Create Password"} error={""} type="password"/>
        <SimpleInput name={"Confirm Password"} error={""} type="password"/>
        <div className='buttons'>
            <BlackButton name={"Submit"}/>
        </div>
    </div>
  )
}

export default Supervisor