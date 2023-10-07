import getAxiosInstance from '../helpers/axios';
const baseUrl = `service/formSupportDocUrl`;

export const FormSupportDocService = {
    saveFileUrl,
};

function saveFileUrl(config, data) {
    return getAxiosInstance().post(baseUrl + "/saveFileUrl", data, config);
}