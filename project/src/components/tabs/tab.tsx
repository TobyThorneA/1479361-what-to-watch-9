import Details from './details';
import Overview from './overview';
import ReviewCard from './review-card';

function Tab(state:number) {

  switch (state) {
    case 1:
      return  <Overview />;
    case 2:
      return <Details />;
    case 3:
      return <ReviewCard />;
  }

}

export default Tab;
