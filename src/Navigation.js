import React from "react";
import { NavLink } from "react-router-dom";
import routes from "./routes";

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink
          exact
          className="navigation-link"
          activeClassName="navigation-link-active"
          to={routes.home}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navigation-link"
          activeClassName="navigation-link-active"
          to={routes.shows}
        >
          Shows
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
