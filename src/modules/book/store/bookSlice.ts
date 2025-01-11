import {createSlice} from '@reduxjs/toolkit';

import InitialState from '../../../store/types';

interface FeedbackState {
  list: InitialState;
}

const initialState: FeedbackState = {
  list: {
    loading: 'idle',
    message: '',
    data: [],
  },
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export const {} = bookSlice.actions;

export default bookSlice.reducer;
