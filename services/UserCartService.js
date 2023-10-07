import getAxiosInstance from '../helpers/axios';
const baseUrl = `userCart`;

export const UserCartService = {
  createOrUpdate, // API Used to Add Item in Cart with userId and ProdId
  getAll, // API Used to Get Items in Cart with userId
  deleteByIds, // API Used to delete Item From Cart with cartId
  clearCart, // API Used to delete All Items From Cart with userId
  deleteProductFromCart, // API Used to delete Item From All Product Page Where you have userId and ProdId
  updateProductQty, // API used to update Product Qty from CART with userId,productId, moreLess (pass 1 to increase & 0 to decrese)
};

function createOrUpdate(config) {
  return getAxiosInstance().put(baseUrl + '/createOrUpdate', null, config);
}

function getAll(config) {
  return getAxiosInstance().get(baseUrl + '/all', config);
}
function deleteByIds(config) {
  return getAxiosInstance().delete(baseUrl + '/deleteByIds', config);
}
function clearCart(config) {
  return getAxiosInstance().delete(baseUrl + '/clearCart', config);
}
function deleteProductFromCart(config) {
  return getAxiosInstance().delete(baseUrl + '/deleteProductFromCart', config);
}
function updateProductQty(config) {
  return getAxiosInstance().put(baseUrl + '/updateProductQty', null, config);
}
