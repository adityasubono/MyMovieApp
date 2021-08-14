import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/slice';

export const store = configureStore({
  reducer: {
    movie: movieReducer
  },
});
