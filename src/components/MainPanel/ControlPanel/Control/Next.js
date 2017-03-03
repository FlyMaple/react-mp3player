import React, { Component } from 'react';
import { connect } from 'react-redux'

import nextSong from '../../../../actions/nextSong'
import updatePlayerState from '../../../../actions/updatePlayerState'
import randomSong from '../../../../actions/randomSong'

class Next extends Component {
    click = () => {
        const { dispatch, playMode } = this.props

        if (playMode === 'random') {
            dispatch(randomSong())
        } else {
            dispatch(nextSong())
        }
        dispatch(updatePlayerState('play'))
    }

    render() {
        return (
            <div className="next" onClick={ this.click }>
                <i className="fa fa-step-forward" aria-hidden="true"></i>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        audioEl: store.audioEl,
        songInfo: store.songInfo,
        playMode: store.playMode
    }
}

export default connect(mapStateToProps)(Next);