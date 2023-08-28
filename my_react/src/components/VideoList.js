import Video from './Video'
import PlayButton from './PlayButton'
import useVideos from '../hooks/VideoHook'
import useVideoDispatch from '../hooks/VideoDispatchHook'
import { useCallback, useEffect, useMemo } from 'react'
import moreVideos from '../Data/moreVideos'

function VideoList ({editVideo}) {

    const videos = useVideos()
    const dispatch = useVideoDispatch()


function getVideos(){
  dispatch({type: 'LOAD', payload: moreVideos})

}

useEffect(() => {

}, [dispatch])
const play = useCallback(()=> console.log('play'),[])
const pause = useCallback(()=> console.log('pause'),[])
const memoButton = useMemo(()=>{
      <PlayButton onPlay={play} onPause={pause}>
                play
      </PlayButton>
},[pause, play])
  return (
    <>
    {
        videos.map(video => <Video 
        key={video.id}
        title={video.title} 
        views={video.views} 
        time={video.time} 
        channel={video.channel} 
        verified={video.verified}
        id= {video.id}
        editVideo={editVideo}>
            {memoButton}
        
        </Video>)
    }
    <button onClick={getVideos}>get video</button>
    </>
  )
}

export default VideoList