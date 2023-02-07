import React, { useState } from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import SLUG from "../../resources/slugs";
import {
  IconAddSup,
  IconDashboard,
  IconHelp,
  IconKyc,
  IconSettings,
  IconTrack,
} from "../../assets/icons";
import MenuComp from "./MenuComp";

const Sidebar = () => {
  const isMobile = window.innerWidth <= 1000;
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
              <span>Add Supervisor</span>
            </NavLink>
            <NavLink
              to={SLUG.add_supervisor}
              className={({ isActive }) =>
                isActive ? "sidebar__menu__item active" : "sidebar__menu__item"
              }
            >
              <img src={IconAddSup} alt="" />
              <span>Track Rentals</span>
            </NavLink>
            <NavLink
              to={SLUG.add_supervisor}
              className={({ isActive }) =>
                isActive ? "sidebar__menu__item active" : "sidebar__menu__item"
              }
            >
              <img src={IconAddSup} alt="" />
              <span>User Details</span>
            </NavLink>
          </div>
          <div className="separator"></div>
          <div className="sidebar__footer">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "sidebar__menu__item active" : "sidebar__menu__item"
              }
            >
              <img src={IconSettings} alt="" />
              <span>Settings</span>
            </NavLink>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "sidebar__menu__item active" : "sidebar__menu__item"
              }
            >
              <img src={IconHelp} alt="" />
              <span>Help</span>
            </NavLink>
          </div>
        </div>
      </MenuComp>
    </>
  );
};

export default Sidebar;
