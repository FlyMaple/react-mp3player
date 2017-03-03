import * as Types from '../types'

export default function (songInfo) {
    return {
        type: Types.UPDATE_SONG_INFO,
        songInfo
    }
}