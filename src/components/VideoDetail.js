import { render } from '@testing-library/react';
import React from 'react';
import { useHistory } from "react-router-dom";

const VideoDetail = ({video}) => {
    const history = useHistory();

    if (!video) {
        return (
                <div className="ui orange placeholder segment" id="selectVideo">
                        <div className="ui icon header">
                            <i className="caret square right icon"></i>
                            Please select your video.
                        </div>
                </div>
      );
    }

    const setVideoTimeOut = ({video}) => {
        setTimeout(() =>{                        
              history.go(0);         
        },7000);
    }
    
    const videoSrc = `https://www.youtube.com/embed/${video.id}`
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player' onLoad={()=>setVideoTimeOut(video)}/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.title}</h4>
            </div>
        </div>

    )


}



export default VideoDetail;