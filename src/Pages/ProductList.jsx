import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategory } from '../Redux/Reducers/productSlice';
import ProductItem from '../components/ProductItem';
import { useParams } from 'react-router-dom';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const { category } = useParams(); 
    useEffect(() => {
        dispatch(fetchProductsByCategory(category));
    }, [dispatch, category]);

    return (
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <ProductItem key={product.title} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;