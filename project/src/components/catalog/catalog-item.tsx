import { Link } from 'react-router-dom';

interface CatalogProps {
  isActive: boolean;
  title: string;
  onClick: (action: React.MouseEvent<HTMLLIElement>) => void;
}

function CatalogItem({isActive, title, onClick }: CatalogProps) {

  return (
    <li onClick={onClick}
      data-value={title}
      className={
        `catalog__genres-item ${
          isActive
            ? 'catalog__genres-item--active'
            : ''}`
      }
    >
      <Link onClick={(evt) => evt.preventDefault()}
        to='/' className="catalog__genres-link"
      >{title}
      </Link>
    </li>
  );
}

export default CatalogItem;
