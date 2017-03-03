import * as Types from '../types'

export default function(songListVisible) {
    return {
        type: Types.TOGGLE_SONG_LIST,
        songListVisible
    }
}