import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute, AppRoute, AuthorizationStatus, DataUser, TIMEOUT_SHOW_ERROR } from '../const';
import { errorHandle } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';
import { AuthData, Comment, FilmStatus
  // UserData
} from '../types';
import {
  loadComments,
  loadCurrentFilm,
  loadFavoriteFilms,
  loadAllFilms,
  loadMoreLikeFilms,
  loadPromoFilm,
  redirectToRoute,
  requireAuthorization,
  setError
} from './action';

export const clearErrorAction = createAsyncThunk(
  'film/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try{
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }catch(error){
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data} = await api.post<DataUser>(APIRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try{
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }catch(error){
      errorHandle(error);
    }
  },
);

export const fetchFilmsAction = createAsyncThunk(
  'films/fetchFilms',
  async () => {
    try{
      const {data} = await api.get(APIRoute.Films);
      store.dispatch(loadAllFilms(data));
    }catch(error){
      errorHandle(error);
    }
  },
);

export const fetchCurrentFilmsAction = createAsyncThunk(
  'film/fetchFilm',
  async (id: number) => {
    try{
      const {data} = await api.get(`${APIRoute.Films}/${id}`);
      store.dispatch(loadCurrentFilm(data));
    }catch(error){
      errorHandle(error);
    }
  },
);

export const fetchShowMoreFilmsAction = createAsyncThunk(
  'films/fetchShowMoreFilms',
  async(id: number) => {
    try{
      const {data} = await api.get(`${APIRoute.Films}/${id}/similar`);
      store.dispatch(loadMoreLikeFilms(data));
    }catch(error){
      errorHandle(error);
    }
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk(
  'films/fetchFavoriteFilms',
  async() => {
    try{
      const {data} = await api.get(APIRoute.Favorite);
      store.dispatch(loadFavoriteFilms(data));
    }catch(error){
      errorHandle(error);
    }
  },
);


export const fetchPromoAction = createAsyncThunk(
  'film/fetchPromo',
  async () => {
    try{
      const {data} = await api.get(APIRoute.Promo);
      store.dispatch(loadPromoFilm(data));
    }catch(error){
      errorHandle(error);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'comments/fetchComments',
  async (id: number) => {
    try{
      const {data} = await api.get(`${APIRoute.Comments}/${id}`);
      store.dispatch(loadComments(data));
    }catch(error){
      errorHandle(error);
    }
  },
);

export const addCommentsAction = createAsyncThunk(
  'comments/addComments',
  async ({id, dataComment}: Comment ) => {
    try{
      await api.post<Comment>(`${APIRoute.Comments}/${id}`, dataComment);

    }catch(error){
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);


export const addFilmStatusAction = createAsyncThunk(
  'film/addFilmStatus',
  async ({id,status}: FilmStatus) => {
    try{
      await api.post<FilmStatus>(`${APIRoute.Favorite}/${id}/${status}`);
    }catch(error){
      errorHandle(error);
    }
  },
);
