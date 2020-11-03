import React from 'react';
import './Content.css';
import {getItems, getVideo} from '../logic/youtube';
import db from '../logic/database';
import moment from 'moment';



//it's going to be in the admin page
////////////////////////////////////////////////////////
//const keywords = ["Blippi", "ComeOutsideTV", "Get Well Soon Dr.Ranj teaches"]
const keywords = ["Blippi", "ComeOutsideTV"]

for (let k of keywords) {
    db.removeData('keywords', key => key === k);
}
for (let k of keywords) {
    db.addValue('keywords', k);
}
//////////////////////////////////////////////////////////////////////


class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = { videos:[],videosWithDuration:[]};
    }

    async componentDidMount() {
        

        const data = []

        for (let k of db.getCollection('keywords')) {
            const items = await getItems(k); 
            const obj = {
                term:k,
                data:items
            }
            data.push(obj)
        }

        const videosWithDuration = []

        await Promise.all(data.map(async (videosPerKeyword)=> {
            Promise.all(videosPerKeyword.data.map(async (video) => {
                if (typeof(video.id.videoId) !=="undefined"){
                    const videoDetails = await getVideo(video.id.videoId);
                    Promise.all(videoDetails.map(async (details) => {                       
                        const duration = parseInt(moment.duration(details.contentDetails.duration).asMinutes(),10);
                        const durationHour = parseInt(moment.duration(details.contentDetails.duration).asHours(),10);                        
                        if (duration !== 0 && durationHour === 0) {
                            const obj = {
                                id:video.id.videoId,
                                duration: duration
                            }
                            videosWithDuration.push(obj);
                        }

                    }))
                }
            }))

        }))

        
        this.setState({videos:data});
        this.setState({videosWithDuration:videosWithDuration});
      
        console.log("videosWithDuration", this.state.videosWithDuration);

    }

    getVideosCart(key) {
        console.log("state videos", this.state.videos);

        const filteredVideo =  this.state.videos.filter((obj) => obj.term === key);
        console.log("DATA", filteredVideo);

            
        const videoCard =  filteredVideo[0].data.map((v) => {
            console.log("VIDEO", v);
            const obj = {
                title:v.snippet.title,
                picture:v.snippet.thumbnails.medium.url
            }
            return <VideoCard key={v.id.videoId} video={obj} />
        })

        return videoCard;
    }
       
 
    render() {
          return (          
              <div>
                {db.getCollection('keywords').map((k) => {
                    return <div key={k}><h3>{k} {this.state.videos.lenght > 0 ? this.getVideosCart(k):''}</h3></div>
                })}
              </div>          
          );
    }

}

class VideoCard extends React.Component {
    render() {
        const video = this.props.video;
        return (
            <article>
                <h4>{video.title}</h4>
                <div><img src={video.picture}/></div>
                <p>Click her for more</p>
            </article>
        )
    }
}

export default Content;