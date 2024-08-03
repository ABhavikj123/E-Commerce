import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../Redux/Reducers/singleProductSlice';
import { useParams } from 'react-router-dom';
import { addItem } from '../Redux/Reducers/cartSlice';


const ProductViewPage = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.singleproduct.product);
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch, id]);

    const renderReviews = (reviews) => {
        return reviews.map((review, index) => (
            <div className="card mb-3 shadow-sm" key={index}>
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0">{review.reviewerName}</h5>
                    <span className={`badge ${review.rating >= 4 ? 'bg-success' : review.rating >= 3 ? 'bg-warning' : 'bg-danger'}`}>
                        {review.rating} <i className="fas fa-star"></i>
                    </span>
                </div>
                <div className="card-body">
                    <p className="card-text">{review.comment}</p>
                    <small className="text-muted">Reviewed on {new Date(review.date).toLocaleDateString()}</small>
                </div>
            </div>
        ));
    };

    return (
        <div className="container my-5">
            {product && Object.keys(product).length > 0 ? (
                <div className="row">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <img
                                src={product.thumbnail}
                                className="card-img-top img-fluid rounded"
                                alt={product.title}
                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="card-body">
                                <h1 className="card-title display-5 mb-4">{product.title}</h1>
                                <h2 className="card-subtitle mb-3 text-muted">{product.category}</h2>
                                <p className="card-text lead">{product.description}</p>
                                <div className="d-flex align-items-center mb-2">
                                    <span className="badge bg-success me-2 h4 mb-0">Price: ${product.price}</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <span className="badge bg-warning me-2 h5 mb-0">
                                        Rating: {product.rating} / 5 <i className="fas fa-star text-dark"></i>
                                    </span>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <strong>Brand:</strong> {product.brand}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Stock:</strong> {product.stock} items available
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Warranty:</strong> {product.warrantyInformation}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Shipping:</strong> {product.shippingInformation}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Return Policy:</strong> {product.returnPolicy}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}
                                    </li>
                                </ul>
                                <button
                                    className="btn btn-primary mt-4 btn-lg w-100"
                                    onClick={() => dispatch(addItem(product))}
                                >
                                    <i className="fas fa-shopping-cart"></i> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <span className="ms-3">Loading...</span>
                </div>
            )}
            {product && product.reviews && product.reviews.length > 0 && (
                <div className="mt-5">
                    <h2 className="mb-4">Customer Reviews</h2>
                    <div className="row">
                        <div className="col">
                            {renderReviews(product.reviews)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductViewPage;
