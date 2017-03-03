import React, { Component } from 'react';
import { connect } from 'react-redux'

class Photo extends Component {
    render() {
        const { songInfo } = this.props

        return (
            <div className="photo">
                <img src={ `images/${ songInfo.photo }` } alt="" />
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        songInfo: store.songInfo
    }
}

export default connect(mapStateToProps)(Photo);