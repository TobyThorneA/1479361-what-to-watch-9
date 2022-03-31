import React,{ FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { store } from '../../store';
import { commentsAction, fetchCommentsAction } from '../../store/api-action';
import { FilmServer } from '../../types';

const stars = [...Array(10).keys()];

interface CommentSubmisionFormProps {
  comment: string;
  rating: number;
}

function CommentSubmissionForm(props: FilmServer) {
  const dispatch = useAppDispatch();
  const [statePost, setStatePost] = useState<CommentSubmisionFormProps>({
    comment: '',
    rating: 0,
  });
  const fieldChangeHandler = (evt: FormEvent<HTMLFormElement> ) => {
    evt.preventDefault();

    const dataCommentFilm = {
      id: props.id,
      dataComment: {
        comment: statePost.comment,
        rating: statePost.rating,
      },
    };

    dispatch(commentsAction(dataCommentFilm));
    store.dispatch(fetchCommentsAction(props.id));
  };

  return (
    <div className="add-review">
      <form  onSubmit={ fieldChangeHandler} action="" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {stars.map((it)=> (
              <div key={it} onClick={() => setStatePost({rating: it+1, comment: statePost.comment})}>
                <input className="rating__input" id={`star-${it}`} type="radio" name="rating" value={it} />
                <label className="rating__label" htmlFor={`star-${it}`}>Rating {it + 1}</label>
              </div>))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            onChange={(evt) => setStatePost({comment: evt.target.value, rating: statePost.rating})}
            className="add-review__textarea"
            name="review-text" id="review-text"
            placeholder="Review text"
          >
          </textarea>
          <div className="add-review__submit">
            <button  className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default CommentSubmissionForm;
