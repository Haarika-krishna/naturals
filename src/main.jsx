import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import WishlistProvider from './WishlistContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <WishlistProvider>
         <App />
         {/* <Myaccount/> */}
   </WishlistProvider>
   
  </BrowserRouter>
  </StrictMode>,
)
