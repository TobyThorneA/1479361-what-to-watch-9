import {useState, useEffect, useRef} from 'react';
import { FilmCard } from '../../types';

function VideoPlayer(props: FilmCard) {
  const [stateId, setStateId] = useState(-1);

  const videoRef = useRef<HTMLVideoElement | null>(null);


  useEffect(() => {
    setTimeout(() => {
      if(videoRef.current !== null){
        videoRef.current.pause();
        if(stateId >= 0){
          videoRef.current.src = props.video;
          videoRef.current.play();
        }
      }
    }, 1000);
    if(stateId < 0 && videoRef.current !== null){
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.src = '';
    }
  }, [stateId, props]);

  return (
    <div
      className="small-film-card__image"
      onMouseEnter={() => setStateId(props.id)}
      onMouseLeave={() => setStateId(-1)}
    >

      <video
        muted
        ref={videoRef}
        poster={props.img}
        width='280'
        height='175'
      />

    </div>
  );
}

export default VideoPlayer;
