import * as Types from '../types'

export default function (playerState) {
    return {
        type: Types.UPDATE_PLAYER_STATE,
        playerState
    }
}