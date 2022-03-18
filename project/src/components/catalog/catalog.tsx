import { useAppDispatch } from '../../hooks';
import { changeGenre } from '../../store/action';


interface CatalogProps {
  it: string;
}

function Catalog({it}: CatalogProps) {

  const dispatch = useAppDispatch();

  return (
    <li onClick={() => dispatch(changeGenre(it))} className="catalog__genres-item">
      <a href='/' className="catalog__genres-link">{it}</a>
    </li>
  );
}

export default Catalog;

//  <li onClick={dispatch(chanchingTheGenreComedies())} className="catalog__genres-item catalog__genres-item--active">
//               <a href="/" className="catalog__genres-link">All genres</a>
//             </li>

