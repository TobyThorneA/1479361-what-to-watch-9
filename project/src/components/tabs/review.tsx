import { ReviewProps } from '../../types';

function Review(props: ReviewProps) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{props.reviewText}</p>

        <footer className="review__details">
          <cite className="review__author">{props.reviewAuthor}</cite>
          <time className="review__date" dateTime="2016-12-24">{props.reviewDate}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{props.reviewRating}</div>
    </div>
  );
}

export default Review;
