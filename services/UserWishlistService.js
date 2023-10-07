import getAxiosInstance from '../helpers/axios';
const baseUrl = `userWishList`;

export const UserWishlistService = {
  createOrDelete, // API Used to Add/Remove Item from Wishlist with userId and ProdId
  getAll, // API Used to Get Items in Wishlist with userId
};

function createOrDelete(config) {
  return getAxiosInstance().put(baseUrl + '/createOrDelete', null, config);
}
function getAll(config) {
  return getAxiosInstance().get(baseUrl + '/all', config);
}
