import React, { useState } from "react";
import "./Sidebar.css";
import { Link, Navigate, NavLink } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import SLUG from "../../resources/slugs";
import {
  IconAddSup,
  IconDashboard,
  IconHelp,
  IconKyc,
  IconSettings,
  IconTrack,
  IconTrackrental,
  IconUserDetails,
} from "../../assets/icons";
import MenuComp from "./MenuComp";
import Cookies from "universal-cookie";

const Sidebar = () => {
  const isMobile = window.innerWidth <= 1000;
  const cookies = new Cookies();

  const handleLogout = () => {
    cookies.remove("token", { path: "/" });
    // Navigate({ to: "/" });
  };

  return (
    <>
      <MenuComp isMobile={isMobile}>
        <div className="sidebar__container">
          <div className="sidebar__logo">
            <img src={Logo} alt="" />
          </div>
          <div className="sidebar__menu">
            <NavLink
              to={SLUG.dashboard}
              className={({ isActive }) =>
                isActive ? "sidebar__menu__item active" : "sidebar__menu__item"
              }
            >
              <img src={IconDashboard} alt="" />
              <span>Dashboard</span>
            </NavLink>
            <NavLink
              to={SLUG.kyc}
              className={({ isActive }) =>
                isActive ? "sidebar__menu__item active" : "sidebar__menu__item"
              }
            >
              <img src={IconKyc} alt="" />
              <span>KYC</span>
            </NavLink>
            <NavLink
              to={SLUG.track}
              className={({ isActive }) =>
                isActive ? "sidebar__menu__item active" : "sidebar__menu__item"
              }
            >
              <img src={IconTrack} alt="" />
              <span>Track</span>
            </NavLink>
            <NavLink
              to={SLUG.add_supervisor}
              className={({ isActive }) =>
                isActive ? "sidebar__menu__item active" : "sidebar__menu__item"
              }
            >
              <img src={IconAddSup} alt="" />
              <span>Supervisor</span>
            </NavLink>
            <NavLink
              to={SLUG.track_rentals}
              className={({ isActive }) =>
                isActive ? "sidebar__menu__item active" : "sidebar__menu__item"
              }
            >
              <img src={IconTrackrental} alt="" />
              <span>Track Rentals</span>
            </NavLink>
            <NavLink
              to={SLUG.user_details}
              className={({ isActive }) =>
                isActive ? "sidebar__menu__item active" : "sidebar__menu__item"
              }
            >
              <img src={IconUserDetails} alt="" />
              <span>User Details</span>
            </NavLink>
          </div>
          <div className="separator"></div>
          {/*<div className="sidebar__footer">
            <NavLink
              to={"/settings"}
              className={({ isActive }) =>
                isActive ? "sidebar__menu__item active" : "sidebar__menu__item"
              }
            >
              <img src={IconSettings} alt="" />
              <span>Settings</span>
            </NavLink>
            <NavLink
              to={"/help"}
              className={({ isActive }) =>
                isActive ? "sidebar__menu__item active" : "sidebar__menu__item"
              }
            >
              <img src={IconHelp} alt="" />
              <span>Help</span>
            </NavLink>
            <div className="separator"></div>

            <button className="btn_logout" onClick={handleLogout}>
              Logout
            </button>
          </div> */}
        </div>
      </MenuComp>
    </>
  );
};

export default Sidebar;
