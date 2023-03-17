import customFetch, { checkForUnauthorizedResponse } from '@/utils/axios';

export const getAllProductsThunk = async (_, thunkAPI) => {
  let url = '/product';
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
