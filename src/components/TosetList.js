import React from 'react';
import db from '../logic/database';

if (db.getCollection('keywords') === undefined) {
    db.addValue('keywords', "Blippi");
    db.addValue('keywords', "Get Well Soon Dr.Ranj teaches" );
}

class TosetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        const items = db.getCollection('keywords');
        if (items) {
            this.setState({ items });
        }
    }

    getItemReact(item) {
        return <li>{item}</li>;
    }

    render() {
        const itemsList = this.state.items.map(item => this.getItemReact(item));
        return (
            <ul>
                {itemsList}
            </ul>
        )
    }
}

export default TosetList;
