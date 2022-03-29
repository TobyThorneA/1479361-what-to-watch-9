import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { CommentsServer, FilmServer, PromoServer } from '../types';

export const changeGenre = createAction<string>('CHANGE_GENRE');
export const showMore = createAction('SHOW_MORE');
export const loadFilmsServer = createAction<Array<FilmServer>>('LOAD_FILMS_SERVER');
export const loadPromoServer = createAction<PromoServer>('LOAD_PROMO_SERVER');
export const loadCommentsServer = createAction<Array<CommentsServer>>('LOAD_COMMENTS_SERVER');
export const requireAuthorization = createAction<AuthorizationStatus>('REQUARE_AUTHORIZATION');
export const setError = createAction<string>('SET_ERROR');
