import React, { Fragment } from "react";
import "./Drawer.css";
import { NavLink } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";

// function renderLinks(links) {
//   return links.map((link, index) => (
//     <li key={index}>
//       <NavLink to={link.to} exact={link.exact}>
//         {link.label}
//       </NavLink>
//     </li>
//   ));
// }

const Drawer = props => {
  const cls = ["drawer"];

  if (!props.isOpen) {
    cls.push("close");
  }

  const links = [
    { to: "/", label: "Главная", exact: true },
    { to: "/form", label: "Карточки", exact: false },
    { to: "/djumbo", label: "Жумбик", exact: false }
  ];

  return (
    <Fragment>
      <nav className={cls.join(" ")}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              {" "}
              <NavLink
                to={link.to}
                exact={link.exact}
                onClick={props.drowerHandler}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {props.isOpen && <Backdrop handler={props.drowerHandler} />}
    </Fragment>
  );
};

export default Drawer;
