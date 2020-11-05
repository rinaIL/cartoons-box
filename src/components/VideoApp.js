import React from 'react';
import VideoDetail from './VideoDetail';

class VideoApp extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
     
    render () {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                           <VideoDetail/>
                        </div>
                        <div className="five wide column">
                           <List/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class List extends React.Component {
   
    render() {
        const items = [1,2,3,4,5];
        const renderItems = items.map ((item) => {
            return <div className=' video-item item'>{item}</div>
        }
                
        )
        return <div className='ui relaxed divided list'>{renderItems}</div>;
    }
}

export default VideoApp;