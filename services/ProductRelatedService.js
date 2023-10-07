import getAxiosInstance from '../helpers/axios';
const baseUrl = 'service/productRelated';

export const ProductRelatedService = {
  categories, // Cat,SubCategory,SubCategories
  getFilters, // to get Size,Color Filter and its attributes
  filterProduct, //
  products, // get all products on basis of mega menu with headers [catId,userId]
  product, // Single Product with headers [productId, userId]
  similarProducts, // Similar Product with [headers productId, userId]
  searchMaster, // Search with [headers search]
  allCategory, // All category
  allProduct, // All product
  allCatProduct, // All category wise product
  customerReview,
  productOverallReview, // customer Reviews
};

// filterProduct
// private String productName;
// private List<String> catIds;
// private List<String> subCatIds;
// private List<String> subSubCatIds;
// private List<FilterAttrDTO> attributes = new ArrayList<>();

function categories(config) {
  return getAxiosInstance().get(baseUrl + '/categories', config);
}
function getFilters(config) {
  return getAxiosInstance().get(baseUrl + '/filters', config);
}
function filterProduct(data, config) {
  return getAxiosInstance().post(baseUrl + '/filterProduct', data, config);
}
function products(config) {
  return getAxiosInstance().get(baseUrl + '/products', config);
}
function product(config) {
  return getAxiosInstance().get(baseUrl + '/product', config);
}
function similarProducts(config) {
  return getAxiosInstance().get(baseUrl + '/similarProducts', config);
}
function searchMaster(config) {
  return getAxiosInstance().get(baseUrl + '/searchMaster', config);
}

function allCategory(config) {
  return getAxiosInstance().get(baseUrl + '/allCategory', config);
}
function allProduct(config) {
  return getAxiosInstance().get(baseUrl + '/allProduct', config);
}
function allCatProduct(config) {
  return getAxiosInstance().get(baseUrl + '/allCatProduct', config);
}
function customerReview(config) {
  return getAxiosInstance().get(baseUrl + '/productReviews', config);
}
function productOverallReview(config) {
  return getAxiosInstance().get(baseUrl + '/product', config);
}
