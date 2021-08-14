import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  totalResults: 0,
  success: false,
  movie: {}
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
      getListSuccess: (state, action) => {
        state.success = true;
        state.movies = (action.payload.movies && 
          action.payload.movies.map((item) => ({ 
            ...item, Poster: item.Poster !== 'N/A' ? item.Poster : null
          }))) || [];

        state.totalResults = action.payload.totalResults;
      },
      getListError: (state, action) => {
        state.movies = [];
        state.totalResults = 0;
        state.success = false;
      },
      detailSuccess: (state, action) => {
        const movie = action.payload.movie;

        state.success = true;
        state.movie = movie;
        state.movie.Actors = movie.Actors.split(', ') || [];
        state.movie.Genre = movie.Genre.split(', ') || [];
        state.movie.Poster = movie.Poster !== 'N/A' ? movie.Poster : null;
      },
      detailLoading: (state) => {
        state.success = false;
        state.movie = {};
      }
    },
  });

export const { getListSuccess, getListError, detailSuccess, detailLoading } = movieSlice.actions;

export default movieSlice.reducer;
