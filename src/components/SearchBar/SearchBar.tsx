import React from 'react';

import { s, types } from '.';

import { useAppDispatch, useAppSelector } from 'hooks';
import { setSearchQuery } from 'store';

const SearchBar = ({ dataTestId }: types.SearchBarProps) => {
  const { searchQuery } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setSearchQuery(e.currentTarget.value));
  return (
    <div className={s.container} data-testid={dataTestId}>
      <form className={s.form}>
        <input
          className={s.input}
          value={searchQuery}
          onInput={handleInput}
          placeholder='Search by note text...'
          type='search'
        />
      </form>
    </div>
  );
};

export default SearchBar;
