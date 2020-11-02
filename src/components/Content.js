import React from 'react';
import './Content.css';
import {getItems, getVideo} from '../logic/youtube';
import db from '../logic/database';


class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = { itemInCardList:null}
    }

    async componentDidMount() {
        const items = await getItems();   
        const videosDuration = await getVideo();
        const itemInCardList = items.map(video => <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/> );     
        this.setState({itemInCardList});

        /// for test only 
        for (let video of items) {
            db.addValue('videos', video);
        }
        for (let video of videosDuration) {
            db.addValue('videoWithDuration', video.contentDetails.duration);
        }    

    }
 
    render() {
          return (          
              <div>
                <div className="videos">{this.state.itemInCardList}</div>
              </div>          
          );
    }

}

export default Content;