import React, {useState} from 'react';
import './Tabs.css';
import All from '../../subpages/DummyPages/All'
import Live from '../../subpages/DummyPages/Live'
import Maintainance from '../../subpages/DummyPages/Maintainance'
import Removed from '../../subpages/DummyPages/Removed'
const Tabs = () => {
  const [activeTab , setActiveTab] = useState("all");

  const handleAll = () => {
    setActiveTab("all");
  }
  const handleLive = () => {
    setActiveTab("live");
  }
  const handleMaintainance = () => {
    setActiveTab("maintainance");
  }
  const handleRemoved = () => {
    setActiveTab("removed");
  }
  return (
    <div className='Tabs'>
        <ul className="nav">
        <li className={activeTab === "all" ? "active" : ""} onClick={handleAll}>All Orders</li>
        <li className={activeTab === "live" ? "active" : ""} onClick={handleLive}>Live</li>
        <li className={activeTab === "maintainance" ? "active" : ""} onClick={handleMaintainance}>Maintainance</li>
        <li className={activeTab === "removed" ? "active" : ""} onClick={handleRemoved}>Removed</li>
        </ul>
      <div className="outlet">
       {/* <All/>
       <Live/>
       <Maintainance/>
       <Removed/> */}
       {/* {activeTab === "all" ? <All /> : <All />}
       {activeTab === "live" ? <Live /> : <All />} */}
      </div>
    </div>
  )
}

export default Tabs