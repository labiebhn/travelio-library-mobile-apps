import {combineReducers} from '@reduxjs/toolkit';
import bookSlice from '../modules/book/store/bookSlice';

const rootReducers = combineReducers({
  book: bookSlice,
});

export default rootReducers;
