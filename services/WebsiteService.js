import getAxiosInstance from '../helpers/axios';
const baseUrl = `service/website`;

export const WebsiteService = {
    contactUs,
    slider,
    faq,
    subscribeUs,  // {"emailId" : "ansh@gmail.com"}

    homeSectionA,
    homeSectionB,
    homeSectionC,
    homeSectionD,
};

function contactUs(data) {
    return getAxiosInstance().post(baseUrl + "/contactUs", data);
}

function slider() {
    return getAxiosInstance().get(baseUrl + "/slider");
}

function faq() {
    return getAxiosInstance().get(baseUrl + "/faq");
}

function subscribeUs(data) {
    return getAxiosInstance().post(baseUrl + "/subscribeUs", data);
}

function homeSectionA() {
    return getAxiosInstance().get(baseUrl + "/homeSectionA");
}
function homeSectionB() {
    return getAxiosInstance().get(baseUrl + "/homeSectionB");
}
function homeSectionC() {
    return getAxiosInstance().get(baseUrl + "/homeSectionC");
}
function homeSectionD() {
    return getAxiosInstance().get(baseUrl + "/homeSectionD");
}
