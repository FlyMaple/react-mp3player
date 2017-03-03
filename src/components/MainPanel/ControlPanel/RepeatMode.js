import React, { Component } from 'react';
import { connect } from 'react-redux'

import updateRepeatMode from '../../../actions/updateRepeatMode'

class RepeatMode extends Component {
    click = () => {
        const { dispatch } = this.props

        dispatch(updateRepeatMode())
    }

    render() {
        const { repeatMode } = this.props

        const className = (repeatMode === 'repeat') ? 'repeatMode active' : 'repeatMode'

        return (
            <div className={ className } onClick={ this.click }>
                <i className="fa fa-repeat" aria-hidden="true"></i>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        repeatMode: store.repeatMode
    }
}

export default connect(mapStateToProps)(RepeatMode);