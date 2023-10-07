import getAxiosInstance from '../helpers/axios';
const baseUrl = `orderCancel`;

export const OrderCancelService = {
    initiateRequest, //  API Used to Cancel Order with DTO
    customGet, //  API Used to Get Cancel Order Request History with userId (headers - userId)
    single, // API Used to Get Cancel Order Detail with cancelId (headers - id)
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