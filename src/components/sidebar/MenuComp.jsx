import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

const MenuComp = ({ isMobile, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    bmBurgerButton: {
      zIndex: "19",
      position: "absolute",
      width: "26px",
      height: "20px",
      left: "15px",
      top: "27px",
    },
    bmBurgerBars: {
      background: "black",
    },
    bmBurgerBarsHover: {
      background: "gray",
    },
    bmCrossButton: {
      display: "none",
    },
    bmCross: {
      background: "blue",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      width: 245,
      zIndex: 30,
    },
    bmMenu: {
      background: "white",
      top: 0,
    },
    bmItem: {
      outline: "none",
      "&:focus": {
        outline: "none",
      },
    },
    bmMorphShape: {
      fill: "gray",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
      zIndex: 20,
    },
  };

  return (
    <Menu
      isOpen={!isMobile || isOpen}
      styles={styles}
      noOverlay={!isMobile}
      disableCloseOnEsc
      onStateChange={(state) => setIsOpen(state.isOpen)}
    >
      {children}
    </Menu>
  );
};

export default MenuComp;
