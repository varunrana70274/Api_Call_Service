import { PRODUCT_ACTION } from "../actionTypes";

const initialState = {
    productId: "",
}
export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_ACTION:
            return {
                ...state,
                ...action.payload,
            };
        default: return state;
    }
}

export const updateProductDetails = (data) => {
    return {
        type: PRODUCT_ACTION,
        payload: data,
    }
}