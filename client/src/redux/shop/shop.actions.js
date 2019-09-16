import axios from 'axios';

import {
  FETCH_SHOP_DATA_START,
  FETCH_SHOP_DATA_SUCCESS,
  SHOP_ERROR,
  TOGGLE_DROPDOWN
} from './shop.types'

import { clearErrors } from '../error/error.actions';

export const shopError = message => ({
  type: SHOP_ERROR,
  payload: message
});

export const fetchShopDataStart = () => ({
  type: FETCH_SHOP_DATA_START
})

export const fetchShopDataSuccess = (data) => ({
  type: FETCH_SHOP_DATA_SUCCESS,
  payload: data
})

export const toggleDropDown = () => ({
  type: TOGGLE_DROPDOWN
})

export const fetchShopData = () => dispatch => {
  dispatch(fetchShopDataStart());
  axios.get('/api/categories')
    .then(res => {
      dispatch(clearErrors())
      dispatch(fetchShopDataSuccess(res.data))
    })
    .catch(err => dispatch(shopError(err.response.data)))
}

