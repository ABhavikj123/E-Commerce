import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orderDetails: null,
    orderNumber: null,
  },
  reducers: {
    setOrderDetails: (state, action) => {
      state.orderDetails = action.payload;
    },
    confirmOrder: (state) => {
      state.orderNumber = Math.floor(Math.random() * 1000000); 
    },
    clearOrder: (state) => {
      state.orderDetails = null;
      state.orderNumber = null;
    },
  },
});

export const { setOrderDetails, confirmOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
