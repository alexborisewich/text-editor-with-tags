import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { s, types } from '.';

import { ROUTER_PATHS } from 'settings';

const NavBar = ({ dataTestId }: types.NavBarProps) => (
  <nav data-testid={dataTestId} className={s.menu}>
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink
          className={({ isActive }) => cn(s.link, { [s.active as string]: isActive })}
          to={ROUTER_PATHS.welcome}
          end
        >
          Go to Main
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink className={({ isActive }) => cn(s.link, { [s.active as string]: isActive })} to={ROUTER_PATHS.notes}>
          My Notes
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
