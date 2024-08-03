import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setCategoriesStatus, setCategoriesError } from '../Redux/Reducers/categoriesSlice';
import CategoryCard from '../components/CategoryCard';


const CategoryList = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);
    const status = useSelector((state) => state.categories.status);
    const error = useSelector((state) => state.categories.error);

    useEffect(() => {
        const fetchCategories = async () => {
            dispatch(setCategoriesStatus('loading'));
            try {
                const response = await fetch('http://localhost:5000/api/product/categories');
                const data = await response.json();
                dispatch(setCategories(data));
                dispatch(setCategoriesStatus('succeeded'));
            } catch (err) {
                dispatch(setCategoriesError(err.toString()));
                dispatch(setCategoriesStatus('failed'));
            }
        };

        fetchCategories();
    }, [dispatch]);

    if (status === 'loading') return <div className="text-center mt-5">Loading...</div>;
    if (status === 'failed') return <div className="alert alert-danger text-center">Error: {error}</div>;

    return (
        <div className="container mt-5">
            <div className="row">
                {categories.map(category => (
                    <CategoryCard key={category.title} category={category} />
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
