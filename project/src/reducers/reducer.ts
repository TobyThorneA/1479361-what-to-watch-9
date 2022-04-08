import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import {
  changeGenre,
  loadComments,
  loadCurrentFilm,
  loadFavoriteFilms,
  loadAllFilms,
  loadMoreLikeFilms,
  loadPromoFilm,
  requireAuthorization,
  setError,
  showMore,
  setCurrentFilmStatus,
  setPromoFilmStatus,
  defaultFilmsCount,
  playOrPause
} from '../store/action';
import { fetchCommentsAction } from '../store/api-action';
import { GenreFilterReducerProps } from '../types';

const dataFilm = {
  id: 0,
  name: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [''],
  runTime: 0,
  genre: '',
  released: 0,
  isFavorite: true,
};

const dataUserAcc = {
  avatarUrl: '',
  email: '',
  id: 0,
  name: '',
  token: '',
};

const defaultData: GenreFilterReducerProps = {
  genre: 'All Genres',
  filmsCount: 8,
  allFilms: [],
  favoriteFilms: [],
  moreLikeFilms: [],
  currentFilm: dataFilm,
  promoFilm: dataFilm,
  comments: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: '',
  dataUser: dataUserAcc,
  playOrPause: true,
  loadingComment: false,
};

const reducer = createReducer(defaultData, (builder) => {
  builder
    .addCase(fetchCommentsAction.pending, (state) => {
      state.loadingComment = true;
    })
    .addCase(fetchCommentsAction.fulfilled, (state) => {
      state.loadingComment = false;
    })
    .addCase(fetchCommentsAction.rejected, (state) => {
      state.loadingComment = false;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filmsCount = defaultData.filmsCount;
    })
    .addCase(defaultFilmsCount, (state) => {
      state.filmsCount = defaultData.filmsCount;
    })
    .addCase(showMore, (state) => {
      state.filmsCount += 8;
    })
    .addCase(loadAllFilms, (state, action) => {
      state.allFilms = action.payload;
    })
    .addCase(loadCurrentFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    })
    .addCase(loadMoreLikeFilms, (state, action) => {
      state.moreLikeFilms = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(requireAuthorization, (state,action) => {
      state.authorizationStatus = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setError, (state,action) => {
      state.error = action.payload;
    })
    .addCase(setPromoFilmStatus, (state, action) => {
      state.promoFilm.isFavorite = action.payload;
    })
    .addCase(playOrPause, (state, action) => {
      state.playOrPause = action.payload;
    })
    .addCase(setCurrentFilmStatus, (state, action) => {
      state.currentFilm.isFavorite = action.payload;
    });
});

export {reducer};
