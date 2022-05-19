import React from 'react';
import Block1 from './block1';
import Block2 from './block2';

export default class Rule extends React.Component {
    render() {

        return (
            <Block1 title="ルール">
                {require('../STPrule.json').map(blk=>(<Block2 title={blk.title}>{blk.content}</Block2>))}
            </Block1>
        );
    }
}
