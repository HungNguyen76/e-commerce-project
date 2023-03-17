import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getUserFromLocalStorage } from '@/utils/localStorage';
import { createProductThunk, deleteProductThunk, editProductThunk } from './productThunk';
const initialState = {
  _id: '',
  isLoading: false,
  image: '',
  new: true,
  title: '',
  type: '',
  subtitle: '',
  description: '',
  color: 0,
  reviews: 0,
  stars: 0,
  createdDate: '',
  updatedDate: '',
  productColors: [],
};

export const createProduct = createAsyncThunk('product/addOne', createProductThunk);

export const deleteProduct = createAsyncThunk('product/:productId', deleteProductThunk);

export const editProduct = createAsyncThunk('product/editProduct', editProductThunk);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || '',
      };
    },
    setEditProduct: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('Product Created');
      })
      .addCase(createProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteProduct.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProduct.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('Product Modified...');
      })
      .addCase(editProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { handleChange, clearValues, setEditProduct } = productSlice.actions;

export default productSlice.reducer;
