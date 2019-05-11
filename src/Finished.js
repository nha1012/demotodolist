import React, { Component } from 'react';

class Finished extends Component {
    render() {
        return (
            <li>
                <h3>{this.props.content} </h3>
            </li>
        );
    }
}

export default Finished;