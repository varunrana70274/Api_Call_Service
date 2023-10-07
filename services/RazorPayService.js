import getAxiosInstance from '../helpers/axios';
const baseUrl = `razorpay`;

export const RazorPayService = {
    checkOut, //  API Used to Get Checksum of Payemnt Gateway with userId and addressId (headers - userId, addressId)
    successCallback, // API Used to update Payment Success Status and Flow
};

function checkOut(config) {
    return getAxiosInstance().post(baseUrl + "/checkOut", null, config);
}

function successCallback(data) {
    return getAxiosInstance().post(baseUrl + "/successCallback", data);
}