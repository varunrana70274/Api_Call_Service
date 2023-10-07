import getAxiosInstance from '../helpers/axios';
const baseUrl = `service/onboarding/vendor`;

export const OnboardingService = {
    signup,
    sendOtp,
    verifyOtp,
    register
};

function signup(data) {
    return getAxiosInstance().post(baseUrl + "/signup", data);
}
function sendOtp(config) {
    return getAxiosInstance().put(baseUrl + "/sendOtp", null, config);
}
function verifyOtp(config) {
    return getAxiosInstance().put(baseUrl + "/verifyOtp", null, config);
}
function register(data) {
    return getAxiosInstance().post(baseUrl + "/register", data);
}