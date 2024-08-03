import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    submissions: [],
  },
  reducers: {
    submitContactForm: (state, action) => {
      state.submissions.push(action.payload);
    },
  },
});

export const { submitContactForm } = contactSlice.actions;

export default contactSlice.reducer;
