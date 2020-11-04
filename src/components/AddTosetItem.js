import React from 'react';
import db from '../logic/database';

class AddTosetItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    updateValue(key, event) {
        this.setState({ [key]: event.target.value });
    }

    addItemToDb(event) {
        db.addValue('keywords', this.state.text);
    }

    render() {
        return (
            <div>
                <input onChange={event => this.updateValue('text', event)} value={this.state.text} />
                <button onClick={event => this.addItemToDb(event)}>Add keywords</button>
            </div>
        )
    }
}

export default AddTosetItem;