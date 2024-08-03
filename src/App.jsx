import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage'
import AboutUsPage from './Pages/AboutUsPage'
import ContactUsPage from './Pages/ContactUsPage'
import Footer from './components/Footer'
import CategoryList from './Pages/CategoryList'
import ProductList from './Pages/ProductList'
import ScrollToTopButton from './components/ScrollToTop'
import ProductViewPage from './Pages/ProductViewPage'
import CartPage from './Pages/CartPage'
import CheckoutPage from './Pages/CheckoutPage'
import OrderConfirmationPage from './Pages/OrderConfirmationPage'
import SearchPage from './Pages/SearchPage'
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/about' element={<AboutUsPage />} />
          <Route exact path='/contact' element={<ContactUsPage />} />
          <Route path="/" element={<CategoryList />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path='/product/:id' element={<ProductViewPage/>}/>
          <Route path='/addtocard' element={<CartPage/>} />
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/orderconfirmation' element={<OrderConfirmationPage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
        </Routes>
        <Footer />
      </Router>
      <ScrollToTopButton/>
    </>
  )
}

export default App
