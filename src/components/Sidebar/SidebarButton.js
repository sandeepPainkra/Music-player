import React from "react";
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import "./SidebarButton.css";

const SidebarButton = ({ title, to, Icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const btnClassName = isActive ? "btn_body active" : "btn_body";
  return (
    <Link to={to}>
      <div className={btnClassName}>
        <IconContext.Provider value={{ size: "25px", className: "btn_icon" }}>
          {<Icon />}
          <div className="title">{title}</div>
        </IconContext.Provider>
      </div>
    </Link>
  );
};

export default SidebarButton;
