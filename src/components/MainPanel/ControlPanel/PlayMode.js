import React, { Component } from 'react';
import { connect } from 'react-redux'

import updatePlayMode from '../../../actions/updatePlayMode'

class PlayMode extends Component {
    click = () => {
        const { dispatch } = this.props

        dispatch(updatePlayMode())
    }

    render() {
        const { playMode } = this.props

        const className = (playMode === 'random') ? 'playMode active' : 'playMode'

        return (
            <div className={ className } onClick={ this.click }>
                <i className="fa fa-random" aria-hidden="true"></i>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        playMode: store.playMode
    }
}

export default connect(mapStateToProps)(PlayMode);