import { useAppSelector } from '../../hooks';
import { CommentsServer } from '../../types';
import Review from './review';

function ReviewCard() {
  const selector = useAppSelector((state) => state.comments);
  const evenReviews: Array<CommentsServer> = [];
  const oddReviews: Array<CommentsServer>= [];
  selector.forEach((it, i) => {
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
        { evenReviews.map((it) =>  <Review key={it.id} {...it}/>)}
      </div>
      <div className="film-card__reviews-col">
        {oddReviews.map((it) =>  <Review key={it.id} {...it}/>)}
      </div>
    </div>
  );
}

export default ReviewCard;
