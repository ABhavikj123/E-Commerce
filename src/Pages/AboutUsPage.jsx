import React from 'react';

function AboutUsPage() {
    return (
        <div className="about-us-page container mt-5">
            <header className="text-center mb-5">
                <h1>About Us</h1>
                <p className="lead">
                    Discover the story behind our leading e-commerce platform and see why we're trusted by thousands of customers worldwide.
                </p>
            </header>

            <section className="features-section mb-5">
                <h2 className="text-center mb-4">Features</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 text-center border-0 shadow-sm">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nwLfJ5Fu2hcb4xhDlgooLlHJ4nM4zn2QrA&s" alt="Fast Shipping" className="card-img-top " />
                            <div className="card-body">
                                <h5 className="card-title">Fast Shipping</h5>
                                <p className="card-text">
                                    Enjoy quick and reliable shipping on every order with our top-notch delivery partners.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 text-center border-0 shadow-sm">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHBYRGXnm_n8oPzt8TfPMpnMGpYaYDZYflw&s" alt="Wide Range of Products" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Wide Range of Products</h5>
                                <p className="card-text">
                                    Browse through our extensive collection of high-quality products at unbeatable prices.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 text-center border-0 shadow-sm">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8jJUbzdQCMtrjAAxmoz_7ba7Znttv9SILnw&s" alt="Secure Payments" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Secure Payments</h5>
                                <p className="card-text">
                                    Experience hassle-free payments with our secure and convenient payment gateway.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials-section">
                <h2 className="text-center mb-4">Testimonials</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        "I had a fantastic experience shopping here! The customer service was outstanding and the delivery was super fast."
                                    </p>
                                    <footer className="blockquote-footer">
                                    <i className=" fa-solid fa-user rounded-circle me-2"></i>
                                        John Doe, Verified Buyer
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        "The variety of products available is amazing! I found everything I was looking for and more. Highly recommended!"
                                    </p>
                                    <footer className="blockquote-footer">
                                    <i className=" fa-solid fa-user rounded-circle me-2"></i>
                                        Jane Smith, Frequent Shopper
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        "Secure payments and great support! I felt confident shopping here and will definitely be back for more."
                                    </p>
                                    <footer className="blockquote-footer">
                                    <i className=" fa-solid fa-user rounded-circle me-2"></i>
                                        Alex Johnson, Satisfied Customer
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUsPage;

