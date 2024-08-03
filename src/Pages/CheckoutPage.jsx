import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { confirmOrder } from '../Redux/Reducers/orderSlice'; 

const CheckoutPage = () => {
  const order = useSelector((state) => state.order.orderDetails);
  const dispatch = useDispatch();


  if (!order) {
    return <div>No order found.</div>;
  }

  const handleConfirmOrder = () => {
    dispatch(confirmOrder());
  };

  const calculateTotal = () => {
    return order.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mt-5">
      <h1 className="fs-4 mb-4">Checkout</h1>
      <div className="card p-4 mb-4">
        <h2 className="fs-5 mb-3">Order Summary</h2>
        {order.items.map((item) => (
          <div key={item.id} className="d-flex justify-content-between mb-3">
            <span>{item.title} (x{item.quantity})</span>
            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <hr />
        <div className="d-flex justify-content-between fs-5">
          <strong>Total:</strong>
          <strong>₹{calculateTotal()}</strong>
        </div>
      </div>
      <div className="card p-4">
        <h2 className="fs-5 mb-3">Shipping Information</h2>
        <p>Name: John Doe</p>
        <p>Address: 123 Main St, Anytown, USA</p>
        <p>Phone: +1 234 567 890</p>
      </div>
      <Link className="btn btn-success mt-4" onClick={handleConfirmOrder} to='/orderconfirmation'>
        Confirm Order
      </Link>
    </div>
  );
};

export default CheckoutPage;
