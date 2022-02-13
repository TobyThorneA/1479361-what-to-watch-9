function MyList() {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__films-list">

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/johnny-english.jpg" alt="Johnny English" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">Johnny English</a>
          </h3>
        </article>


        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/shutter-island.jpg" alt="Shutter Island" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">Shutter Island</a>
          </h3>
        </article>
      </div>
    </section>
  );
}

export default MyList;
