import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../app/axiosConfig';

import { getListSuccess, detailSuccess, getListError, detailLoading } from './slice';

export const getList = createAsyncThunk(
    'movie/fetchListMovie',
    async ({ searchTerm, page }, thunkAPI) => {
      const response = await axiosInstance(`/?s=${searchTerm}&page=${page}`);

      if (response.data.Response === "False") {
        thunkAPI.dispatch(getListError());
        return response.data;
      }
      
      thunkAPI.dispatch(getListSuccess({ movies: response.data.Search, totalResults: (response.data.totalResults && parseInt(response.data.totalResults)) || 0 }));
      return response.data;
    }
  );


export const detailMovieById = createAsyncThunk(
  'movie/fetchDetailMovie',
  async (id, thunkAPI) => {
    thunkAPI.dispatch(detailLoading());
    const response = await axiosInstance(`/?i=${id}`);
    
    thunkAPI.dispatch(detailSuccess({ movie: response.data }));
    return response.data;
  }
);