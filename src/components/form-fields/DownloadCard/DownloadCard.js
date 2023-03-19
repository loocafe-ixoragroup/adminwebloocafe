import React from 'react';
import './DownloadCard.css';
import { IconDownload } from '../../../assets/icons';
const DownloadCard = ({label}) => {
  return (
    <div className='document-card'>
        <img src={IconDownload} alt="Download Icon"/>
        <p>{label}</p>
    </div>
  )
}

export default DownloadCard