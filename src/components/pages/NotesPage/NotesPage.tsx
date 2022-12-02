import React from 'react';

import { s, types } from '.';

const NotesPage = ({ dataTestId }: types.NotesPageProps) => (
  <section className={s.container} data-testid={dataTestId}>
    <span>NotesPage</span>
  </section>
);

export default NotesPage;
