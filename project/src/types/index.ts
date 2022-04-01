import { AuthorizationStatus } from '../const';

export interface ReviewProps {
  id?: number;
  reviewText: string;
  reviewAuthor: string;
  reviewDate: string;
  reviewRating: string;
}
export interface FilmCard {
  id: number;
  name: string;
  dat?: number;
  genre: string;
  date: number;
  img: string;
  video: string;
  rating: number;
  assessmentRating: string;
  numberOfRatings: number;
  description: string;
  director: string;
  starring: string;
  starringDetails: Array<string>;
  runTime: string;
  reviews: Array<ReviewProps>;
}

export interface Film {
  id: number
  name: string
  posterImage: string
  previewImage: string
  backgroundImage: string
  backgroundColor: string
  videoLink: string
  previewVideoLink: string
  description: string
  rating: number
  scoresCount: number
  director: string
  starring: Array<string>
  runTime: number
  genre: string
  released: number
  isFavorite: boolean
}
export interface CommentsServer {
  comment: string
  date: string
  id: number
  rating: number
  user: {
  id: number
  name: string
  }
}
export interface PromoServer {
  id: number
  name: string
  posterImage: string
  previewImage: string
  backgroundImage: string
  backgroundColor: string
  videoLink: string
  previewVideoLink: string
  description: string
  rating: number
  scoresCount: number
  director: string
  starring: Array<string>
  runTime: number
  genre: string
  released: number
  isFavorite: boolean
}

export interface UserComment {
  comment: string
  date: string
  id: number
  rating: number
  user: {
  id: number
  name: string
  }
}
export interface Promo {
  name: string;
  genre: string;
  released: number;
  posterImage: string;
  backgroundImage: string;
}

export interface GenreFilterReducerProps {
  genre: string;
  filmsCount: number;
  allFilms: Array<Film>;
  favoriteFilms: Array<Film>;
  moreLikeFilms: Array<Film>;
  currentFilm: Film;
  promoFilm: PromoServer ;
  comments: Array<CommentsServer>;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  error: string;
}

export interface Comment {
  id: number;
  dataComment :{
    comment: string;
    rating: number | null;
  };
}

export interface PostComment {
  id: number;
  dataComment :{
    comment: string;
    rating: number;
  };
  token: string;
}

export interface FilmStatus {
  id:number;
  status: number;
}

export interface PostFilmStatus {
  id:number;
  status: number;
  token: string;
}

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type ErrorType = unknown;
