import { useContext, useDebugValue } from "react";
import VideoContext from "../context/VideoContext";

function useVideos(){
    useDebugValue(useContext(VideoContext).length)
    return useContext(VideoContext)
}

export default useVideos