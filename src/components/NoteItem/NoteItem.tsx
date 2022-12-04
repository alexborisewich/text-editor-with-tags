import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { s, types } from '.';

import { Button } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { addTag, deleteNote, editNote } from 'store';
import { formatNote, getUniqueTagsFromNote } from 'utils';

const NoteItem = ({ dataTestId, text }: types.NoteItemProps) => {
  const { tags } = useAppSelector((state) => state.app);
  const [value, setValue] = useState(text);
  const [isEdit, toggleEdit] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUniqueTagsFromNote(value, tags).forEach((newTag) => {
      dispatch(addTag(newTag));
      toast.success(`Tag ${newTag} has been detected and successfully added!`);
    });
  }, [dispatch, tags, value]);

  const handleEdit = () => toggleEdit(!isEdit);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  const handleDelete = () => {
    dispatch(deleteNote(text));
    toast.success(`Note ${text} has been deleted.`);
  };

  const handleCancel = () => {
    setValue(text);
    toggleEdit(!isEdit);
  };

  const handleSave = () => {
    dispatch(editNote({ oldValue: text, newValue: formatNote(value) }));
    toggleEdit(!isEdit);
    toast.success(`Note has been updated.`);
  };

  return (
    <div className={s.container} data-testid={dataTestId}>
      <label className={s.item_label}>
        {isEdit ? (
          <input type='text' className={s.item_input} autoFocus value={value} onChange={handleChange} />
        ) : (
          <span className={s.item_text}>{text}</span>
        )}
      </label>
      <div className={s.btns_wrapper}>
        {isEdit ? (
          <>
            <Button text='Save' onClick={handleSave} />
            <Button text='Cancel' onClick={handleCancel} />
          </>
        ) : (
          <>
            <Button text='Edit' onClick={handleEdit} />
            <Button text='Delete' onClick={handleDelete} />
          </>
        )}
      </div>
    </div>
  );
};

export default NoteItem;
