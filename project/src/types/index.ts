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

export interface Promo {
  name: string;
  genre: string;
  date: number;
  imgSrc: string;
  alt: string;
  backgroundImg: string;
}
