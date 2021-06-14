import React from "react";
import { NavLink } from "react-router-dom";

const nav = () => (
  <ul>
    <li>
      <NavLink activeStyle={{ color: "red" }} to={`/context`}>
        context
      </NavLink>
    </li>
    <li>
      <NavLink activeStyle={{ color: "red" }} to={`/recoil`}>
        recoil
      </NavLink>
    </li>
    <li>
      <NavLink activeStyle={{ color: "red" }} to={`/mobx`}>
        mobx
      </NavLink>
    </li>
    <li>
      <NavLink activeStyle={{ color: "red" }} to={`/hooks`}>
        hooks
      </NavLink>
    </li>
  </ul>
);

export default nav;
