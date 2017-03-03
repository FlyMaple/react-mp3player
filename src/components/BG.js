import React, { Component } from 'react';
import { connect } from 'react-redux'

class BG extends Component {
    render() {
        const { songInfo } = this.props

        const style = {
            backgroundImage: `url(images/${songInfo.bg})`
        }

        return (
            <div id="bodyPseudo" style={ style }></div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        songInfo: store.songInfo
    }
}

export default connect(mapStateToProps)(BG);