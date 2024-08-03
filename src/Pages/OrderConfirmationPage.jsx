import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearOrder } from '../Redux/Reducers/orderSlice'; 
import { Link } from 'react-router-dom';

const OrderConfirmationPage = () => {
  const orderNumber = useSelector((state) => state.order.orderNumber);
  const order = useSelector((state) => state.order.orderDetails);
  const dispatch = useDispatch();

  const handleBackToHome = () => {
    dispatch(clearOrder());
  };

  if (!orderNumber || !order) {
    return <div>No order confirmation found.</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="fs-4 mb-4">Order Confirmation</h1>
      <div className="card p-4 mb-4">
        <h2 className="fs-5 mb-3">Thank you for your order!</h2>
        <p>Your order number is <strong>{orderNumber}</strong>.</p>
        <h3 className="fs-6 mt-4 mb-3">Order Details:</h3>
        {order.items.map((item) => (
          <div key={item.id} className="d-flex justify-content-between mb-3">
            <span>{item.title} (x{item.quantity})</span>
            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <hr />
        <div className="d-flex justify-content-between fs-5">
          <strong>Total:</strong>
          <strong>₹{order.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</strong>
        </div>
      </div>
      <div>Do payment at delivery</div>
      <Link className="btn btn-primary mt-4" onClick={handleBackToHome} to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default OrderConfirmationPage;
