import React from 'react';
import TosetList from './TosetList';
import AddTosetItem from './AddTosetItem';
import db from '../logic/database';


class ToSetKeywords extends React.Component {
    constructor(props) {
        super(props);
        const list = db.getCollection('keywords')
        this.state = {
            inputValue: '',
            list:list
          }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {      
        this.setState({
          inputValue: event.target.value
        });
      }

     handleAddItem = (value) => {
        db.addValue('keywords', value);
        const list = this.state.list;
        list.push(value);
        this.setState(list);
        this.setState({ inputValue: ''});
      };
       

    render() {
        console.log("reder state list", this.state.list);
        return (
                <div className='main ui container' >
                <div className='html ui top attached segment'> 
                    <div className='ui orange placeholder segment'>                    
                        <div className="ui two column stackable center aligned grid">
                            <div className="ui vertical divider">
                                Or
                            </div>
                            <div className='middle aligned row'>
                                <div className="column left aligned">                                
                                            <AddTosetItem input={this.state.inputValue} handleChange={this.handleChange} handleAddItem={this.handleAddItem} />          
                                            <TosetList list={this.state.list}/>                            
                                </div>
                                <div className="column">
                                    <div className="ui icon header">
                                        <i className="video icon"></i>
                                        Add Single Video
                                        </div>
                                        <div className="ui orange button">
                                            Add 
                                        </div>
                                    </div>
                             </div>
                            </div>
                        </div>
                    </div>  
                </div>
        );
    }
}


export default ToSetKeywords;