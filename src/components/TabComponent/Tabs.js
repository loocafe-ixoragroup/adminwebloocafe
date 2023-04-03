import React, { useState } from "react";
import "./Tabs.css";
import { useDispatch } from "react-redux";
import {
  getAllLoocafe,
  getFunctionalLoocafe,
} from "../../features/LoocafeSlice";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const dispatch = useDispatch();
  // console.log(state, city);
  const handleAll = (e) => {
    const functional_status = e.target.innerText.toLowerCase();
    // console.log(functional_status);
    setActiveTab(functional_status);
    if (functional_status === "all") {
      dispatch(getAllLoocafe());
    } else {
      dispatch(getFunctionalLoocafe({ functional_status }));
    }
  };
  // const handleLive = () => {
  //   setActiveTab("live");
  //   console.log(activeTab);
  //   dispatch(getFunctionalLoocafe(state, city, activeTab));
  // };
  // const handleMaintainance = () => {
  //   setActiveTab("maintenance");
  //   console.log(activeTab);

  //   dispatch(getFunctionalLoocafe(state, city, activeTab));
  // };
  // const handleRemoved = () => {
  //   setActiveTab("removed");
  //   console.log(activeTab);

  //   dispatch(getFunctionalLoocafe(state, city, activeTab));
  // };
  return (
    <div className="Tabs">
      <ul className="nav">
        <li className={activeTab === "all" ? "active" : ""} onClick={handleAll}>
          All
        </li>
        <li
          className={activeTab === "live" ? "active" : ""}
          onClick={handleAll}
        >
          Live
        </li>
        <li
          className={activeTab === "maintenance" ? "active" : ""}
          onClick={handleAll}
        >
          Maintenance
        </li>
        <li
          className={activeTab === "removed" ? "active" : ""}
          onClick={handleAll}
        >
          Removed
        </li>
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
  );
};

export default Tabs;
