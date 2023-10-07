import getAxiosInstance from '../helpers/axios';
const baseUrl = `userDetail`;

export const CustomerService = {
    getUserDetail,
    getAll,
    changePassword,
    countCustomer, // Count of Cart and WishList with headers [userId]
};

function getUserDetail(config) {
    return getAxiosInstance().get(baseUrl + "/single", config);
}

function getAll(config) {
    return getAxiosInstance().get(baseUrl + "/all", config);
}

function changePassword(config) {
    return getAxiosInstance().post(baseUrl + "/changePassword", null, config);
}

function countCustomer(config, dispatch, router) {
    return getAxiosInstance(dispatch, router).get(baseUrl + "/countCustomer", config);
}