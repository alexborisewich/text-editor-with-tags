import React from 'react';

import { s, types } from '.';

const NotFoundPage = ({ dataTestId }: types.NotFoundPageProps) => (
  <section className={s.container} data-testid={dataTestId}>
    <span>NotFoundPage</span>
  </section>
);

export default NotFoundPage;
