import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const searchProducts = createAsyncThunk(
    'search/searchProducts',
    async (searchTerm) => {
      const response = await fetch(`http://localhost:5000/api/product/search?term=${searchTerm}`);
      return response.json();
    }
  );

const searchProductSlice = createSlice({
    name: 'search',
    initialState: {
        products: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(searchProducts.pending, (state) => {
              state.status = 'loading';
          })
          .addCase(searchProducts.fulfilled, (state, action) => {
              state.status = 'succeeded';
              state.products = action.payload;
          })
          .addCase(searchProducts.rejected, (state, action) => {
              state.status = 'failed';
              state.error = action.error.message;
          });
  },
});

export default searchProductSlice.reducer;