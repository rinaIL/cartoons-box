import React from 'react';
import './Video.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={video.picture} />
            <div className='content'>
                <div className='header '>{video.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;