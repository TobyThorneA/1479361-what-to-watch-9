import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import NotFoundPage from '../not-found-page/not-found-page';


function PlayerPage() {
  const {allFilms} = useAppSelector((state) => state);
  const {id} = useParams();
  const dataFilm = allFilms.find((it) => it.id === Number(id));

  const currentFilm = useAppSelector((state) => state.currentFilm);
  // eslint-disable-next-line no-console
  console.log('curFilm', currentFilm);

  //   Сторонняя функция с сайта : https://ru.stackoverflow.com
  //   /questions/646511/Сконвертировать-минуты-в-часыминуты-при-помощи-momentjs
  function getTimeFromMins(mins: number) {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return (`${hours} : ${minutes}`);
  }

  const time = getTimeFromMins(currentFilm.runTime);

  if(!dataFilm){
    return <NotFoundPage/>;
  }
  return (
    <div className="player">

      <video  autoPlay src={dataFilm.videoLink} className="player__video" poster={dataFilm.posterImage}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            {/* setInterval(() => (new Date().toLocaleString()), 1000) */}
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '50%' }}>Toggler</div>
          </div>
          <div className="player__time-value">{time}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
