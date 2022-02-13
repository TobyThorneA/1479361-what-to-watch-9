import HomePage from '../home-page/home-page';
import {Movie, Promo} from '../../types';
interface AppProps {
  movies: Array<Movie>,
  promo: Promo,
}

function App(props: AppProps) {

  return (<HomePage {...props}/>);

}

export default App;
