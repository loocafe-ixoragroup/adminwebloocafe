import React from 'react'
import './FormComponent.css';
const FormComponents = ({label,name}) => {
  return (
    <div className='download-form-fields2'>
       <p className='download_label2'>{label}</p>
       <p className='download_name2'>{name}</p>
    </div>
  )
}

export default FormComponents;