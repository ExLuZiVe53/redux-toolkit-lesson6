import { configureStore } from '@reduxjs/toolkit';
import { postDetailsReducer } from './postDetailReducer';

// configureStore приймає об'єкт опцій
export const store = configureStore({
  reducer: {
    postDetails: postDetailsReducer,
  },
});
