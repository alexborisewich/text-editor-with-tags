import React from 'react';

import { s, types } from '.';

const Main = ({ dataTestId }: types.MainProps) => (
  <main className={s.main} data-testid={dataTestId}>
    <span>Main</span>
  </main>
);

export default Main;
