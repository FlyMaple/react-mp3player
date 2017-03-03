import React, { Component } from 'react';

import Cover from './Cover'
import Process from './Process'

class ViewPanel extends Component {
    render() {
        return (
            <div id="viewPanel" className="viewPanel">
                <Cover />
                <Process />
            </div>
        );
    }
}

export default ViewPanel;