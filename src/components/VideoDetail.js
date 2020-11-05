import React from 'react';

const VideoDetail = ({video}) => {
    // if (!video) {
    //     return <div>Loading ...</div>;
    // }
    const videoId = "BGb8ZFgNDhc";
    const videoSrc = `https://www.youtube.com/embed/${videoId}`
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>Video Title</h4>
                <p>Video description</p>
            </div>
        </div>

    )
}

export default VideoDetail;