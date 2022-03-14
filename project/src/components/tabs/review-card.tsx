import { FilmCard, ReviewProps } from '../../types';
import Review from './review';

// interface ReviewCardProps {
//   id: number;
//   reviewText: string;
//   reviewAuthor: string;
//   reviewDate?: string;
//   reviewRating: string;
// }

function ReviewCard(props: FilmCard) {
  const evenReviews: Array<ReviewProps> = [];
  const oddReviews: Array<ReviewProps>= [];
  props.reviews.forEach((it, i) => {
    if(i % 2 === 0){
      evenReviews.push(it);
    }
    if(i % 2 !== 0){
      oddReviews.push(it);
    }
  });

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {evenReviews.map((it) =>  <Review key={it.id} {...it}/>)}
      </div>
      <div className="film-card__reviews-col">
        {oddReviews.map((it) =>  <Review key={it.id} {...it}/>)}
      </div>
    </div>
  );
}

export default ReviewCard;
