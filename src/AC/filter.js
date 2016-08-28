import {
    SET_DATE_FILTER_FROM,
    SET_DATE_FILTER_TO
} from '../constants'

export function setDateFilterFrom(from) {
    return {
        type: SET_DATE_FILTER_FROM,
        payload: { from: from }
    }
}

export function setDateFilterTo(to) {
    
    return {
        type: SET_DATE_FILTER_TO,
        payload: { to: to }
    }
}