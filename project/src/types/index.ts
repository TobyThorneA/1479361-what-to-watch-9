export interface FilmCard {
  id: number;
  name: string;
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
}

export interface Promo {
  name: string;
  genre: string;
  date: number;
  imgSrc: string;
  alt: string;
  backgroundImg: string;
}
