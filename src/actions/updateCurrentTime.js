import * as Types from '../types'

export default function (current) {
    return {
        type: Types.UPDATE_CURRENT_TIME,
        current
    }
}