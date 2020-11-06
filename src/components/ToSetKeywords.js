import React from 'react';
import TosetList from './TosetList';
import AddTosetItem from './AddTosetItem';

class ToSetKeywords extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contentApp">
                <AddTosetItem />
                <TosetList/>
            </div>
        );
    }
}


export default ToSetKeywords;