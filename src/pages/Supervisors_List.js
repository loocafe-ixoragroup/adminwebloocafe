import React from 'react'
import SupervisorsList from '../subpages/SupervisorsList/SupervisorsList';
import AddAssignedLoocafe from '../subpages/AddAssignedLoocafe/AddAssignedLoocafe';
import ErrorPage from '../subpages/ErrorPage/ErrorPage';
import SupervisorDetails from '../subpages/SupervisorDetails/SupervisorDetails';
import UpdateKycForm from '../subpages/UpdateKycForm/UpdateKycForm';
import UpdateSupervisorDetails from '../subpages/UpdateSupervisorDetails/UpdateSupervisorDetails';
const Supervisors_List = () => {
  return (
    <div>
      {/* <UpdateSupervisorDetails/> */}
      <UpdateKycForm/>
      {/* <SupervisorDetails/> */}
      {/* <AddAssignedLoocafe/> */}
        {/* <SupervisorsList/> */}
        {/* <ErrorPage/> */}
    </div>
  )
}

export default Supervisors_List; 