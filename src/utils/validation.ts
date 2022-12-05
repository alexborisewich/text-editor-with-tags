import i18next from 'i18n';

export const noteValidation = {
  required: 'Strict required',
  validate: (value: string) => (value.length < 2 ? i18next.t('NoteForm.ValidationError') : true),
};
