import React from 'react';

export default class Block1 extends React.Component {

    render() {
        return (
            <div className="base">
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}

