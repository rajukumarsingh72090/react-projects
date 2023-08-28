import React, { useContext, memo, useRef, useLayoutEffect} from 'react'
import './CSS/Video.css'
import ThemeContext from '../context/ThemeContext'
import useVideoDispatch from '../hooks/VideoDispatchHook'
import { useId } from 'react'


 const Video = memo(function Video({title, channel, views, id, time, verified, children, editVideo}) {
  const theme = useContext(ThemeContext)
  const dispatch = useVideoDispatch()
  const ref = useRef(null)
  const Uid = useId()
  // useLayoutEffect(()=> {
  //   const {height} = ref.current.getBoundingClientRect()
  //   console.log(height)
  // },[])

  return (
    <>
    <div id={Uid} ref={ref} className={`container ${theme}`}>
      <button className='close' onClick={() => dispatch({type: 'DELETE', payload:id})}>X</button>
      <button className='edit' onClick={() => editVideo(id)}>edit</button>
      <div className='pic'><img src= {`https://picsum.photos/300/${id}`} alt="dummy" /></div>
      <div className='title'>{title}</div>
      <div className='channel'>{channel}{verified && '✅'}</div>
      <div className='view'>{views} views <span>.</span>{time}</div>
      <div>{children}</div>
    </div>
    </>
  )
})

export default Video