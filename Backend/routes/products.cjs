const express = require('express');
const router = express.Router();
// const { body, validationResult } = require('express-validator')
const data = require('../data/alltype.cjs');
const data2 = require('../data/sampledata.cjs')


router.get('/categories', (req, res) => {
    const uniqueCategories = [...new Set(data.products.map(product => product.category))];
    const categoriesWithDetails = uniqueCategories.map(category => {
        const product = data.products.find(p => p.category === category);
        return {
            category,
            title: product.title,
            description: product.description,
            thumbnail: product.thumbnail
        };
    });
    res.json(categoriesWithDetails);
});

router.get('/sliderimages', (req, res) => {
    const uniqueCategories = [...new Set(data2.products.map(product => product.category))];
    const categoriesWithThumbnails = uniqueCategories.map(category => {
        const productsInCategory = data2.products.filter(p => p.category === category);
        const thumbnails = productsInCategory.slice(0, 2).map(p => p.thumbnail);
        return {
            category,
            thumbnails
        };
    });
    res.json(categoriesWithThumbnails);
});

router.get('/search', (req, res) => {
    const searchTerm = req.query.term;
    const filteredProducts = data2.products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    res.json(filteredProducts);
});


router.get('/products/:category', (req, res) => {
    const category = req.params.category;
    const productsInCategory = data2.products.filter(p => p.category === category);
    const formattedProducts = productsInCategory.map(p => ({
        thumbnail: p.thumbnail,
        title: p.title,
        rating: p.rating,
        brand: p.brand,
        price: p.price,
        description: p.description,
        id: p.id
    }));
    res.json(formattedProducts);
});

router.get('/product/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(`Searching for product with id: ${id}`);
    const product = data2.products.find(p => p.id === id);
    console.log(`Product found: ${product}`);
    if (!product) {
        console.log('Product not found');
        res.status(404).json({ message: 'Product not found' });
    } else {
        console.log('Product found, sending response');
        res.json(product);
    }
});

module.exports = router