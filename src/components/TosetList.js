import React from 'react';


class TosetList extends React.Component {
    constructor(props) {
        super(props);

    }

    getItemReact(item) {
        return <div className="item">{item}</div>;
    }

    render() {
        return (
            <div className ="ui list">
                {this.props.list.map(item => this.getItemReact(item))}
            </div>
        )
    }
}

export default TosetList;
