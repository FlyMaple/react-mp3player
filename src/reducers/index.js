import * as Types from '../types'

import initState from '../initState'

export default (state = initState, action) => {
    let result_index

    switch (action.type) {
        case Types.TOGGLE_SONG_LIST:
            return { ...state, songListVisible: action.songListVisible }
        case Types.TOGGLE_CONFIG_PANEL:
            return { ...state, configPanelVisible: action.configPanelVisible }
        case Types.UPDATE_SONG_INFO:
            return {
                ...state,
                songInfo: {
                    ...action.songInfo
                },
                current: 0
            }
        case Types.UPDATE_PLAYER_STATE:
            return { ...state, playerState: action.playerState }
        case Types.SET_AUDIO_ELEMENT:
            return { ...state, audioEl: action.audioEl }
        case Types.NEXT_SONG:
            state.songs.find((song, songIndex) => {
                if (song.id === state.songInfo.id) {
                    result_index = songIndex + 1

                    return true
                }

                return false
            })

            if (result_index >= state.songs.length) {
                result_index = 0
            }

            return {
                ...state,
                songInfo: {
                    ...state.songs[result_index]
                },
                current: 0
            }
        case Types.PREV_SONG:
            state.songs.find((song, songIndex) => {
                if (song.id === state.songInfo.id) {
                    result_index = songIndex - 1

                    return true
                }

                return false
            })
            
            if (result_index <= 0) {
                result_index = 0
            }

            return {
                ...state,
                songInfo: {
                    ...state.songs[result_index]
                },
                current: 0
            }
        case Types.REPEAT_SONG:
            return {
                ...state,
                current: 0
            }
        case Types.RANDOM_SONG:
            const songs = state.songs.filter((song, songIndex) => {
                return song.id !== state.songInfo.id
            })

            const rndIndex = Math.floor(Math.random() * songs.length)

            return {
                ...state,
                songInfo: {
                    ...songs[rndIndex]
                },
                current: 0
            }
        case Types.UPDATE_CURRENT_TIME:
            return {
                ...state,
                current: action.current
            }
        case Types.UPDATE_REPEAT_MODE:
            return {
                ...state,
                repeatMode: (state.repeatMode === '') ? 'repeat' : ''
            }
        case Types.UPDATE_PLAY_MODE:
            return {
                ...state,
                playMode: (state.playMode === '') ? 'random' : ''
            }
        default:
            return state
    }
}