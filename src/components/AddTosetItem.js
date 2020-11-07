import React from 'react';
import db from '../logic/database';

class AddTosetItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui action input">
                <input type ="text"  onChange={this.props.handleChange} value={this.props.input} />
                <button className="ui orange button" onClick={() => this.props.handleAddItem(this.props.input)} >Add keywords</button>
            </div>
        )
    }
}

export default AddTosetItem;