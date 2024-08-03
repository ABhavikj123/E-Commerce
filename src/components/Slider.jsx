import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSliderImages } from '../Redux/Reducers/sliderSlice';
import './Slider.css';

const Slider = () => {
    const dispatch = useDispatch();
    const images = useSelector((state) => state.slider.images);
    const status = useSelector((state) => state.slider.status);
    const error = useSelector((state) => state.slider.error);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        dispatch(fetchSliderImages());
    }, [dispatch]);

    useEffect(() => {
        if (images.length > 0) {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [images]);

    const handleImageClick = (category) => {
        window.location.href = `http://localhost:5000/products/${category}`;
    };

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div className="alert alert-danger">{error}</div>;

    return (
        <div id="slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div className={`carousel-item ${index === activeIndex ? 'active' : ''}`} key={index}>
                        <img
                            className="d-block w-100 slider-img"
                            src={image.url}
                            alt={`Slide ${index}`}
                            onClick={() => handleImageClick(image.category)}
                        />
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Slider;
