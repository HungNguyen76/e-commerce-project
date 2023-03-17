import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllProductsThunk } from './allProductsThunk';

const initialState = {
  isLoading: true,
  jobs: [],
};

export const getAllProducts = createAsyncThunk('product', getAllProductsThunk);

const allProductsSlice = createSlice({
  name: 'allProducts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.jobs = payload.jobs;
      })
      .addCase(getAllProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default allProductsSlice.reducer;
