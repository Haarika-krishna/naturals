import logo from './assets/Naturals_logo.png'
import { useState, useEffect, useRef, useContext } from "react";
import Skincare from "./Skincare";
import Haircare from './Haircare';
import Babyproducts from './Babyproducts';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from "react-router-dom";
import { WishlistContext } from './WishlistContext';
import { CartContext } from './CartContext';
import Contact from './Contact';
import './Navigationbar.css';

const Navigationbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
  const [showSearchbar, setShowSearchbar] = useState(false);

  const [openSkincare, setOpenSkincare] = useState(false);
  const [openHaircare, setOpenHaircare] = useState(false);
  const [openBabyproducts, setOpenBabyproducts] = useState(false);
  const [openBestsellers, setOpenBestsellers] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const navbarRef = useRef(null);
  const searchIconRef = useRef(null);
  const {wishlist} = useContext(WishlistContext)
   const { cart} = useContext(CartContext);
  const [activePanel, setActivePanel] = useState(null);
  const [openProfile, setOpenProfile] =useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
      if (window.innerWidth > 750) {
        setIsOpen(false);
        setShowSearchbar(false);
      }
    };

    const handleClickOutside = (event) => {
      if (showSearchbar && isMobile) {
        const searchBarElement = document.querySelector('.mobile-search-bar');
        const isClickOnSearchIcon =
          searchIconRef.current && searchIconRef.current.contains(event.target);
        const isClickOnSearchBar =
          searchBarElement && searchBarElement.contains(event.target);

        if (!isClickOnSearchBar && !isClickOnSearchIcon) {
          setShowSearchbar(false);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearchbar, isMobile]);
    const navigate = useNavigate();

    const totalItems= cart.reduce((acc, item)=>{
      return acc+item.quantity;
    }, 0)

    const totalCount = wishlist.length;
   
  return (
    <>
    
      <nav className="navbar" ref={navbarRef}>
        <div className='navbar-upper-rows'>
          <div className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
            <span className="hugeicons--menu-04"></span>
          </div>

          {isMobile && (
            <div
              className="mobile-search-icon"
              onClick={() => setShowSearchbar(!showSearchbar)}
              ref={searchIconRef}
            >
              <span className="material-symbols-light--search"></span>
            </div>
          )}

          <div className="company-logo">
            <img src={logo} alt="img" onClick={()=>navigate("/")}/>
          </div>

          {!isMobile && (
            <div className='search-bar'>
              <input type='text' className='search-input' placeholder='search skin products' />
              <span className="material-symbols-light--search"></span>
            </div>
          )}

          <div className='profile-icons'>
            <div className='wishlist-wrapper' onClick={()=>navigate("wishlist")}>
               <span className="mdi-light--heart" ></span>
               {totalCount >0  && (
                 <span className="wishlist-count">{totalCount}</span>
               )}
            </div>
  

  <button className="profile-btn" onClick={()=>navigate("my-accounts")}>
    <span className="iconamoon--profile-thin"></span>
  </button>

  <div className="cart-wrapper" onClick={()=>navigate("addCart")}>
    <span className="mdi-light--cart"></span>
    {totalItems > 0 && (
      <span className="cart-count">{totalItems}</span>
    )}
  </div>
</div>
</div>
        <hr />

        {!isMobile && (
          <div className='navbar-lower-rows'>
            <a onMouseEnter={() => setActivePanel("skincare")} onMouseLeave={() => setActivePanel(null)}>Skin Care</a>
            <a onMouseEnter={() => setActivePanel("haircare")} onMouseLeave={() => setActivePanel(null)}>Hair Care</a>
            <a onMouseEnter={() => setActivePanel("babyprods")} onMouseLeave={() => setActivePanel(null)}>Baby Products</a>
            <a onMouseEnter={() => setActivePanel("bestsellers")} onMouseLeave={() => setActivePanel(null)}>Best Sellers</a>
            <a onMouseEnter={() => setActivePanel("products")} onMouseLeave={() => setActivePanel(null)}>Products</a>
            <a onClick={() => navigate("/about")}>About Us</a>
            <a onClick={() => navigate("/contact")}>Contact Us</a>
          </div>
        )}

        {/* ✅ HOVER PANELS — MOVED INSIDE NAV */}
        {!isMobile && activePanel === "skincare" && (
          <div className="hover-panel" onMouseEnter={() => setActivePanel("skincare")} onMouseLeave={() => setActivePanel(null)}>
            <Skincare />
          </div>
        )}

        {!isMobile && activePanel === "haircare" && (
          <div className="hover-panel" onMouseEnter={() => setActivePanel("haircare")} onMouseLeave={() => setActivePanel(null)}>
            <Haircare />
          </div>
        )}

        {!isMobile && activePanel === "babyprods" && (
          <div className="hover-panel" onMouseEnter={() => setActivePanel("babyprods")} onMouseLeave={() => setActivePanel(null)}>
            <Babyproducts />
          </div>
        )}

        {!isMobile && activePanel === "bestsellers" && (
          <div className="hover-panel">
            <Skincare />
          </div>
        )}

        {!isMobile && activePanel === "products" && (
          <div className="hover-panel">
            <Haircare />
          </div>
        )}

        {/* Mobile Search Bar - Appears as overlay below navbar */}
            {isMobile && showSearchbar && (
               <div className="mobile-search-bar">
                   <input
                        type="text"
                        className="search-input"
                        placeholder="search skin products"
                        autoFocus
                   />
                   <div className="search-icon-wrapper">
                     <span className="material-symbols-light--search"></span>
                   </div>
               </div>
            )}

      </nav>

      {/* MOBILE SIDEBAR — UNCHANGED */}
      {isMobile && isOpen && (
        <div className="sidebar-container active" onClick={() => setIsOpen(false)}>
          <div className="sidebar active" onClick={(e) => e.stopPropagation()}>
            <div className="sidebar-header">
              <img src={logo} alt="img" />
              <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
            </div>

            <div className="sidebar-links">
              {/* your existing sidebar code remains exactly same */}
              <label className="each-link skincare-link">
                     <a
                       href="#skincare"
                       onClick={(e) => {
                         e.preventDefault(); // prevent navigation
                        setOpenSkincare(!openSkincare);
                      }}
                      >
                         Skin Care
                             </a>
                    
                         <NavigateNextIcon
                          fontSize="large"
                             className={`arrow ${openSkincare ? "rotate" : ""}`}
                          onClick={(e) => {
                          e.preventDefault();
                            setOpenSkincare(!openSkincare);
                         }}
                      />
                 </label>

                  {openSkincare && (
                      <div className="inner-links">
                     <a href="#serum">Facial Serums</a>
                      <a href="#moisturizer">Face Moisturizer</a>
                      <a href="#facecream">Face Creams</a>
                      <a href="#facewash">Face wash</a>
                      <a href="#facepack">Face Pack</a>
                        <a href="#hydratinggels">Hydrating Gels</a>
                        <a href="#sunprotection">Sun Protection (SPF)</a>
                        <a href="#eyecare">Eye Care</a>
                        <a href="#lipbalm">Lip Balm</a>
                    </div>
                   )}

                <label className='each-link haircare-link'>
                  <a href="#haircare"
                   onClick={(e) => {
                    e.preventDefault();
                    setOpenHaircare(!openHaircare)}}>Hair Care</a>
                   <NavigateNextIcon fontSize="large"
                   className={`arrow ${openHaircare ? "rotate":""}`}
                   onClick={(e)=>{
                    e.preventDefault();
                    setOpenHaircare(!openHaircare);
                   }}/>
                </label>
                {openHaircare && (
                  <div className='inner-links'>
                   <a href="#serum">Hair Shampoo</a>
                      <a href="#moisturizer">Conditioners</a>
                      <a href="#facecream">Hair Oils</a>
                      <a href="#facewash">Hair Serum</a>
                      <a href="#facepack">Hair Mask</a>
                        <a href="#hydratinggels">Dandruff hair pack</a>
                        
                  </div> 
                )}
                <label className='each-link'>
                  <a href="#babyproducts"
                   onClick={(e) => {
                    e.preventDefault();
                    setOpenBabyproducts(!openBabyproducts)}}>Baby Products</a>
                  <NavigateNextIcon fontSize="large"
                   className={`arrow ${openBabyproducts ? "rotate":""}`}
                   onClick={(e)=>{
                    e.preventDefault();
                    setOpenBabyproducts(!openBabyproducts);
                   }}/>
                </label>
                {openBabyproducts && (
                  <div className='inner-links'>
                   <a href="#serum">Baby body lotions</a>
                      <a href="#moisturizer">Conditioners</a>
                      <a href="#facecream">Baby hair oils</a>
                      <a href="#facewash">Baby Soap</a>
                        
                  </div> 
                )}
                <label className='each-link'>
                 <a
                       href="#bestsellers"
                       onClick={(e) => {
                         e.preventDefault(); // prevent navigation
                        setOpenBestsellers(!openBestsellers);
                      }}
                      >Best Sellers</a>
                 <NavigateNextIcon
                          fontSize="large"
                             className={`arrow ${openBestsellers ? "rotate" : ""}`}
                          onClick={(e) => {
                          e.preventDefault();
                           setOpenBestsellers(!openBestsellers);
                         }}
                      />
                </label>
                {openBestsellers && (
                      <div className="inner-links">
                     <a href="#serum">Facial Serums</a>
                      <a href="#moisturizer">Face Moisturizer</a>
                      <a href="#facecream">Face Creams</a>
                      <a href="#facewash">Face wash</a>
                      <a href="#facepack">Face Pack</a>
                        <a href="#hydratinggels">Hydrating Gels</a>
                        <a href="#sunprotection">Sun Protection (SPF)</a>
                        <a href="#eyecare">Eye Care</a>
                        <a href="#lipbalm">Lip Balm</a>
                    </div>
                   )}
                <label className='each-link'>
                  <a href="#products"
                   onClick={(e) => {
                    e.preventDefault();
                    setOpenProducts(!openProducts)}}>Products</a>
                  <NavigateNextIcon fontSize="large"
                   className={`arrow ${openProducts ? "rotate":""}`}
                   onClick={(e)=>{
                    e.preventDefault();
                    setOpenProducts(!openProducts);
                   }}/>
                </label>
                {openProducts && (
                  <div className='inner-links'>
                   <a href="#serum">Hair Shampoo</a>
                      <a href="#moisturizer">Conditioners</a>
                      <a href="#facecream">Hair Oils</a>
                      <a href="#facewash">Hair Serum</a>
                      <a href="#facepack">Hair Mask</a>
                        <a href="#hydratinggels">Dandruff hair pack</a>
                        
                  </div> 
                )}
                <label className='each-link'>
                  <a href="#about"
                   onClick={(e) => {
                    e.preventDefault();
                    setOpenAbout(!openAbout)}}>About Us</a>
                  <NavigateNextIcon fontSize="large"
                   className={`arrow ${openAbout ? "rotate":""}`}
                   onClick={(e)=>{
                    e.preventDefault();
                    setOpenAbout(!openAbout);
                   }}/>
                </label>
                {openAbout && (
                  <div className='inner-links'>
                   <a href="#serum">Baby body lotions</a>
                      <a href="#moisturizer">Conditioners</a>
                      <a href="#facecream">Baby hair oils</a>
                      <a href="#facewash">Baby Soap</a>
                        
                  </div> 
                )}
                <label className='each-link haircare-link'>
                  <a href="#contact"
                   onClick={(e) => {
                    e.preventDefault();
                    setOpenContact(!openContact)}}>Contact Us</a>
                   <NavigateNextIcon fontSize="large"
                   className={`arrow ${openContact ? "rotate":""}`}
                   onClick={(e)=>{
                    e.preventDefault();
                    setOpenContact(!openContact);
                   }}/>
                </label>
                {openContact && (
                  <div className='inner-links'>
                   <a href="#serum">Hair Shampoo</a>
                      <a href="#moisturizer">Conditioners</a>
                      <a href="#facecream">Hair Oils</a>
                      <a href="#facewash">Hair Serum</a>
                      <a href="#facepack">Hair Mask</a>
                        <a href="#hydratinggels">Dandruff hair pack</a>
                        
                  </div> 
                )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigationbar;
