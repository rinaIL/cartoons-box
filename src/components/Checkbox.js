import React from 'react';
import db from '../logic/database';

class Checkbox extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        checked: false
      }
      this.handleCheck = this.handleCheck.bind(this)
    }
  
    handleCheck() {
      this.setState({
        checked: !this.state.checked
      })

       this.state.checked ?   this.removeSelectedVideo(): this.saveSelectedVideo(); 
    }

    saveSelectedVideo() {      
        const selectedVideos = db.getCollection('selectedVideo');
        if(selectedVideos == undefined){
            db.addValue('selectedVideo', this.props.video);
        }else{
                const selectedVideosIds = selectedVideos.map((video) => video.id);       
                if(!selectedVideosIds.includes(this.props.video.id)){
                    db.addValue('selectedVideo', this.props.video);
                }
            }   
    }


    removeSelectedVideo() {
        db.removeValue('selectedVideo','id', this.props.video.id);
    }
  
  
    render() {
      console.log("Checkbox is",this.state.checked);
      return (
        <div>
          <input 
            type="checkbox" 
            checked={this.state.checked}
            onChange={this.handleCheck}
            />
        </div>
      )
    }
}

export default Checkbox;