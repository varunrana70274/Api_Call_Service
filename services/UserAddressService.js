import getAxiosInstance from '../helpers/axios';
const baseUrl = `address`;

export const UserAddressService = {
  createOrUpdate, // API Used to Save Address (headers - userId)
  getAll, // API Used to Get Address with userId (headers - userId)
  deleteByIds, // API Used to delete Item From Address with addressId (headers - ids)
};

function createOrUpdate(data, config) {
  return getAxiosInstance().post(baseUrl + '/createOrUpdate', data, config);
}

function getAll(config) {
  return getAxiosInstance().get(baseUrl + '/all', config);
}

function deleteByIds(config) {
  return getAxiosInstance().delete(baseUrl + '/deleteByIds', config);
}
