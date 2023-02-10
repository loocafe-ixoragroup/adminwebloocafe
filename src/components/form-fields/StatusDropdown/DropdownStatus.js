import React from 'react'
import './DropdownStatus.css';
const DropdownStatus = () => {
  return (
    <div className='Status-dropdown'>
        <select>
            <option value="live">Live</option>
            <option value="maintainance">Maintainance</option>
            <option value="removed">Removed</option>
        </select>
    </div>
  )
}

export default DropdownStatus;