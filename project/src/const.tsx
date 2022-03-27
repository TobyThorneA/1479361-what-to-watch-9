export const TIMEOUT_SHOW_ERROR = 2000;
export const NUMBER_OF_MOVIES_DISPLAYED = 8;

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum FILM_SCORE {
  BAD = 'Bad',
  NORMAL = 'Normal',
  GOOD = 'Good',
  VERY_GOOD = 'Very Good',
  AWESOME = 'Awesome',
}
