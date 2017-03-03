import React, { Component } from 'react';

import List from './List'

class ConfigPanel extends Component {
    render() {
        return (
            <div id="configPanel" className="configPanel">
                <List />
            </div>
        );
    }
}

export default ConfigPanel;