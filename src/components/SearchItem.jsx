import React from 'react';
import { Link } from 'react-router-dom';
const SearchItem = ({ product }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 border-light shadow-sm">
                <img
                    src={product.thumbnail}
                    className="card-img-top img-fluid"
                    alt={product.title}
                    style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-muted">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text text-success">$ {product.price}</p>
                        <p className="card-text text-warning">{product.rating} / 5</p>
                    </div>
                    <p className="card-text text-muted">Brand: {product.brand}</p>
                </div>
                <Link
                        to={`/product/${product.id}`}
                        className="btn btn-primary"
                    >
                        View Product
                    </Link>
            </div>
        </div>
    );
};

export default SearchItem;