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
        this.state = { videos:[]};
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

        this.setState({videos:data});
        console.log("before takes duration", this.state.videos);


        await Promise.all(data.map(async (videosPerKeyword)=> {
            Promise.all(videosPerKeyword.data.map(async (video) => {
                if (typeof(video.id.videoId) !=="undefined"){
                    const videoDetails = await getVideo(video.id.videoId);
                    Promise.all(videoDetails.map(async (details) => {  
                        console.log("Details ***************",moment.duration(details.contentDetails.duration).asMinutes());                     
                        const duration = parseInt(moment.duration(details.contentDetails.duration).asMinutes(),10);
                        const durationHour = parseInt(moment.duration(details.contentDetails.duration).asHours(),10);                        
                        if (duration !== 0 && durationHour === 0 && duration < 16) {
                            video.duration = duration;                           
                        }else {
                            video.duration = null;
                        }

                    }))
                }
            }))

        }))

        console.log("videos with duration", this.state.videos);

    }

    getVideosCart(key) {
        console.log("state videos", this.state.videos);

        const filteredVideo =  this.state.videos.filter((obj) => obj.term === key ) ;
        console.log("DATA", filteredVideo);
           
        const videoCard =  filteredVideo[0].data.map((v) => {
            console.log("VIDEO", v);
            if(v.duration !== null && v.id.kind !== "youtube#channel"){
                const obj = {
                    title:v.snippet.title,
                    picture:v.snippet.thumbnails.medium.url,
                    id:v.id.videoId,
                    duration:v.duration
                }
                return <VideoCard key={v.id.videoId} video={obj} />
            }

        })

        return videoCard;
    }
       
 
    render() {
          return (          
              <div>
                {db.getCollection('keywords').map((k) => {
                    {console.log("Keyword", k)}
                    return <div key={k} className="content"><h3>{k} {this.state.videos.length > 0 ? this.getVideosCart(k):''}</h3></div>
                })}
              </div>          
          );
    }

}

class VideoCard extends React.Component {

    saveSelectedVideo() {
        db.addValue('selectedVideo', this.props.video);
    }
    
    render() {       
        const video = this.props.video;              
        return (
            <div className="video">
                <div><img src={video.picture}/></div>
                <h5>{video.title}</h5>
                <p><input type="checkbox" onChange={()=>this.saveSelectedVideo()} ></input></p>
            </div>
        )
    }
}

export default Content;