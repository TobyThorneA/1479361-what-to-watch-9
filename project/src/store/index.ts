import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../components/reducers/genre-filter-reducer';

export const store = configureStore({reducer});
