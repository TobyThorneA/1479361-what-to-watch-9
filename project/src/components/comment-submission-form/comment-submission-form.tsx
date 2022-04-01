import React,{ FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { store } from '../../store';
import { addCommentsAction, fetchCommentsAction } from '../../store/api-action';
import { Film } from '../../types';

// const starss = [...Array(10).keys()];
const stars = [10,9,8,7,6,5,4,3,2,1];

interface CommentSubmisionFormProps {
  comment: string;
  rating: number | null;
}

function CommentSubmissionForm(props: Film) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const disabledPostButton = (post: CommentSubmisionFormProps): boolean => {
    if(post.comment.length < 50 || post.comment.length > 400 || post.rating === null){
      return true;
    }
    return false;
  };

  const [statePost, setStatePost] = useState<CommentSubmisionFormProps>({
    comment: '',
    rating: null,
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

    dispatch(addCommentsAction(dataCommentFilm));
    store.dispatch(fetchCommentsAction(props.id));
    navigate(`${APIRoute.Films}/${props.id}`);
  };

  return (
    <div className="add-review">
      <form  onSubmit={ fieldChangeHandler} action="" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {stars.map((it)=> (
              <div key={it} onClick={() => setStatePost({rating: it , comment: statePost.comment})}>
                <input className="rating__input" id={`star-${it}`} type="radio" name="rating" value={it} />
                <label className="rating__label" htmlFor={`star-${it}`}>Rating {it + 1}</label>
              </div>))}
          </div>
        </div>

        <div  className="add-review__text">
          <textarea
            disabled
            onChange={(evt) => setStatePost({comment: evt.target.value, rating: statePost.rating})}
            className="add-review__textarea"
            name="review-text" id="review-text"
            placeholder="Review text"
            minLength={50}
            maxLength={400}
          >
          </textarea>
          <div className="add-review__submit">
            <button disabled={disabledPostButton(statePost)} className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default CommentSubmissionForm;
