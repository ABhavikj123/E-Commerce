import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../Redux/Reducers/cartSlice'; 
import { setOrderDetails } from '../Redux/Reducers/orderSlice';
import { Link } from 'react-router-dom';
const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };

  const calculateSubtotal = () => {
    return cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
  const handleCheckout = () => {
    if (cart.items.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    dispatch(setOrderDetails(cart));
}
  return (
    <div className="container mt-5">
      <h1 className="fs-4 mb-4">Shopping Cart</h1>
      {cart.items.map((item) => (
        <div
          key={item.id}
          className="d-flex flex-column flex-md-row align-items-start justify-content-between bg-white p-3 mb-4 rounded shadow-sm"
          style={{ border: '1px solid #ddd' }}
        >
          <div className="d-flex align-items-start">
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginRight: '15px',
              }}
            />
            <div>
              <h5 className="mb-2 fs-5 fw-normal">{item.title}</h5>
              <p className="text-muted mb-2" style={{ fontSize: '14px' }}>
                {item.description}
              </p>
              <div className="d-flex align-items-center mb-3">
                <span className="text-muted" style={{ fontSize: '14px' }}>
                  {item.availabilityStatus}
                </span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="me-3">
                  <label htmlFor={`quantity-${item.id}`} className="me-2">
                    Qty:
                  </label>
                  <select
                    id={`quantity-${item.id}`}
                    className="form-select form-select-sm d-inline-block"
                    style={{ width: '60px' }}
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  >
                    {[...Array(item.stock).keys()].map((num) => (
                      <option key={num} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  className="btn btn-link text-decoration-none text-primary me-3"
                  style={{ fontSize: '14px' }}
                  onClick={() => dispatch(removeItem(item))}
                >
                  Delete
                </button>
                <button
                  className="btn btn-link text-decoration-none text-primary"
                  style={{ fontSize: '14px' }}
                  onClick={() => console.log('Save for later')}
                >
                  Save for later
                </button>
              </div>
            </div>
          </div>
          <div className="mt-3 mt-md-0">
            <span className="fs-5 fw-bold">₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-end mt-3">
        <div>
          <p className="fs-6 mb-1">
            Subtotal ({cart.items.length} item{cart.items.length > 1 ? 's' : ''}):
            <span className="fw-bold fs-5 ms-2">₹{calculateSubtotal()}</span>
            <Link className="btn btn-primary m-3"
            onClick={handleCheckout} to='/checkout'>Checkout</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
