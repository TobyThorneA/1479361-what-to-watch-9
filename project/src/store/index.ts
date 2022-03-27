import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../components/reducers/genre-filter-reducer';
import { createAPI } from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
