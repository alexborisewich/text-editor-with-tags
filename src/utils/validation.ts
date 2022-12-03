export const noteValidation = {
  required: 'Strict required',
  validate: (value: string) => (value.length < 2 ? 'Note text should includes at least 2 symbols' : true),
};
