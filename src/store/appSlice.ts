import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setModalOpen: (state, action: PayloadAction<boolean>) => void (state.isModalOpen = action.payload),
    addNote: (state, action: PayloadAction<string>) => void state.notes.push(action.payload),
    addTag: (state, action: PayloadAction<string>) => void state.tags.push(action.payload),
  },
});

export default appSlice.reducer;
export const { setModalOpen, addNote, addTag } = appSlice.actions;
