import React from 'react';

import { s, types } from '.';

import { NoteItem, TagItem } from 'components';

const List = ({ dataTestId, type, data }: types.ListProps) => (
  <ul className={type === 'notes' ? s.notes_list : s.tags_list} data-testid={dataTestId}>
    {data.map((item) => (
      <li className={type === 'notes' ? s.notes_item : s.tags_item} key={item}>
        {type === 'notes' ? <NoteItem text={item} /> : <TagItem text={item} />}
      </li>
    ))}
  </ul>
);

export default List;
