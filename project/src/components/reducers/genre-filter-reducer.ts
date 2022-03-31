import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { changeGenre,
  loadCommentsServer,
  loadCurrentFilmServer,
  loadFavoriteFilmsServer,
  loadFilmsServer,
  loadMoreLikeFilmsServer,
  loadPromoServer,
  requireAuthorization,
  setError,
  showMore, trueFalse, trueFalseFilm } from '../../store/action';
import { GenreFilterReducerProps } from '../../types';

const promoServ = {
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
  filmsServer: [],
  favoriteFilmsServer: [],
  moreLikeFilmsServer: [],
  currentFilmServer: promoServ,
  promoServer: promoServ,
  commentsServer: [],
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
    .addCase(loadFilmsServer, (state, action) => {
      state.filmsServer = action.payload;
    })
    .addCase(loadCurrentFilmServer, (state, action) => {
      state.currentFilmServer = action.payload;
    })
    .addCase(loadFavoriteFilmsServer, (state, action) => {
      state.favoriteFilmsServer = action.payload;
    })
    .addCase(loadMoreLikeFilmsServer, (state, action) => {
      state.moreLikeFilmsServer = action.payload;
    })
    .addCase(loadPromoServer, (state, action) => {
      state.promoServer = action.payload;
    })
    .addCase(loadCommentsServer, (state, action) => {
      state.commentsServer = action.payload;
    })
    .addCase(requireAuthorization, (state,action) => {
      state.authorizationStatus = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setError, (state,action) => {
      state.error = action.payload;
    })
    .addCase(trueFalse, (state, action) => {
      state.promoServer.isFavorite = action.payload;
    })
    .addCase(trueFalseFilm, (state, action) => {
      state.currentFilmServer.isFavorite = action.payload;
    });
});

export {reducer};
