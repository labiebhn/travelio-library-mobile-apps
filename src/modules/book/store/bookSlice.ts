import {createSlice} from '@reduxjs/toolkit';

import InitialState from '../../../store/types';

interface FeedbackState {
  whishlist: any[];
}

const initialState: FeedbackState = {
  whishlist: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export const {} = bookSlice.actions;

export default bookSlice.reducer;
