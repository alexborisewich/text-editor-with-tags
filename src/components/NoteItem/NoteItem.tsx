import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { s, types } from '.';

import { Button, HighlightText } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { addTag, deleteNote, editNote } from 'store';
import { formatNote, formatTag, getUniqueTagsFromNote } from 'utils';

const NoteItem = ({ dataTestId, note }: types.NoteItemProps) => {
  const { tags } = useAppSelector((state) => state.app);
  const [value, setValue] = useState(note);
  const [isEdit, toggleEdit] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUniqueTagsFromNote(value, tags).forEach((newTag) => {
      dispatch(addTag(formatTag(newTag)));
      toast.success(`Tag ${newTag} has been detected and successfully added!`);
    });
  }, [dispatch, tags, value]);

  const handleEdit = () => toggleEdit(!isEdit);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  const handleDelete = () => {
    dispatch(deleteNote(note));
    toast.success(`Note ${note} has been deleted.`);
  };

  const handleCancel = () => {
    setValue(note);
    toggleEdit(!isEdit);
  };

  const handleSave = () => {
    dispatch(editNote({ oldValue: note, newValue: formatNote(value) }));
    toggleEdit(!isEdit);
    toast.success(`Note has been updated.`);
  };

  return (
    <div className={s.container} data-testid={dataTestId}>
      <label className={s.item_label}>
        {isEdit ? (
          <>
            <input
              type='text'
              style={{ display: 'none' }}
              className={s.item_input}
              autoFocus
              value={value}
              onChange={handleChange}
            />
            <HighlightText text={note} tags={tags} />
          </>
        ) : (
          <span className={s.label_text}>{value}</span>
        )}
      </label>
      <div className={s.btns_wrapper}>
        {isEdit ? (
          <>
            <Button text='Save' onClick={handleSave} disabled={note === value} />
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
