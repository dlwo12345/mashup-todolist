import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => (
  <ul>
    <li>
      <NavLink activeStyle={{color: 'red'}} to={`/context`}>
        context
      </NavLink>
    </li>
    <li>
      <NavLink activeStyle={{color: 'red'}} to={`/recoil`}>
        recoil
      </NavLink>
    </li>
  </ul>
);
