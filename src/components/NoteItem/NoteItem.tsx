import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  useEffect(() => {
    getUniqueTagsFromNote(value, tags).forEach((newTag) => {
      dispatch(addTag(formatTag(newTag)));
      toast.success(t('Messages.AddTagSuccess'));
    });
  }, [dispatch, t, tags, value]);

  const handleEdit = () => toggleEdit(!isEdit);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  const handleDelete = () => {
    dispatch(deleteNote(note));
    toast.success(t('Messages.DeleteTagSuccess'));
  };

  const handleCancel = () => {
    setValue(note);
    toggleEdit(!isEdit);
  };

  const handleSave = () => {
    dispatch(editNote({ oldValue: note, newValue: formatNote(value) }));
    toggleEdit(!isEdit);
    toast.success(t('UpdateNoteSuccess'));
  };

  return (
    <div className={s.container} data-testid={dataTestId}>
      <label className={s.item_label}>
        {isEdit ? (
          <>
            <input type='text' className={s.item_input} autoFocus value={value} onChange={handleChange} />
            <HighlightText text={note} tags={tags} />
          </>
        ) : (
          <span className={s.label_text}>{value}</span>
        )}
      </label>
      <div className={s.btns_wrapper}>
        {isEdit ? (
          <>
            <Button text={t('Buttons.Save')} onClick={handleSave} disabled={note === value} />
            <Button text={t('Buttons.Cancel')} onClick={handleCancel} />
          </>
        ) : (
          <>
            <Button text={t('Buttons.Edit')} onClick={handleEdit} />
            <Button text={t('Buttons.Delete')} onClick={handleDelete} />
          </>
        )}
      </div>
    </div>
  );
};

export default NoteItem;
