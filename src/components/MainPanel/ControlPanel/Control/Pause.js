import React, { Component } from 'react';
import { connect } from 'react-redux'

import updatePlayerState from '../../../../actions/updatePlayerState'

class Pause extends Component {
    click = () => {
        const { audioEl, dispatch } = this.props

        audioEl.audioEl.pause();
        dispatch(updatePlayerState('pause'))
    }

    render() {
        return (
            <div className="pause" onClick={ this.click }>
                <i className="fa fa-pause" aria-hidden="true"></i>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        audioEl: store.audioEl
    }
}

export default connect(mapStateToProps)(Pause);