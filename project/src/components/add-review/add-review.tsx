function AddReview() {
  const NUMBEROFSTARSDRAWN = 10;
  const rateTheMovie = (num: number) => {
    const arr =[];
    for(let i = 0; i < num; i++){
      let j = 0;
      j++;
      arr.push(
        <div>
          <input className="rating__input" id="star-10" type="radio" name="rating" value="10" />
          <label className="rating__label" htmlFor="star-10">Rating {j}</label>
        </div>);
    }
    return arr;
  };
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">

            {rateTheMovie(NUMBEROFSTARSDRAWN)}

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
