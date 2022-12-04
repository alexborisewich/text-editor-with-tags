import React from 'react';
import { toast } from 'react-toastify';

import { s, types } from '.';

import { Button } from 'components';
import { useAppDispatch } from 'hooks';
import { deleteTag } from 'store';

const TagItem = ({ dataTestId, text }: types.TagItemProps) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteTag(text));
    toast.success(`Tag ${text} has been deleted.`);
  };
  return (
    <div className={s.container} data-testid={dataTestId}>
      <span className={s.item_text}>{text}</span>
      <Button text='X' onClick={handleDelete} />
    </div>
  );
};

export default TagItem;
