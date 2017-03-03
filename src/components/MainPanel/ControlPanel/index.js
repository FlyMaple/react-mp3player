import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactAudioPlayer from 'react-audio-player';

import RepeatMode from './RepeatMode'
import PlayMode from './PlayMode'
import Control from './Control'

import setAudioElement from '../../../actions/setAudioElement'
import updateCurrentTime from '../../../actions/updateCurrentTime'
import nextSong from '../../../actions/nextSong'
import repeatSong from '../../../actions/repeatSong'
import randomSong from '../../../actions/randomSong'

class ControlPanel extends Component {
    componentDidMount = () => {
        const { dispatch } = this.props

        dispatch(setAudioElement(this.refs.audio))
    }

    onAbort = () => {
        console.log('onAbort')
    }

    onCanPlay = () => {
        console.log('onCanPlay')
    }

    onCanPlayThrough = () => {
        console.log('onCanPlayThrough')
        const { audioEl, playerState } = this.props

        if (playerState === 'play') {
            audioEl.audioEl.play()
        }
    }

    onEnded = () => {
        console.log('onEnded')
        const { dispatch, audioEl, repeatMode, playMode } = this.props

        if (repeatMode === 'repeat') {
            dispatch(repeatSong())
        } else if (playMode === 'random') {
            dispatch(randomSong())
        } else {
            dispatch(nextSong())
        }
        
        audioEl.audioEl.play()
    }

    onError = () => {
        console.log('onError')
    }

    onListen = () => {
        // console.log('onListen')
        const { audioEl, dispatch } = this.props

        dispatch(updateCurrentTime(audioEl.audioEl.currentTime))
    }

    onPause = () => {
        console.log('onPause')
    }

    onPlay = () => {
        console.log('onPlay')
    }

    onSeeked = () => {
        console.log('onSeeked')
        const { audioEl } = this.props

        audioEl.audioEl.pause()
        audioEl.audioEl.play()
    }

    
    render() {
        const { songInfo } = this.props
        
        return (
            <div id="controlPanel" className="controlPanel">
                <RepeatMode />
                <Control />
                <PlayMode />
                <ReactAudioPlayer
                    ref="audio"
                    controls={ false }
                    src={`audio/${ songInfo.source }`}
                    onAbort={ this.onAbort }
                    onCanPlay={ this.onCanPlay }
                    onCanPlayThrough={ this.onCanPlayThrough }
                    onEnded={ this.onEnded }
                    onError={ this.onError }
                    onListen={ this.onListen }
                    onPause={ this.onPause }
                    onPlay={ this.onPlay }
                    onSeeked={ this.onSeeked }
                    listenInterval={ 1000 } />
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        songInfo: store.songInfo,
        audioEl: store.audioEl,
        playerState: store.playerState,
        repeatMode: store.repeatMode,
        playMode: store.playMode
    }
}

export default connect(mapStateToProps)(ControlPanel);