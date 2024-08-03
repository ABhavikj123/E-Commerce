import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        status: 'idle',
        error: null
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setCategoriesStatus: (state, action) => {
            state.status = action.payload;
        },
        setCategoriesError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setCategories, setCategoriesStatus, setCategoriesError } = categoriesSlice.actions;

export default categoriesSlice.reducer;
