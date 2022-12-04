import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setModalOpen: (state, action: PayloadAction<boolean>) => void (state.isModalOpen = action.payload),
    addNote: ({ notes }, action: PayloadAction<string>) => void notes.push(action.payload),
    addTag: ({ tags }, action: PayloadAction<string>) => void tags.push(action.payload),
    deleteNote: ({ notes }, action: PayloadAction<string>) => void notes.splice(notes.indexOf(action.payload), 1),
    deleteTag: ({ tags }, action: PayloadAction<string>) => void tags.splice(tags.indexOf(action.payload), 1),
    editNote: ({ notes }, action: PayloadAction<{ oldValue: string; newValue: string }>) => {
      const { oldValue, newValue } = action.payload;
      notes[notes.indexOf(oldValue)] = newValue;
    },
  },
});

export default appSlice.reducer;
export const { setModalOpen, addNote, addTag, deleteNote, deleteTag, editNote } = appSlice.actions;
