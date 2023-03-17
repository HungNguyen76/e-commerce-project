import { getAllProducts } from '../allProducts/allProductsSlice';
import customFetch, { checkForUnauthorizedResponse } from '@/utils/axios';
// import { clearValues } from './jobSlice';

export const createProductThunk = async (product, thunkAPI) => {
  try {
    const resp = await customFetch.post('/product/addOne', product);
    // thunkAPI.dispatch(clearValues());
    return resp.data.msg;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
export const deleteProductThunk = async (productId, thunkAPI) => {
  // thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(`/product/${productId}`);
    thunkAPI.dispatch(getAllProducts());
    return resp.data.msg;
  } catch (error) {
    // thunkAPI.dispatch(hideLoading());
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
export const editProductThunk = async ({ productId, job }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(`/product/${productId}`, job);
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
