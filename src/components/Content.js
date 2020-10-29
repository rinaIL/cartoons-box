import React from 'react';
import './Content.css';
import {getItems} from '../logic/youtube';


class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = { itemInCardList:null}
    }

    async componentDidMount() {
        const items = await getItems();       
        const itemInCardList = items.map(video => <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/> );     
        this.setState({itemInCardList});

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