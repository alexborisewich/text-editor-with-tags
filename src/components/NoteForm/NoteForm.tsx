import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { s, types } from '.';

import { List } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { addNote, addTag } from 'store';
import { formatNote, formatTag, getUniqueTagsFromNote, noteValidation, onPromiseHandler } from 'utils';

const NoteForm = ({ dataTestId }: types.NoteFormProps) => {
  const { tags, notes } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const { control, handleSubmit, watch, reset, getValues, setValue } = useForm<{ note: string }>();
  const { t } = useTranslation();

  useEffect(() => {
    const watchNoteValue = watch(
      ({ note }) =>
        note &&
        getUniqueTagsFromNote(note, tags).forEach((newTag) => {
          dispatch(addTag(formatTag(newTag)));
          toast.success(t('Messages.AddTagSuccsess'));
        })
    );
    return () => watchNoteValue.unsubscribe();
  }, [dispatch, t, tags, watch]);

  const handleFormSubmit = handleSubmit(({ note }) => {
    const newNote = formatNote(note);
    if (notes.includes(newNote)) {
      toast.error(t('Messages.AddNoteError'));
      return;
    }
    dispatch(addNote(newNote));
    toast.success(t('Messages.AddNoteSuccsess'));
    reset();
  });

  const handleOnClickTag = (tag: string) => {
    const { note } = getValues();
    setValue('note', note.concat(` #${tag}`));
  };

  return (
    <form className={s.form} data-testid={dataTestId} onSubmit={onPromiseHandler(handleFormSubmit)}>
      <Controller
        name='note'
        control={control}
        rules={noteValidation}
        defaultValue=''
        render={({ field, fieldState: { error } }) => (
          <div className={s.wrapper}>
            <label className={s.label}>
              <h4 className={s.label_text}>{t('NoteForm.Title')}</h4>
              <p className={s.help}>{t('NoteForm.Help')}</p>
              <textarea className={s.textarea} placeholder={`${t('NoteForm.Placeholder')}`} {...field} />
            </label>
            {error && <span className={s.error_message}>{error.message}</span>}
          </div>
        )}
      />
      <input className={s.submit} type='submit' value={`${t('Buttons.Add')}`} />
      <input className={s.submit} type='reset' value={`${t('Buttons.Clear')}`} onClick={() => reset()} />
      <List type='tags' data={tags} onClickTag={handleOnClickTag} />
    </form>
  );
};

export default NoteForm;
