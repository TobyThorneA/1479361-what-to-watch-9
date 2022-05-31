import Details from './details';
import Overview from './overview';
import ReviewCard from './review-card';

const tabsFilm = {
  OVERVIEW: 1,
  DETAILS: 2,
  REVIEW: 3,
};

function Tab(state:number) {

  switch (state) {
    case tabsFilm.OVERVIEW:
      return  <Overview />;
    case tabsFilm.DETAILS:
      return <Details />;
    case tabsFilm.REVIEW:
      return <ReviewCard />;
  }

}

export default Tab;
