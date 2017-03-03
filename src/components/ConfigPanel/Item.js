import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { config } = this.props

        return (
            <li>
                { config }
            </li>
        );
    }
}
export default Item;