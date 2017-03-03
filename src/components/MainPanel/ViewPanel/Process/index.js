import React, { Component } from 'react';
import { connect } from 'react-redux'
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

import updateCurrentTime from '../../../../actions/updateCurrentTime'
import updatePlayerState from '../../../../actions/updatePlayerState'

class Process extends Component {
    barChange = (value, slider) => {
        const { dispatch, audioEl } = this.props

        audioEl.audioEl.currentTime = value
        dispatch(updateCurrentTime(value))
        dispatch(updatePlayerState('play'))
    }

    render() {
        const { audioEl, songInfo, current } = this.props

        let max = 100
        let value = 0

        if (audioEl && audioEl.audioEl.duration) {
            max = audioEl.audioEl.duration
            value = current
        }

        const m = Math.floor(current / 60)
        const s = Math.ceil(current % 60)

        return (
            <div className="process">
                <div className="current">{ `${m}:${s}` }</div>
                <Slider defaultValue={ 0 } min={ 0 } max={ max } value={ value } onChange={ this.barChange } />
                <div className="total">{ songInfo.total }</div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        songInfo: store.songInfo,
        audioEl: store.audioEl,
        current: store.current
    }
}

export default connect(mapStateToProps)(Process);