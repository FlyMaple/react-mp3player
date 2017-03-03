import React, { Component } from 'react';
import { connect } from 'react-redux'

import Overlay from './Overlay'
import SongListPanel from './SongListPanel'
import ConfigPanel from './ConfigPanel'
import MainPanel from './MainPanel'
import BG from './BG'

class App extends Component {
    render() {
        const { songListVisible, configPanelVisible } = this.props

        let className
        
        if (songListVisible) {
            className = 'openSongList'
        } else if (configPanelVisible) {
            className = 'openConfigPanel'
        }

        return (
            <div id="app" className={ className }>
                <Overlay />
                <SongListPanel />
                <MainPanel />
                <ConfigPanel />
                <BG />
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        songListVisible: store.songListVisible,
        configPanelVisible: store.configPanelVisible
    }
}

export default connect(mapStateToProps)(App);