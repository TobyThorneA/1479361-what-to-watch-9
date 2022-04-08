import React,{ FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { store } from '../../store';
import { addCommentsAction, fetchCommentsAction } from '../../store/api-action';
import { Film } from '../../types';

const stars = [...Array(10).keys()];
interface PostFormValues {
  comment: string;
  rating: number;
}

const disabledPostButton = (postFormValues: PostFormValues): boolean => {
  if(postFormValues.comment.length > 50
    && postFormValues.comment.length < 400
  ){
    return false;
  }
  return true;
};

function CommentSubmissionForm(props: Film) {
  const dispatch = useAppDispatch();
  const loadingComment = useAppSelector((state) => state.loadingComment);

  const [postFormValues, setPostFormValues] = useState<PostFormValues>({
    comment: '',
    rating: 0,
  });

  const fieldChangeHandler = (evt: FormEvent<HTMLFormElement> ) => {
    evt.preventDefault();

    const dataCommentFilm = {
      id: props.id,
      dataComment: {
        comment: postFormValues.comment,
        rating: postFormValues.rating,
      },
    };


    dispatch(addCommentsAction(dataCommentFilm));
    store.dispatch(fetchCommentsAction(props.id));
  };

  return (
    <div  className="add-review">
      <form onSubmit={ fieldChangeHandler} action="" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {stars.map((it)=> (
              <div key={it} onClick={() => setPostFormValues({rating: it + 1 , comment: postFormValues.comment})}>
                <input
                  className="rating__input" id={`star-${it}`}
                  type="radio" name="rating"
                  value={it}
                />
                <label className="rating__label" htmlFor={`star-${it}`}>Rating {it + 1}</label>
              </div>)).reverse()}
          </div>
        </div>

        <div className="add-review__text" >
          <textarea
            onChange={(evt) => setPostFormValues({comment: evt.target.value, rating: postFormValues.rating})}
            className="add-review__textarea"
            name="review-text" id="review-text"
            placeholder="Review text"
            minLength={50}
            maxLength={400}
          >
          </textarea>
          <div className="add-review__submit">
            <button disabled={
              disabledPostButton(postFormValues) || loadingComment
            }
            className="add-review__btn" type="submit"
            >Post
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default CommentSubmissionForm;
