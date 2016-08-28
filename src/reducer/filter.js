import { SET_DATE_FILTER_FROM, SET_DATE_FILTER_TO } from '../constants'

export default (filter = { from: null, to: null }, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case SET_DATE_FILTER_FROM:
            return Object.assign({}, filter, { from: payload.from })
        case SET_DATE_FILTER_TO:
            return Object.assign({}, filter, { to: payload.to })
        default:
            return filter
    }

    return filter
}