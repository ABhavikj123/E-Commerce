import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchProductById = createAsyncThunk(
    'singleproduct/fetchProductById',
    async (id) => {
        const response = await fetch(`http://localhost:5000/api/product/product/${id}`);
        const data = await response.json();
        console.log(data)
        return data;
    }
);

const singleProductSlice = createSlice({
    name: 'singleproduct',
    initialState: {
        product: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductById.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.product = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default singleProductSlice.reducer;