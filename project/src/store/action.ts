import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { CommentsServer, FilmServer, PromoServer } from '../types';

export const changeGenre = createAction<string>('CHANGE_GENRE');
export const showMore = createAction('SHOW_MORE');
export const loadFilmsServer = createAction<Array<FilmServer>>('LOAD_FILMS_SERVER');
export const loadCurrentFilmServer = createAction<FilmServer>('LOAD_CURRENT_FILM_SERVER');
export const loadMoreLikeFilmsServer = createAction<Array<FilmServer>>('LOAD_MORE_LIKE_FILMS_SERVER');
export const loadFavoriteFilmsServer = createAction<Array<FilmServer>>('LOAD_FAVORITE_FILMS_SERVER');
export const loadPromoServer = createAction<PromoServer>('LOAD_PROMO_SERVER');
export const loadCommentsServer = createAction<Array<CommentsServer>>('LOAD_COMMENTS_SERVER');
export const requireAuthorization = createAction<AuthorizationStatus>('REQUARE_AUTHORIZATION');
export const setError = createAction<string>('SET_ERROR');
export const trueFalse = createAction<boolean>('TRUE_FALSE');
export const trueFalseFilm = createAction<boolean>('TRUE_FALSE_FILM');
export const redirectToRoute = createAction<AppRoute>('REDIRECT_TO_ROUTE');
