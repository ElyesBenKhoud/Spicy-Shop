import React from "react";
import { slide as Menu } from "react-burger-menu";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const Sidebar = () => {
  return (
    <Menu noOverlay onStateChange={toggleMenu}>
      <a className="menu-item" href=" ">
        Home
      </a>
      <a className="menu-item" href=" ">
        About
      </a>
      <a className="menu-item" href=" ">
        Contact
      </a>
    </Menu>
  );
};

export default Sidebar;
