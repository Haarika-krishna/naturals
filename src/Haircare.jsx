import skincare_img from './assets/Haircare-img1.png';
import skincare_1 from './assets/skincare-img-1.png';
import skincare_2 from './assets/skincare-img-2.png';
import skincare_3 from './assets/skincare-img-3.png';
import skincare_4 from './assets/skincare-img-4.png';
import skincare_5 from './assets/skincare-img-5.png';
import skincare_6 from './assets/skincare-img-6.png';
import skincare_7 from './assets/skincare-img-7.png';
import skincare_8 from './assets/skincare-img-8.png';
import third_img1 from './assets/skincare-third-img-1.png';
import third_img2 from './assets/skincare-third-img-2.png';
import third_img3 from './assets/skincare-third-img-3.png';
import StarIcon from '@mui/icons-material/Star';
import { useState, useRef, useEffect } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Skincare.css';

const Haircare = () => {
    const [selected, setSelected] = useState("All");
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);


  return (
    <div className="skincare-panel">
      <div className="first-division">
        
        <div className="shop-category-cont">
          <p>Shop by category</p>
          <hr />

          <div className="details-division">
            <div className="left-section">
              <a href="#">Hair Shampoo</a>
              <a href="#">Conditioners</a>
              <a href="#">Hair Oils</a>
              <a href="#">Hair Serums</a>
            </div>

            <div className="right-section">
              <a href="#">Hair Mask</a>
              <a href="#">Dandruff hair pack</a>
            </div>
          </div>
        </div>

        <div className="shop-category-image">
          <img src={skincare_img} alt="Skincare" />
        </div>

      </div>
      {/* <div className='second-section'>
            <div className='images-container'>
                <div className='image-division'>
                    <img src={skincare_1} alt="img" />
                    <p>Serum</p>
                </div>
                <div className='image-division'>
                    <img src={skincare_2} alt="img" />
                    <p>Face Cream</p>
                </div>
                <div className='image-division'>
                   <img src={skincare_3} alt="img" />
                   <p>Face Wash</p>
                </div>
               <div className='image-division'>
                    <img src={skincare_4} alt="img" />
                    <p>Face Pack</p>
               </div>
               <div className='image-division'>
                    <img src={skincare_5} alt="img" />
                    <p>Face Gel</p>
               </div>
              <div className='image-division'>
                   <img src={skincare_6} alt="img" />
                   <p>Sun Screen</p>
              </div>
              <div className='image-division'>
                  <img src={skincare_7} alt="img" />
                  <p>Eye Cream</p>
              </div>
               <div className='image-division'>
                 <img src={skincare_8} alt="img" />
                 <p>Lip balm</p>
               </div>
               
            </div>
      </div>
      <div className='above-third-section'>
       <div className='dropdown-div'>
           <div className="filter-dropdown" ref={dropdownRef}>
                <button
                  className="filter-btn"
                  onClick={() => setOpen(!open)}
                >
                 {selected}
                  <span className={`arrow ${open ? "rotate" : ""}`}><ExpandMoreIcon/></span>
               </button>

            {open && (
                <div className="filter-menu">
                {[
                   "All",
                   "Best Sellers",
                   "New",
                   "Top Rated",
                   "Low to High",
                   "High to Low",
                   "Most Popular"
                 ].map((item) => (
                   <div
                     key={item}
                     className="filter-item"
                     onClick={() => {
                     setSelected(item);
                     setOpen(false);
                      }}
                    >
                   {item}
                   </div>
                ))}
                    </div>
              )}
           </div>
         </div>
      </div>
      <div className='third-section'>
        
         <div className='products-container'>
            <div className='filters-div'>
                <div className='filters-header'>
                    <p>Filters</p>
                   <span class="system-uicons--filtering"></span>
                </div>
                <hr />
                <div className="filter-group">
                      <label className="checkbox-row">
                       <span>Women</span>
                      <input type="checkbox" />
                     </label>

                     <label className="checkbox-row">
                        <span>Men</span>
                        <input type="checkbox" />
                    </label>

                    <label className="checkbox-row">
                         <span>Baby</span>
                        <input type="checkbox" />
                    </label>
                </div>
             
            </div>
            <div className='products-div'>
                <div className='hm-product-info'>
                     <img src={third_img1} alt="img" />
                     <h3>Anti-aging serum</h3>
                     <div className="rating-line">
                         <div className="rating">
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                          </div>
                        <p>223 reviews</p>
                     </div>
                     
                     <div className='span-tags'>
                        <span>₹949</span>
                        <span><s>1299</s></span>
                        <span>16% off</span>
                     </div>
                     <div className='cart-btn'>
                        <button>Add to cart</button>
                        <div className='heart-div'>
                          <span className="codicon--heart"></span> 
                        </div>
                     </div>
                   </div>
                   <div className='hm-product-info'>
                     <img src={third_img2} alt="img" />
                     <h3>Anti-aging serum</h3>
                     <div className="rating-line">
                         <div className="rating">
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                          </div>
                        <p>223 reviews</p>
                     </div>
                     
                     <div className='span-tags'>
                        <span>₹949</span>
                        <span><s>1299</s></span>
                        <span>16% off</span>
                     </div>
                     <div className='cart-btn'>
                        <button>Add to cart</button>
                        <div className='heart-div'>
                          <span className="codicon--heart"></span> 
                        </div>
                     </div>
                   </div>
                   <div className='hm-product-info'>
                     <img src={third_img3} alt="img" />
                     <h3>Anti-aging serum</h3>
                     <div className="rating-line">
                         <div className="rating">
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                          </div>
                        <p>223 reviews</p>
                     </div>
                     
                     <div className='span-tags'>
                        <span>₹949</span>
                        <span><s>1299</s></span>
                        <span>16% off</span>
                     </div>
                     <div className='cart-btn'>
                        <button>Add to cart</button>
                        <div className='heart-div'>
                          <span className="codicon--heart"></span> 
                        </div>
                     </div>
                   </div>
            </div>
         </div>
        </div>
     */}
    
    
    </div>
  );
};

export default Haircare;
