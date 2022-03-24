import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { reducer } from '../components/reducers/genre-filter-reducer';
import { createAPI } from '../services/api';

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}

const api = createAPI();

export const fetchQuestionAction = createAsyncThunk(
  'data/fetchQuestions',
  async () => {
    const data = await api.get(APIRoute.Films);
    // eslint-disable-next-line no-console
    console.log('data', data);
    // store.dispatch(loadFilms(data));
  },
);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
