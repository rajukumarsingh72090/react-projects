import React, {useImperativeHandle, useRef, useState } from 'react'
import './CSS/AddVideo.css'
import { useEffect, forwardRef } from 'react'
import useVideoDispatch from '../hooks/VideoDispatchHook'
import { createPortal } from 'react-dom'



const initialState = {
           time: '2 year ago',
           channel: 'raju',
           verified : true,
           title: '',
           views: ''
  }
const AddVideo = forwardRef(function AddVideo  ({editableVideos}, ref)  {
  const [video, setVideo] = useState(initialState)
  const dispatch = useVideoDispatch()
  // const inputRef = useRef(null) 
  const iRef = useRef(null)
   
  useImperativeHandle(ref,()=>{
    return{
      jumpTo(){
        iRef.current.focus()
      }
    }
  },[])

  function handleSubmit(e){
      e.preventDefault()
      if(editableVideos){
        dispatch({type: 'UPDATE', payload:video})
      }else{
        dispatch({type: 'ADD', payload:video})
      }
      
      setVideo(initialState)
    }
    function handleChange(e){
       setVideo({...video, [e.target.name] : e.target.value }) 
    }


    useEffect(()=>{
      if(editableVideos){
        setVideo(editableVideos)
      }

  },[editableVideos])
  return (
    <form>
        <input ref={iRef} type="text" name='title' onChange={handleChange} placeholder='title' value={video.title}/>
        <input type="text" name='views' onChange={handleChange} placeholder='views' value={video.views}/>
        <button onClick={handleSubmit}>{editableVideos? 'edit': 'add'} button</button>
        {createPortal(
          <p>This Child is placed in the document body.</p>,
          document.getElementById('root1')
        )}
    </form>
  )
})

export default AddVideo