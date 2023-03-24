import React, { useContext } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
//import { IconEnvelope, IconBell } from "../../assets/icons";
import { SidebarContext } from "../../hooks/useSidebar";
import slugs from "../../resources/slugs";

const Header = () => {
  const { currentItem } = useContext(SidebarContext);

  let title;

  switch (true) {
    case currentItem === slugs.dashboard:
      title = "Dashboard";
      break;
    case currentItem === slugs.kyc:
      title = "KYC";
      break;
    case currentItem === slugs.track:
      title = "Track";
      break;
    // case currentItem === slugs.download_kyc || currentItem === slugs.edit_kyc:
    //   title = "Open Form";
    //   break;
    case currentItem === slugs.get_supervisor ||
      currentItem === slugs.add_supervisor ||
      currentItem === slugs.assigned_loocafe ||
      currentItem === slugs.edit_supervisor ||
      currentItem === slugs.supervisor:
      title = "Supervisor";
      break;
    // case currentItem === slugs.supervisor:
    //   title = "List All supervisors";
    //   break;
    case currentItem === slugs.track_rentals:
      title = "Track Rentals";
      break;
    case currentItem === slugs.user_details:
      title = "User Details";
      break;
    default:
      title = "";
      break;
  }

  return (
    <div className="header_block">
      <span>{title}</span>
      <div className="user__icons">
        {/* <div className="icon">
          <img src={IconEnvelope} alt="" />
          <span></span>
        </div> */}

        {/* <div className="icon">
          <img src={IconBell} alt="" />
          <span></span>
        </div> */}
        <Link to="/dashboard">
          <div className="user__avtar"></div>
        </Link>
      </div>
    </div>
  );
};

export default Header;