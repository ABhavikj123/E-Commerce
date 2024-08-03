import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchProducts } from '../Redux/Reducers/searchSlice';
import SearchItem from '../components/SearchItem';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.search.products);
    const status = useSelector((state) => state.search.status);
    const error = useSelector((state) => state.search.error);
    const query = useQuery();
    const searchTerm = query.get('term');

    useEffect(() => {
        if (searchTerm) {
            console.log(`Dispatching search for: ${searchTerm}`);
            dispatch(searchProducts(searchTerm));
        }
    }, [searchTerm, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container">
            <div className="row">
                {products.length > 0 ? (
                    products.map((product) => (
                        <SearchItem key={product.id} product={product} />
                    ))
                ) : (
                    <div>No products found</div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
