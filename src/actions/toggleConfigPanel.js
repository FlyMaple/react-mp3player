import * as Types from '../types'

export default function(configPanelVisible) {
    return {
        type: Types.TOGGLE_CONFIG_PANEL,
        configPanelVisible
    }
}