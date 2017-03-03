import React, { Component } from 'react';
import { connect } from 'react-redux'

import toggleSongList from '../actions/toggleSongList'
import toggleConfigPanel from '../actions/toggleConfigPanel'

class Overlay extends Component {
    toggle = () => {
        const { dispatch } = this.props

        dispatch(toggleSongList(false))
        dispatch(toggleConfigPanel(false))
    }

    render() {
        const { songListVisible, configPanelVisible } = this.props

        let className
        
        if (songListVisible || configPanelVisible) {
            className = 'overlay visible'
        } else {
            className = 'overlay'
        }

        return (
            <div id="overlay" className={ className } onClick={ this.toggle }></div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        songListVisible: store.songListVisible,
        configPanelVisible: store.configPanelVisible
    }
}

export default connect(mapStateToProps)(Overlay);