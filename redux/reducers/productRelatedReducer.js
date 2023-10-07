import { PRODUCT_RELATED_ACTION } from "../actionTypes";

const initialState = {
    catList: ""
}
export default function productRelatedReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_RELATED_ACTION:
            return {
                ...state,
                ...action.payload,
            };
        default: return state;
    }
}

export const updateProductRelatedReducer = (data) => {
    return {
        type: PRODUCT_RELATED_ACTION,
        payload: data,
    }
}