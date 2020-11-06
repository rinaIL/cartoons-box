import React from 'react';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import db from '../logic/database';

class VideoApp extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        const videos = db.getCollection('selectedVideo');
        this.setState({videos});
    }

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
     
    render () {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">

                           <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default VideoApp;