import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('CHANGE_GENRE');
export const showMore = createAction('SHOW_MORE');
