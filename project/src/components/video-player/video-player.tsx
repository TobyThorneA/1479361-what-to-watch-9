import {useRef} from 'react';
import { Film } from '../../types';

function VideoPlayer(props: Film) {

  const videoRef = useRef<HTMLVideoElement | null>(null);

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
