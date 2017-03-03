import React, { Component } from 'react';
import { connect } from 'react-redux'

import updatePlayerState from '../../../../actions/updatePlayerState'

class Play extends Component {
    click = () => {
        const { audioEl, dispatch } = this.props

        audioEl.audioEl.play();
        dispatch(updatePlayerState('play'))
    }

    render() {
        return (
            <div className="play" onClick={ this.click }>
                <i className="fa fa-play" aria-hidden="true"></i>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        audioEl: store.audioEl
    }
}

export default connect(mapStateToProps)(Play);