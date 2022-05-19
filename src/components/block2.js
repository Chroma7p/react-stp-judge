import React from 'react';

export default class Block2 extends React.Component {
    render() {
        return (
            <div className="rule1">
                <h3>{this.props.title}</h3>
                <div className="rule2">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

