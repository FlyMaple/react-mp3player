import React, { Component } from 'react';
import { connect } from 'react-redux'

import toggleConfigPanel from '../../../actions/toggleConfigPanel'

class MenuToggle extends Component {
    toggle = () => {
        const { dispatch } = this.props

        dispatch(toggleConfigPanel(true))
    }

    render() {
        const { configPanelVisible } = this.props

        let className

        if (configPanelVisible) {
            className = 'menu active'
        } else {
            className = 'menu'
        }

        return (
            <div className={ className } onClick={ this.toggle }>
                <i className="fa fa-cog" aria-hidden="true"></i>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        configPanelVisible: store.configPanelVisible
    }
}

export default connect(mapStateToProps)(MenuToggle);