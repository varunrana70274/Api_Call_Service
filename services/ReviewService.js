/* eslint-disable prettier/prettier */
import getAxiosInstance from '../helpers/axios';
const url = `productReview`;

export const ReviewService = {
  reviewCreate,
};

function reviewCreate(body) {
  return getAxiosInstance().post(url + '/createOrUpdate', body, null);
}
