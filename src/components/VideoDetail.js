import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }else {
        
    }
    
    const videoSrc = `https://www.youtube.com/embed/${video.id}`
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.title}</h4>
            </div>
        </div>

    )
}

export default VideoDetail;