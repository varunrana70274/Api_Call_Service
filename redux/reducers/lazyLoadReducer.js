import { LAZY_LOAD_ACTION } from "../actionTypes";

const initialState = {
    pageNum: 0,
    randomNumber: null,
}
export default function lazyLoadReducer(state = initialState, action) {
    switch (action.type) {
        case LAZY_LOAD_ACTION:
            return {
                ...state,
                ...action.payload,
            };
        default: return state;
    }
}

export const updateLazyLoadReducer = (data) => {
    return {
        type: LAZY_LOAD_ACTION,
        payload: data,
    }
}