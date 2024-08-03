import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../Reducers/contactSlice';
import categoriesReducer from '../Reducers/categoriesSlice';
import sliderReducer from '../Reducers/sliderSlice';
import productSlice from '../Reducers/productSlice';
import singleProductSlice from '../Reducers/singleProductSlice'
import cartSlice from '../Reducers/cartSlice';
import orderSlice from '../Reducers/orderSlice';
import  searchProductSlice  from '../Reducers/searchSlice';
export const store = configureStore({
  reducer: {
    contact: contactReducer,
    categories: categoriesReducer,
    slider: sliderReducer,
    search:searchProductSlice,
    products:productSlice,
    singleproduct:singleProductSlice,
    cart:cartSlice,
    order:orderSlice
  },
});
