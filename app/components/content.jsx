'use babel';

import React from 'react';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="content">
                <div>Articles:</div>
                <div>{this.props.someData}</div>
                <button onClick={this.props.getData} className="btn btn-primary"><i>GetData</i></button>
            </div>);
    }
}