import React, { Component } from 'react';

import SongListToggle from './SongListToggle'
import MenuToggle from './MenuToggle'
import Title from './Title'

class TopNav extends Component {
    render() {
        return (
            <div id="topNav" className="topNav">
                <SongListToggle />
                <Title />
                <MenuToggle />
            </div>
        );
    }
}

export default TopNav;