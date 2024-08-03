import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchProducts } from '../Redux/Reducers/searchSlice';

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchProducts(searchTerm));
        history(`/search?term=${searchTerm}`);
    };

    return (
        <form onSubmit={handleSearch} className="d-flex" role="search">
            <input
                type="search"
                className="form-control me-2"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
