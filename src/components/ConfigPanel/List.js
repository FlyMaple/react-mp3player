import React, { Component } from 'react';

import Item from './Item'

class List extends Component {
    constructor (props) {
        super(props)

        this.state = {
            configs: ['登入/註冊', '使用說明', '版權資訊']
        }
    }
    render() {
        return (
            <ul>
                {
                    this.state.configs.map(config => (
                        <Item key={ config } config={ config } />
                    ))
                }
            </ul>
        );
    }
}

export default List;