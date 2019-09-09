import axios from 'axios';

import {
  FETCH_SHOP_DATA_START,
  FETCH_SHOP_DATA_SUCCESS
} from './shop.types'

import { shopError } from '../error/error.actions';

export const fetchShopDataStart = () => ({
  type: FETCH_SHOP_DATA_START
})

export const fetchShopDataSuccess = (data) => ({
  type: FETCH_SHOP_DATA_SUCCESS,
  payload: data
})

export const fetchShopData = () => dispatch => {
  dispatch(fetchShopDataStart());
  axios.get('/api/categories')
    .then(res => dispatch(fetchShopDataSuccess(res.data)))
    .catch(err => dispatch(shopError(err.response.data)))
}

