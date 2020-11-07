import React from 'react';
import TosetList from './TosetList';
import AddTosetItem from './AddTosetItem';

class ToSetKeywords extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                                            <AddTosetItem />          
                                            <TosetList/>                            
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
            // <div className="contentApp">
            //     <AddTosetItem />
            //     <TosetList/>
            // </div>
        );
    }
}


export default ToSetKeywords;