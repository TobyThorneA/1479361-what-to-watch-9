import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('CHANGE_GENRE');
