import React, { Component } from 'react';
import { connect } from 'react-redux'

import updateSongInfo from '../../actions/updateSongInfo'
import updatePlayerState from '../../actions/updatePlayerState'

class Item extends Component {
    click = () => {
        const { song, dispatch } = this.props

        dispatch(updateSongInfo(song))
        dispatch(updatePlayerState('play'))
    }

    render() {
        const { songInfo, song } = this.props
        const { title, singer, total } = song

        const className = (song.id === songInfo.id) ? 'active' : ''

        return (
            <li className={ className } onClick={ this.click }>
                <div className="title">{ title }</div>
                <div className="singer">{ singer }</div>
                <div className="total">{ total }</div>
            </li>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        songInfo: store.songInfo
    }
}

export default connect(mapStateToProps)(Item);