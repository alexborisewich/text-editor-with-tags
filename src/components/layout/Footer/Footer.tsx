import React from 'react';
import { useTranslation } from 'react-i18next';

import { s, types } from '.';

const Footer = ({ dataTestId }: types.FooterProps) => {
  const { t } = useTranslation();
  return (
    <footer className={s.footer} data-testid={dataTestId}>
      <div className={s.container}>
        <p className={s.copyright}>© 2022</p>
        <a className={s.link} href='https://github.com/alexborisewich' target='_blank' rel='noreferrer'>
          {t('Footer.Link')}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
