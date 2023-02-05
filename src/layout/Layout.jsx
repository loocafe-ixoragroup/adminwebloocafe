import React from "react";
import "./Layout.css";
import { Sidebar, Header, SidebarContext } from "../components";

const Layout = ({ children }) => {
  return (
    <SidebarContext>
      <div className="main__container">
        <Sidebar />
        <div className="main__block">
          <Header />
          <div className="content__block">{children}</div>
        </div>
      </div>
    </SidebarContext>
  );
};

export default Layout;
