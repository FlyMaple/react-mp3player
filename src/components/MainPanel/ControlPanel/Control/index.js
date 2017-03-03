import React, { Component } from 'react';
import { connect } from 'react-redux'

import Prev from './Prev'
import Pause from './Pause'
import Play from './Play'
import Next from './Next'

class Control extends Component {
    render() {
        const { playerState } = this.props

        return (
            <div className="control">
                <Prev />
                {
                    (playerState === 'pause') ?
                    <Play /> :
                    <Pause />
                }
                <Next />
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        playerState: store.playerState
    }
}

export default connect(mapStateToProps)(Control);