import React from 'react';
//import UpdateFormComponents from '../Form-Download-Components/UpdateFormComponents';
import './StateCity.css'
const UpdateDropdown = ({label,name}) => {
  return (
    <div className='download-form-fields2'>
        <p className='download_label2'>{label}</p>
        {label === "Assigned Supervisor" ? (
            <select className='update-select'>
               <option value="S-1">Supervisor 1</option>
               <option value="S-2">Supervisor 2</option>
            <option value="S-3">Supervisor 3</option>
            </select>
        ) : (
        <select className='update-select'>
        <option value="Mini loocafe">Mini loocafe</option>
          <option value="Pink loocafe">Pink loocafe</option>
          <option value="Large loocafe">Large loocafe</option>
        </select>
        )}
    </div>
  )
}

export default UpdateDropdown