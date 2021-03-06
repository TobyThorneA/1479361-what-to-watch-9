import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { CommentsServer, Film, PromoServer } from '../types';

export const changeGenre = createAction<string>('CHANGE_GENRE');
export const defaultFilmsCount = createAction('DEFAULT_FILMS_COUNT');
export const showMore = createAction('SHOW_MORE');
export const loadAllFilms = createAction<Array<Film>>('LOAD_FILMS_SERVER');
export const loadCurrentFilm = createAction<Film>('LOAD_CURRENT_FILM_SERVER');
export const loadMoreLikeFilms = createAction<Array<Film>>('LOAD_MORE_LIKE_FILMS_SERVER');
export const loadFavoriteFilms = createAction<Array<Film>>('LOAD_FAVORITE_FILMS_SERVER');
export const loadPromoFilm = createAction<PromoServer>('LOAD_PROMO_SERVER');
export const loadComments = createAction<Array<CommentsServer>>('LOAD_COMMENTS_SERVER');
export const requireAuthorization = createAction<AuthorizationStatus>('REQUARE_AUTHORIZATION');
export const setError = createAction<string>('SET_ERROR');
export const setPromoFilmStatus = createAction<boolean>('TRUE_FALSE');
export const setCurrentFilmStatus = createAction<boolean>('TRUE_FALSE_FILM');
export const redirectToRoute = createAction<string>('REDIRECT_TO_ROUTE');
export const playOrPause = createAction<boolean>('PLAY_OR_PAUSE');
