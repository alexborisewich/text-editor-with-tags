import React from 'react';
import { Link } from 'react-router-dom';

import { s, types } from '.';

import { ROUTER_PATHS } from 'settings';

const Logo = ({ dataTestId }: types.LogoProps) => (
  <Link className={s.logo} to={ROUTER_PATHS.welcome}>
    <span className={s.text} data-testid={dataTestId}>
      Text Editor
    </span>
  </Link>
);

export default Logo;
