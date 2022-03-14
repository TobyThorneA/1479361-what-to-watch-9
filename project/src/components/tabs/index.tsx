import { FilmCard } from '../../types/index';
import Tabs from './tabs';

function Index(props: FilmCard) {

  return (

    <Tabs {...props}/>

  );
}

export default Index;


