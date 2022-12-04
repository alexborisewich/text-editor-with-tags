import React from 'react';

import { s, types } from '.';

import { List } from 'components';
import { useAppSelector } from 'hooks';

const NotesPage = ({ dataTestId }: types.NotesPageProps) => {
  const { notes, tags } = useAppSelector((state) => state.app);
  return (
    <section className={s.container} data-testid={dataTestId}>
      <List type='tags' data={tags} />
      <List type='notes' data={notes} />
    </section>
  );
};

export default NotesPage;
