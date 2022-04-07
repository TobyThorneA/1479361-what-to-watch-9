import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { APIRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { playOrPause } from '../../store/action';
import NotFoundPage from '../not-found-page/not-found-page';

// Сторонняя функция для преобразования секунд в : чч.мм.сек
// https://question-it.com/questions/386544/kak-konvertirovat-sekundy-v-minuty-i-chasy-v-javascript
const secondsToHms = (d: number) => {
  d = Number(d);
  const h = Math.floor(d / 3600);
  const m = Math.floor(d % 3600 / 60);
  const s = Math.floor(d % 3600 % 60);

  const hDisplay = h > 0 ? `${h}:` : '';
  const mDisplay = m > 0 ? `${m}:` : '';
  const sDisplay = s > 0 ? s : '';
  return `${hDisplay} ${mDisplay} ${sDisplay}`;
};

const fullScreenHandle = () => {
  const element = document.querySelector('.player__video');
  if(element?.requestFullscreen){
    return element?.requestFullscreen();
  }
};

function PlayerPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const allFilms = useAppSelector((state) => state.allFilms);
  const playPause = useAppSelector((state) => state.playOrPause);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {id} = useParams();
  const dataFilm = allFilms.find((it) => it.id === Number(id));

  const [time, setTime] = useState((0));
  const [duration, setDuration] = useState(0);
  const [timeToogler, setTimeToogler] = useState(0);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if(videoRef.current){
        setTime(videoRef.current.currentTime);
        setDuration(videoRef.current.duration - time);
        setTimeToogler(time * 100 / videoRef.current.duration);
      }
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [time, duration, playPause]);

  if(!dataFilm){
    return <NotFoundPage/>;
  }
  return (
    <div className="player">

      <video ref={videoRef} autoPlay src={dataFilm.videoLink} className="player__video" poster={dataFilm.posterImage}></video>
      <button onClick={() => navigate(`${APIRoute.Films}/${dataFilm.id}`)} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={timeToogler} max='100'></progress>
            <div className="player__toggler" style={{left: `${timeToogler}%` }}>Toggler</div>
          </div>
          <div className="player__time-value">{secondsToHms(duration)}</div>
        </div>
        <div className="player__controls-row">
          <button onClick={ () => {
            if(playPause){
              dispatch(playOrPause(!playPause));
              return videoRef.current?.pause();
            }
            dispatch(playOrPause(!playPause));
            return videoRef.current?.play();
          } }
          type="button" className="player__play"
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={`${!playPause? '#play-s': '#pause'}`}></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button onClick={() => fullScreenHandle()} type="button" className="player__full-screen">
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
