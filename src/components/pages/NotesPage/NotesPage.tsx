import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const handleOnClickTag = (tag: string) => void dispatch(setSearchQuery(tag));

  return (
    <section className={s.container} data-testid={dataTestId}>
      <h2 className={s.title}>{t('NotesPage.Title')}</h2>
      {notes.length ? (
        <>
          <SearchBar />
          <List type='tags' data={tags} onClickTag={handleOnClickTag} />
          {filteredNotes.length ? (
            <List type='notes' data={filteredNotes} />
          ) : (
            <p className={s.message}>{t('NotesPage.NotFound')}</p>
          )}
        </>
      ) : (
        <p className={s.message}>{t('NotesPage.NotHave')}</p>
      )}
    </section>
  );
};

export default NotesPage;
