import {createSlice} from '@reduxjs/toolkit';

import {deleteArray} from '../../../utils/helpers';

interface FeedbackState {
  wishlist: any[];
}

const initialState: FeedbackState = {
  wishlist: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setWishlist: (state, action) => {
      if (!action.payload) return;
      const {payload} = action;

      const wishlistIdx = state.wishlist.findIndex(
        (item: any) => item?.key === payload?.key,
      );
      // Validate for removing whistlist
      if (wishlistIdx >= 0) {
        state.wishlist = deleteArray(state.wishlist, wishlistIdx);
      } else {
        state.wishlist = [action.payload, ...state.wishlist];
      }
    },
  },
  extraReducers: builder => {},
});

export const {setWishlist} = bookSlice.actions;

export default bookSlice.reducer;
