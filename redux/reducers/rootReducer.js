import {combineReducers} from 'redux';
import OnboardingReducer from './onboardingReducer';
import userReducer from './userReducer';
import productsReducer from './productsReducer';
import userCountIndicatorReducer from './userCountIndicatorReducer';
import productRelatedReducer from './productRelatedReducer';
import addressReducer from './addressReducer';
import lazyLoadReducer from './lazyLoadReducer';
import {filterReducer} from './filterReducers';

const rootReducer = combineReducers({
  userReducer,
  OnboardingReducer,
  productsReducer,
  userCountIndicatorReducer,
  productRelatedReducer,
  lazyLoadReducer,
  filterReducer,
  addressReducer,
});

export default rootReducer;
