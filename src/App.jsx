import Navigationbar from "./Navigationbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import PrivacyPolicy from "./PrivacyPolicy";
import Myaccount from './Profiles/Myaccount.jsx';
import Terms from "./Terms";
import './App.css'
import Return from "./Return";
import MyAddressForm from "./Profiles/MyAddressForm.jsx";
import OrderTracking from "./Profiles/OrderTracking.jsx";
import ReturnForm from "./Profiles/ReturnForm.jsx";
import CancelTracking from "./Profiles/CancelTracking.jsx";
import MyProfile from "./Profiles/MyProfile.jsx";
import WishlistProvider from "./WishlistContext.jsx";
import Wishlist from './Wishlist.jsx'
import AddToCart from "./AddToCart.jsx";
import CartProvider from "./CartContext.jsx";
import Checkout from "./Checkout.jsx";
function App() {
   
  return (
    <> 
    <CartProvider>
    <WishlistProvider>  
     <Navigationbar/>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/returns" element={<Return />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/my-accounts" element={<Myaccount />} />
            <Route path="/address-form" element={<MyAddressForm />} />
            <Route path="/orderdetails" element={<OrderTracking />}/>
            <Route path="/return" element={<ReturnForm />}/>
            <Route path="/wishlist" element={<Wishlist />}/>
            <Route path="/addCart" element={<AddToCart />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/canceltracking" element={<CancelTracking />}/>
         </Routes>
        </WishlistProvider>
        </CartProvider>
    </>
  )
}

export default App
