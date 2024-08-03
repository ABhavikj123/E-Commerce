import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductsByCategory = createAsyncThunk(
    'products/fetchProductsByCategory',
    async (category) => {
        const response = await fetch(`http://localhost:5000/api/product/products/${category}`);
        return response.json();
    }
);


const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(fetchProductsByCategory.pending, (state) => {
              state.status = 'loading';
          })
          .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
              state.status = 'succeeded';
              state.products = action.payload;
          })
          .addCase(fetchProductsByCategory.rejected, (state, action) => {
              state.status = 'failed';
              state.error = action.error.message;
          });
  },
});

export default productSlice.reducer;