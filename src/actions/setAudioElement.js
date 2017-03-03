import * as Types from '../types'

export default function(audioEl) {
    return {
        type: Types.SET_AUDIO_ELEMENT,
        audioEl
    }
}