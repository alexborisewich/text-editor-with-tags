import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { s, types } from '.';

import { useAppDispatch, useAppSelector } from 'hooks';
import { addNote, addTag } from 'store';
import { getUniqueTagsFromNote, noteValidation, onPromiseHandler } from 'utils';

const NoteForm = ({ dataTestId }: types.NoteFormProps) => {
  const { tags, notes } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const { control, handleSubmit, watch, reset } = useForm<{ note: string }>();

  useEffect(() => {
    const watchNoteValue = watch(
      ({ note }) =>
        note &&
        getUniqueTagsFromNote(note, tags).forEach((newTag) => {
          dispatch(addTag(newTag));
          console.warn(`Tag ${newTag} has been detected and successfully added!`);
        })
    );
    return () => watchNoteValue.unsubscribe();
  }, [dispatch, tags, watch]);

  const handleFormSubmit = handleSubmit(({ note }) => {
    const newNote = note.trim();
    if (notes.includes(newNote)) {
      console.warn(`Note ${newNote} already exist!`);
      return;
    }
    dispatch(addNote(newNote));
    console.warn(`Note ${newNote} has been successfully added!`);
    reset();
  });

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
              <h4 className={s.label_text}>Add new note:</h4>
              <p className={s.help}>
                For automatically adding tags use '#' character and insert 'space' after finishing entering one or more
                tags. If you already have your notes and tags, you can edit, search and sort them on special pages.
              </p>
              <textarea className={s.textarea} placeholder='Input your note here...' {...field} />
            </label>
            {error && <span className={s.error_message}>{error.message}</span>}
          </div>
        )}
      />
      <input className={s.submit} type='submit' value='Add' />
      <input className={s.submit} type='reset' value='Clear' onClick={() => reset()} />
      {tags.map((tag) => (
        <span className={s.tag} key={tag}>
          {tag}
        </span>
      ))}
    </form>
  );
};

export default NoteForm;
