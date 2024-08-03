import React from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = ({ category }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card border-light shadow-sm">
                <img
                    src={category.thumbnail}
                    className="card-img-top"
                    alt={category.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{category.title}</h5>
                    <p className="card-text">{category.description}</p>
                    <Link
                        to={`/products/${category.category}`}
                        className="btn btn-primary"
                    >
                        View Products
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
