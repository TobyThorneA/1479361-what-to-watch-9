// import { current } from '@reduxjs/toolkit';
import {useRef} from 'react';
import { Film } from '../../types';

function VideoPlayer(props: Film) {
  // const [stateId, setStateId] = useState(-1);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  // eslint-disable-next-line no-console
  // console.log('curFilm', videoRef);


  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     if(videoRef.current !== null){
  //       videoRef.current.pause();
  //       if(stateId >= 0){
  //         videoRef.current.src = props.videoLink;
  //         videoRef.current.play();
  //       }
  //     }
  //   }, 1000);
  //   if(stateId < 0 && videoRef.current !== null){
  //     videoRef.current.pause();
  //     videoRef.current.currentTime = 0;
  //     videoRef.current.src = '';
  //   }
  //   return () => {
  //     clearTimeout(timeOut);
  //   };
  // }, [stateId, props.videoLink]);

  return (
    <div
      className="small-film-card__image"
      onMouseEnter={() => {
        if(videoRef.current){
          videoRef.current.src = props.videoLink;
        }
        setTimeout(() => {
          if(videoRef.current){
            videoRef.current.play();
          }
        }, 1000);
      } }
      onMouseLeave={() => {
        if(videoRef.current){
          setTimeout(() => {
            if(videoRef.current){
              videoRef.current.pause();
              videoRef.current.src='';
            }
          }, 1000);
        }
      }}
    >

      <video
        muted
        ref={videoRef}
        poster={props.previewImage}
        width='280'
        height='175'
      />

    </div>
  );
}

export default VideoPlayer;
