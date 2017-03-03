import React, { Component } from 'react';
import { connect } from 'react-redux'

import prevSong from '../../../../actions/prevSong'
import updatePlayerState from '../../../../actions/updatePlayerState'

class Prev extends Component {
    click = () => {
        const { dispatch } = this.props

        dispatch(prevSong())
        dispatch(updatePlayerState('play'))
    }

    render() {
        return (
            <div className="prev" onClick={ this.click }>
                <i className="fa fa-step-backward" aria-hidden="true"></i>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        audioEl: store.audioEl,
        songInfo: store.songInfo
    }
}

export default connect(mapStateToProps)(Prev);