/* eslint-disable prettier/prettier */
import getAxiosInstance from '../helpers/axios';
const baseUrl = `order`;

export const OrderService = {
  cod, //  API Used to Post Order of COD Details with (headers userId,billAddressId, shipAddressId)
  orderSummary, //  API Used to Get CheckOut Details with userId (headers - userId)
  customGet, //  API Used to Get Order History with userId (headers - userId)
  singleOrder, // API Used to Get Order Detail with orderId (headers - orderId)
  getOrderStatus, // API Used to Get Order Timeline with orderId (headers - orderId)
  getInvoice, // API Used to Get Invoice Pdf Link with orderId (headers - orderId)
  validateCoupon, // Validate Coupon Code
};

function cod(config) {
  return getAxiosInstance().post(baseUrl + '/cod', null, config);
}
function orderSummary(config) {
  return getAxiosInstance().get(baseUrl + '/orderSummary', config);
}
function customGet(config) {
  return getAxiosInstance().get(baseUrl + '/customGet', config);
}
function singleOrder(config) {
  return getAxiosInstance().get(baseUrl + '/single', config);
}
function getOrderStatus(config) {
  return getAxiosInstance().get(baseUrl + '/getOrderStatusHistory', config);
}
function getInvoice(config) {
  return getAxiosInstance().get(baseUrl + '/downloadInvoice', config);
}
function validateCoupon(config) {
  return getAxiosInstance().get(baseUrl + '/validateCoupon', config);
}
