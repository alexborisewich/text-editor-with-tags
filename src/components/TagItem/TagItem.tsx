import React from 'react';
import { toast } from 'react-toastify';

import { s, types } from '.';

import { Button } from 'components';
import { useAppDispatch } from 'hooks';
import { deleteTag } from 'store';

const TagItem = ({ dataTestId, tag, onClickTag }: types.TagItemProps) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteTag(tag));
    toast.success(`Tag #${tag} has been deleted.`);
  };
  return (
    <div className={s.container} data-testid={dataTestId} onClick={() => onClickTag!(tag)}>
      <span className={s.item_text}>{tag}</span>
      <Button text='X' onClick={handleDelete} />
    </div>
  );
};

export default TagItem;
