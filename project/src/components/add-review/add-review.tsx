const stars = [...Array(10).keys()];

function AddReview() {
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {stars.map((it)=> (
              <div key={it}>
                <input className="rating__input" id={`star-${it}`} type="radio" name="rating" value={it} />
                <label className="rating__label" htmlFor={`star-${it}`}>Rating {it + 1}</label>
              </div>))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default AddReview;
