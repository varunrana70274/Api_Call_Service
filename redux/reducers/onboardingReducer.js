import { UPDATE_ONBOARDING } from "../actionTypes";

const initialState = {
    userId: "",
    name: "",
    mobile: "",
    emailId: "",
}
export default function OnboardingReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_ONBOARDING:
            return {
                ...state,
                ...action.payload,
            };
        default: return state;
    }
}

export const updateOnboardingDetails = (data) => {
    return {
        type: UPDATE_ONBOARDING,
        payload: data,
    }
}