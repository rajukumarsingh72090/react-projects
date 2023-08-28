import './App.css'
import VidoesDb from './Data/Data'
import { Suspense, lazy, useCallback, useReducer, useRef, useState } from "react"
import AddVideo from "./components/AddVideo"
import VideoList from "./components/VideoList"
import ThemeContext from './context/ThemeContext'
import VideoContext from './context/VideoContext'
import VideoDispatchContext from './context/VideoDispatchContext'
import Counter from './components/Counter'


const Dummy = lazy(()=> import('./components/Dummy'))
function App(){
    console.log('render app')
    const [editableVideos, setEditVidoes] = useState(null)
    const [mode, setMode] = useState('darkMode')
    const [show, setShow] = useState(false)
    const inputRef = useRef(null)


    function videoReducer(videos, action){
        switch(action.type){
            case 'LOAD': return action.payload
            case 'ADD': return [...videos, {...action.payload, id: videos.length+200}]
            case 'DELETE': return videos.filter(video => video.id !== action.payload)
            case 'UPDATE':
                const index = videos.findIndex(myVideo => myVideo.id === action.payload.id)
                const newVideos = [...videos]
                newVideos.splice(index,1,action.payload)
                setEditVidoes(null)
                return newVideos    
            default: return videos 
        }
    }
    const [videos, dispatch] = useReducer(videoReducer,VidoesDb)


    const editVideo = useCallback(function editVideo(id){
        setEditVidoes(videos.find(video => video.id === id))
     },[videos])
    

    return (
        <ThemeContext.Provider value={mode}>
            <VideoContext.Provider value={videos}>
                <VideoDispatchContext.Provider value={dispatch}>
                   <div className={`App ${mode}`}>
                    <Counter></Counter>
                    <button onClick={()=>{inputRef.current.jumpTo()}}>focus</button>
                       <button onClick={()=> setMode(mode === 'darkMode'? 'lightMode': 'darkMode')}>mode</button>
                       <AddVideo ref={inputRef} editableVideos={editableVideos}></AddVideo>
                       <VideoList editVideo={editVideo}></VideoList>
                       <button onClick={()=> setShow(true)}>show</button>
                       {show ? <Suspense fallback={<>loading....</>}> <Dummy></Dummy> </Suspense>: null}
                   </div>
                </VideoDispatchContext.Provider>
            </VideoContext.Provider>
        </ThemeContext.Provider>
    )

}

export default App