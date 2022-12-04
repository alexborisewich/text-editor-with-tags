import React, { useMemo } from 'react';

import { s, types } from '.';

import { List, SearchBar } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setSearchQuery } from 'store';

const NotesPage = ({ dataTestId }: types.NotesPageProps) => {
  const dispatch = useAppDispatch();
  const { notes, tags, searchQuery } = useAppSelector((state) => state.app);
  const filteredNotes = useMemo(
    () => (searchQuery === '' ? notes : notes.filter((note) => note.includes(searchQuery))),
    [notes, searchQuery]
  );
  const handleOnClickTag = (tag: string) => void dispatch(setSearchQuery(tag));

  return (
    <section className={s.container} data-testid={dataTestId}>
      <SearchBar />
      <List type='tags' data={tags} onClickTag={handleOnClickTag} />
      <List type='notes' data={filteredNotes} />
    </section>
  );
};

export default NotesPage;
