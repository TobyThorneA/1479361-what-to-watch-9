import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
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
  statusCurrentFilm,
  statusPromoFilm
} from '../../store/action';
import { GenreFilterReducerProps } from '../../types';

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

const defaultGenre: GenreFilterReducerProps = {
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
};

const reducer = createReducer(defaultGenre, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filmsCount = defaultGenre.filmsCount;
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
    .addCase(statusPromoFilm, (state, action) => {
      state.promoFilm.isFavorite = action.payload;
    })
    .addCase(statusCurrentFilm, (state, action) => {
      state.currentFilm.isFavorite = action.payload;
    });
});

export {reducer};
