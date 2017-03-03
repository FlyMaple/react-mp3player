import React, { Component } from 'react';

import List from './List'

class SongListPanel extends Component {
    render() {
        return (
            <div id="songListPanel" className="songListPanel">
                <List />
            </div>
        );
    }
}

export default SongListPanel;