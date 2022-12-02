import React from 'react';

import { s, types } from '.';

const ErrorPage = ({ dataTestId }: types.ErrorPageProps) => (
  <section className={s.container} data-testid={dataTestId}>
    <span>ErrorPage</span>
  </section>
);

export default ErrorPage;
