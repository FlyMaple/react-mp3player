import React, { Component } from 'react';
import { connect } from 'react-redux'

class Infos extends Component {
    render() {
        const { songInfo } = this.props

        return (
            <div className="infos">
                <div className="songTitle textCenter">{ songInfo.title }</div>
                <div className="singer textCenter">{ songInfo.singer }</div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        songInfo: store.songInfo
    }
}

export default connect(mapStateToProps)(Infos);