import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FilmServer } from '../../types';
import Tab from './tab';


function Tabs(dataFilm: FilmServer) {
  const [activeKey, setActiveKey] = useState(1);
  const tabs = [
    {
      title: 'Overview',
      key: 1,
    },
    {
      title: 'Details',
      key: 2,
    },
    {
      title: 'Review',
      key: 3,
    },
  ];

  return (
    <div  className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs.map((it) => (
            <li key={it.key}
              className={`film-nav__item
              ${activeKey === it.key
              ? 'film-nav__item--active'
              : ''}
              `}
            >
              <Link
                onClick={() => {setActiveKey(it.key);}}
                to={`/films/${dataFilm.id}`}
                className="film-nav__link"
              >{it.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {Tab(activeKey)}
    </div>
  );
}

export default Tabs;
