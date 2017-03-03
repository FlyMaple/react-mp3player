import React, { Component } from 'react';

import TopNav from './TopNav'
import ViewPanel from './ViewPanel'
import ControlPanel from './ControlPanel'

class MainPanel extends Component {
    render() {
        return (
            <div id="mainPanel" className="main">
                <TopNav />
                <ViewPanel />
                <ControlPanel />
            </div>
        );
    }
}

export default MainPanel;