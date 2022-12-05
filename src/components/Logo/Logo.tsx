import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { s, types } from '.';

import { ROUTER_PATHS } from 'settings';

const Logo = ({ dataTestId }: types.LogoProps) => {
  const { t } = useTranslation();
  return (
    <Link className={s.logo} to={ROUTER_PATHS.welcome}>
      <span className={s.text} data-testid={dataTestId}>
        {t('Header.Logo')}
      </span>
    </Link>
  );
};

export default Logo;
