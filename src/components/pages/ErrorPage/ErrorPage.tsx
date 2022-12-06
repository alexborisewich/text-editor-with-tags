import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import { s, types } from '.';

import { ROUTER_PATHS } from 'settings';

const ErrorPage = ({ dataTestId }: types.ErrorPageProps) => {
  const { t } = useTranslation();
  const locationState = useLocation().state as { errorText: string };
  const { errorText } = locationState;
  return (
    <section className={s.container} data-testid={dataTestId}>
      <h2 className={s.title}>{t('ErrorPage.Title')}</h2>
      <p className={s.text}>{t('ErrorPage.Text')}</p>
      <p className={s.text}>{errorText}</p>
      <Link to={ROUTER_PATHS.welcome}>{t('ErrorPage.Link')}</Link>
    </section>
  );
};

export default ErrorPage;
