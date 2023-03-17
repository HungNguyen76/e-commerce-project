import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import productSlice from './features/product/productSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    // allJobs: allJobsSlice,
  },
});
