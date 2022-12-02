import React from 'react';

import { s, types } from '.';

const Footer = ({ dataTestId }: types.FooterProps) => (
  <footer className={s.footer} data-testid={dataTestId}>
    <span>Footer</span>
  </footer>
);

export default Footer;
