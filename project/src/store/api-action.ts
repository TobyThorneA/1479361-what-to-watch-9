import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { errorHandle } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';
import { AuthData, UserData } from '../types';
import { loadCommentsServer, loadFilmsServer, loadPromoServer, requireAuthorization, setError } from './action';

export const clearErrorAction = createAsyncThunk(
  'film/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try{
      const {data} = await api.get(APIRoute.Films);
      store.dispatch(loadFilmsServer(data));
    }catch(error){
      errorHandle(error);
    }
  },
);

export const fetchPromoAction = createAsyncThunk(
  'data/fetchPromo',
  async () => {
    try{
      const {data} = await api.get(APIRoute.Promo);
      store.dispatch(loadPromoServer(data));
    }catch(error){
      errorHandle(error);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/fetchComments',
  async (id: number) => {
    try{
      const {data} = await api.get(`comments/${id}`);
      store.dispatch(loadCommentsServer(data));
    }catch(error){
      errorHandle(error);
    }
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
    try{
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }catch(error){
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
