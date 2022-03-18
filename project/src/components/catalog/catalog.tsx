import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/action';


interface CatalogProps {
  it: string;
}

function Catalog({it}: CatalogProps) {
  const {genre} = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  return (
    <li onClick={() => {
      dispatch(changeGenre(it));
    }}
    className={
      `catalog__genres-item ${
        it === genre
          ? 'catalog__genres-item--active'
          : ''}`
    }
    >
      <Link onClick={(evt) => evt.preventDefault()}
        to='/' className="catalog__genres-link"
      >{it}
      </Link>
    </li>
  );
}

export default Catalog;
