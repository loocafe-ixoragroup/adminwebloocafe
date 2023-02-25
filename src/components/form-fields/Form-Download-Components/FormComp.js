import React from 'react'
import './FormComp.css'
const FormComp = ({label,name}) => {
  return (
    <div className='download-form-fields1'>
       <p className='download_label1'>{label}</p>
       <p className='download_name1'>{name}</p>
    </div>
  )
}

export default FormComp