import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../store';
import { fetchCommentsAction } from '../../store/api-action';
import { FilmServer } from '../../types';
import Tab from './tab';

interface data {

  title: string,
  key: number,

}

function Tabs(dataFilm: FilmServer) {
  const [activeKey, setActiveKey] = useState(1);

  const func = (it: data, film: FilmServer) => {
    if(it.title === 'Review'){
      const event = (evt: FormEvent) => {
        evt.preventDefault();
        store.dispatch(fetchCommentsAction(film.id));
      };
      return event;
    }
  };

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
              onClick={func(it, dataFilm)}
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
      {Tab(activeKey, dataFilm)}
    </div>
  );
}

export default Tabs;
