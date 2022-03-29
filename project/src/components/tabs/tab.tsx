import { FilmServer } from '../../types';
import Details from './details';
import Overview from './overview';
import ReviewCard from './review-card';

function Tab(state:number,props: FilmServer) {

  switch (state) {
    case 1:
      return  <Overview {...props}/>;
    case 2:
      return <Details {...props}/>;
    case 3:
      return <ReviewCard />;
  }

}

export default Tab;
