import { CommentsServer } from '../../types';

function Review(props: CommentsServer) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p key={props.user.id} className="review__text">{props.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{props.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{props.date}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{props.rating}</div>
    </div>
  );
}

export default Review;
