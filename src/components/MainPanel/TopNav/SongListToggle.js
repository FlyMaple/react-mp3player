import React, { Component } from 'react';
import { connect } from 'react-redux'

import toggleSongList from '../../../actions/toggleSongList'

class SongListToggle extends Component {
    toggle = () => {
        const { dispatch } = this.props

        dispatch(toggleSongList(true))
    }

    render() {
        const { songListVisible } = this.props

        let className

        if (songListVisible) {
            className = 'songList active'
        } else {
            className = 'songList'
        }

        return (
            <div className={ className } onClick={ this.toggle }>
                <i className="fa fa-music" aria-hidden="true"></i>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        songListVisible: store.songListVisible
    }
}

export default connect(mapStateToProps)(SongListToggle);