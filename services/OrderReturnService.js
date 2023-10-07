import getAxiosInstance from '../helpers/axios';
const baseUrl = `orderReturn`;

export const OrderReturnService = {
    initiateRequest, //  API Used to Return Order with DTO
    customGet, //  API Used to Get Return Order Request History with userId (headers - userId)
    single, // API Used to Get Return Order Detail with returnId (headers - id)
};

function initiateRequest(object) {
    // Sample Object 
    let obj = {
        "id": "",
        "orderDetailDTO": {
            "id": "orderId",
        },
        "userDetailDTO": {
            "userId": "userId",
        },
        "bankDetailDTO": {
            "bankName": "",
            "accHolder": "",
            "accNo": "",
            "ifscCode": "",
            "accType": "",  // account type (Saving,Current)
            "nickName": "", // Optional
        },
        "reason": "",
    }
    return getAxiosInstance().post(baseUrl + "/createOrUpdate", object);
}
function customGet(config) {
    return getAxiosInstance().get(baseUrl + "/all", config);
}
function single(config) {
    return getAxiosInstance().get(baseUrl + "/single", config);
}