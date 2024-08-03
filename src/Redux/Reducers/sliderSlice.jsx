
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSliderImages = createAsyncThunk('slider/fetchSliderImages', async () => {
    const response = await fetch('http://localhost:5000/api/product/sliderimages');
    const data = await response.json();
    const imagesWithCategories = data.flatMap(item =>
        item.thumbnails.map(thumbnail => ({
            url: thumbnail,
            category: item.category
        }))
    );
    return imagesWithCategories;
});

const sliderSlice = createSlice({
    name: 'slider',
    initialState: {
        images: [],
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSliderImages.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSliderImages.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.images = action.payload;
            })
            .addCase(fetchSliderImages.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default sliderSlice.reducer;
