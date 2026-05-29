import {useState} from 'react';
import './Home.css'
import group from './assets/Group.png';
import lines from './assets/Lines.png';
import image_1 from './assets/first-sec-img-1.png';
import image_2 from './assets/first-sec-img-2.png';
import image_3 from './assets/first-sec-img-3.png';
import image_4 from './assets/first-sec-img-4.png';
import image_5 from './assets/first-sec-img-5.png';
import image_6 from './assets/first-sec-img-6.png';
import image_7 from './assets/first-sec-img-7.png';
import image_8 from './assets/first-sec-img-8.png';
import image_9 from './assets/first-sec-img-9.png';
import image_10 from './assets/first-sec-img-10.png';
import image_11 from './assets/first-sec-img-11.png';
import image_12 from './assets/first-sec-img-12.png';
import image_13 from './assets/first-sec-img-13.png';
import image_14 from './assets/first-sec-img-14.png';
import image_15 from './assets/first-sec-img-15.png';
import third_sec_img from './assets/third-sec-img.png';
import four_img_1 from './assets/fourth-sec-img-1.png';
import four_img_2 from './assets/fourth-sec-img-2.png';
import four_img_3 from './assets/fourth-sec-img-3.png';
import fifth_img_1 from './assets/fifth-sec-img-1.png';
import fifth_img_2 from './assets/fifth-sec-img-2.png';
import fifth_img_3 from './assets/fifth-sec-img-3.png';
import fifth_img_4 from './assets/fifth-sec-img-4.png';
import fifth_img_5 from './assets/fifth-sec-img-5.png';
import fifth_img_6 from './assets/fifth-sec-img-6.png';
import fifth_img_7 from './assets/fifth-sec-img-7.png';
import sixth_img_2 from './assets/sixth-img-2.png';
import seven_img_1 from './assets/seventh-img-1.png';
import seven_img_2 from './assets/seventh-img-2.png';
import seven_img_3 from './assets/seventh-img-3.png';
import seven_img_4 from './assets/seventh-img-4.png';
import seven_img_5 from './assets/seventh-img-5.png';
import seven_img_6 from './assets/seventh-img-6.png';
import eight_img_1 from './assets/eight-img-1.png';
import eight_img_2 from './assets/eight-img-2.png';
import eight_img_3 from './assets/eight-img-3.png';
import eight_img_4 from './assets/eight-img-4.png';
import eight_img_5 from './assets/eight-img-5.png';
import eight_img_6 from './assets/eight-img-6.png';
import eight_img_7 from './assets/eight-img-7.png';
import ninth_img_1 from './assets/ninth-img-1.png';
import ninth_img_2 from './assets/ninth-img-2.png';
import ninth_img_3 from './assets/ninth-img-3.png';
import ninth_img_4 from './assets/ninth-img-4.png';
import ninth_img_5 from './assets/ninth-img-5.png';
import ninth_img_6 from './assets/ninth-img-6.png';
import eleven_row1_img1 from './assets/eleven-row-img-1.png';
import eleven_row1_img2 from './assets/eleven-row-img-2.png';
import eleven_row1_img3 from './assets/eleven-row-img-3.png';
import eleven_row1_img4 from './assets/eleven-row-img-4.png';
import story_img from './assets/Story_image.png';
import perfect_match from './assets/perfect_match.png';
import gpay from './assets/Gpay.png';
import bhim from './assets/bhimupi.png';
import visa from './assets/visa.png';
import mastercard from './assets/mastercard.png';
import paytm from './assets/Paytm.png';
import logo from './assets/Naturals_logo.png'
import eleven_row2_img1 from './assets/eleven_row2_img1.png';
import eleven_row2_img2 from './assets/eleven_row2_img2.png';
import eleven_row2_img3 from './assets/eleven_row2_img3.png';
import eleven_row2_img4 from './assets/eleven_row2_img4.png';
import eleven_row2_img5 from './assets/eleven_row2_img5.png';
import sixth_image from './assets/sixth_image.png';
import StarIcon from '@mui/icons-material/Star';
import Navigationbar from './Navigationbar';
import Contact from './Contact';
import Footer from './Footer';
import Skincare from './Skincare';
import { useContext } from "react";
import { WishlistContext } from "./WishlistContext";
import { CartContext} from "./CartContext"

const Home = () => {
   const {wishlist, toggleWishlist} =useContext(WishlistContext);

   const { cart, dispatch } = useContext(CartContext);

   const fourthProducts = [
                { img: four_img_1, name: "Skin Care" },
                { img: four_img_2, name: "Hair Care" },
                { img: four_img_3, name: "Baby Care" }
               ];

   const fifthProducts = [ {  id: 1, img: fifth_img_1, name: "Anti-aging serum", price: 949, oldPrice: 1299, discount: "16% off", reviews: "223 reviews", quantity: 1},
                         {  id: 2, img: fifth_img_2, name: "Revitalizing Cleanser", price: 499, reviews: "415 reviews"  },
                         {  id: 3, img: fifth_img_3, name: "Silken Touch Serum", price: 899, oldPrice: 1099, discount: "20% off", reviews: "250 reviews", quantity: 1},
                         {  id: 4, img: fifth_img_4, name: "Silky Hair Serum", price: 869, oldPrice: 1099, discount: "23% off", reviews: "259 reviews" , quantity: 1},
                         { id: 5, img: fifth_img_5, name: "Hair Fall control oil", price: 565, oldPrice: 1799, discount: "69% off", reviews: "60 reviews", quantity: 1 },
                         { id: 6, img: fifth_img_6, name: "Vitamin C Skin whiting serum", price: 488, oldPrice: 500, discount: "3% off", reviews: "550 reviews", quantity: 1 },
                         { id: 7, img: fifth_img_7, name: "Lactic acid 10% serum", price: 600, reviews: "1k reviews", quantity: 1 }
                        ];
         
    const eightProducts = [{ id: 1, img: image_1,  name: "Night Cream with Lavender",  price: 999,  oldPrice: 1299,  discount: "12% off",  reviews: 223, quantity: 1 },
                           {  id: 2,  img: eight_img_2,  name: "Dark circles and Under eye cream",  price: 999,  oldPrice: 1299,  discount: "12% off",  reviews: 223, quantity: 1 },
                           {  id: 3,  img: eight_img_3,  name: "Skin brightening face pack",  price: 999,  oldPrice: 1299,  discount: "12% off",  reviews: 223, quantity: 1 },
                           {  id: 4,  img: eight_img_4,  name: "Kumkumadi face gel",  price: 999,  oldPrice: 1299,  discount: "12% off",  reviews: 223, quantity: 1 },
                           {  id: 5,  img: eight_img_5,  name: "Acne Face Serum",  price: 999,  oldPrice: 1299,  discount: "12% off",  reviews: 223, quantity: 1 },
                           {  id: 6,  img: eight_img_6,  name: "Aloevera gel for face",  price: 999,  oldPrice: 1299,  discount: "12% off",  reviews: 223, quantity: 1 },
                           {  id: 7,  img: eight_img_7,  name: "Detan cream with honey and milk",  price: 999,  oldPrice: 1299,  discount: "12% off",  reviews: 223, quantity: 1 }
                          ];
    const ninthProducts = [{  id: 1,  img: image_1,  name: "Herbal Shampoo",  price: 999,  oldPrice: 1299,  discount: "12% off",  reviews: 223, quantity: 1 },
                           {  id: 2,  img: ninth_img_2,  name: "Hair Regrowth Serum",  price: 999,  oldPrice: 1299,  discount: "12% off",  reviews: 223, quantity: 1 },
                           {  id: 3,  img: ninth_img_3,  name: "Sulphate Free Shampoo",  price: 999,  oldPrice: 1299,  discount: "12% off",  reviews: 223, quantity: 1  },
                           {  id: 4,  img: ninth_img_4,  name: "Anti freezy hair Serum Unisex",  price: 999,  oldPrice: 1299,  discount: "12% off",  reviews: 223, quantity: 1 },
                           {  id: 5, img: ninth_img_5,  name: "Anti dandruff hair pack",  price: 999,  oldPrice: 1299,  discount: "12% off",  reviews: 223, quantity: 1 },
                           {  id: 6,  img: ninth_img_6,  name: "Shampoo with conditioners",  price: 999,  oldPrice: 1299,  discount: "12% off",  reviews: 22, quantity: 1  }
                          ];

    return(
        <>
         <div className='main-body-container'>
        
         
        <div className='first-container'>
          <img src={lines} alt="lines" className='top-left'/>
          <img src={group} alt="lines" className='top-right'/> 
          <img src={group} alt="lines" className='bottom-left'/>
          <img src={lines} alt="lines" className='bottom-right'/>
             <h1>Crafted with Nature’s Wisdom, Made for Everyday Rituals.</h1>
             <p>Explore naturally made solutions for every skin type.</p>
             
              <div className='first-img-wrapper'>
               <div className="first-img-track">
                  <img src={image_1} alt="img-1" className='mrgn-btm'/>
                  <img src={image_2} alt="img-1" className='mrgn-up'/>
                  <img src={image_3} alt="img-1" className='mrgn-btm'/>
                  <img src={image_4} alt="img-1" className='mrgn-up'/>
                  <img src={image_5} alt="img-1" className='mrgn-btm'/>
                  <img src={image_6} alt="img-1" className='mrgn-up'/>
                  <img src={image_7} alt="img-1" className='mrgn-btm'/>
                  <img src={image_8} alt="img-1" className='mrgn-up'/>
                  <img src={image_9} alt="img-1" className='mrgn-btm'/>
                  <img src={image_10} alt="img-1" className='mrgn-up'/>
                  <img src={image_11} alt="img-1" className='mrgn-btm'/>
                  <img src={image_12} alt="img-1" className='mrgn-up'/>
                  <img src={image_13} alt="img-1" className='mrgn-btm'/>
                  <img src={image_14} alt="img-1" className='mrgn-up'/>
                  <img src={image_15} alt="img-1" className='mrgn-btm'/>

                  {/* duplicate images */}
                   <img src={image_1} alt="img-1" className='mrgn-up'/>
                  <img src={image_2} alt="img-1" className='mrgn-btm'/>
                  <img src={image_3} alt="img-1" className='mrgn-up'/>
                  <img src={image_4} alt="img-1" className='mrgn-btm'/>
                  <img src={image_5} alt="img-1" className='mrgn-up'/>
                  <img src={image_6} alt="img-1" className='mrgn-btm'/>
                  <img src={image_7} alt="img-1" className='mrgn-up'/>
                  <img src={image_8} alt="img-1" className='mrgn-btm'/>
                  <img src={image_9} alt="img-1" className='mrgn-up'/>
                  <img src={image_10} alt="img-1" className='mrgn-btm'/>
                  <img src={image_11} alt="img-1" className='mrgn-up'/>
                  <img src={image_12} alt="img-1" className='mrgn-btm'/>
                  <img src={image_13} alt="img-1" className='mrgn-up'/>
                  <img src={image_14} alt="img-1" className='mrgn-btm'/>
                  <img src={image_15} alt="img-1" className='mrgn-up'/>

              </div>    
             </div> 
             
        </div>
        <div className='second-container'>
            <div className='data'>
              <h1>20+</h1>
              <p>Years of Clean Beauty</p>
            </div>
             <div className='data'>
              <h1>100%</h1>
              <p>Eco-Friendly Packaging</p>
            </div>
             <div className='data'>
              <h1>10k+</h1>
              <p>Happy Customers</p>
            </div>
        </div>
        <div className='third-section'>
            <div className='left-img'>
              <img src={third_sec_img} alt="third-img" />
            </div>
            <div className='right-content'>
                 <h2>Ayurvedic roots, modern care,  deeply natural nourishment</h2>
                 <div className='icons-container'>
                  <div className='hm-circle-cont'>
                    <div>
                       <span className="hugeicons--natural-food"></span>
                    </div>
                    <p>Naturally made</p>
                  </div>
                  <div className='hm-circle-cont'>
                    <div>
                     <span className="ion--eyedrop-outline"></span>
                    </div>
                    <p>Gentle formula</p>
                  </div>
                  <div className='hm-circle-cont'>
                    <div>
                       <span className="streamline-ultimate--hair-skin"></span>
                    </div>
                    <p>For all  skin types</p>
                  </div>
                 </div>
            </div>
        </div>
      <div className='fourth-section'>
                 <div className="fourth-img-section">

                   {fourthProducts.map((item, index) => (
                    <div key={index} className="img-box">
                      <img src={item.img} alt="img" />
                      <p className='img-text'>{item.text}</p>
                    </div>
                   ))}

                  </div>
      </div>
<div className='five-section'>
  <div className='view-all'>
    <p>Our best Sellers</p>
    <span>view all</span>
  </div>

  <div className='fifth-image-container'>

    {fifthProducts.map((product) => {

      const isWishlisted = wishlist.some(
        (item) => item.id === product.id
      );
      const isAdded = cart.some(item => item.id === product.id);

      return (
        <div key={product.id} className='hm-product-info'>
          <img src={product.img} alt="img" />
          <span className='bestseller'>Bestseller</span>

          <h3>{product.name}</h3>

          <div className="rating-line">
            <div className="rating">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p>{product.reviews}</p>
          </div>

          <div className='span-tags'>
            <span>₹{product.price}</span>

            {product.oldPrice && (
              <span><s>{product.oldPrice}</s></span>
            )}

            {product.discount && (
              <span>{product.discount}</span>
            )}
          </div>
          
          <div  className='cart-btn' onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            <button>Add to cart</button>

            <div
              className={`heart-div ${isWishlisted ? "active-heart" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(product)}}
            >
              <span className="codicon--heart"></span>
            </div>

          </div>
        </div>
      );

    })}

  </div>
</div>

        <div className='sixth-section'>
         <div className='slides auto-slider'>
      
         <div className='slide first-img-cont'>
              <img src={sixth_img_2} alt="img" />
              <div className='left-section'>
                   <p></p>
              </div>
              <div className='right-section'>
                 <h3>Bye Toxins, Hello Glow!</h3>
                 <p className='text-1'>All-natural skincare you’ll feel good about</p>
                 <p className='text-2'>Up to 30% off!</p>
                 <button className='shop-now'>shop now</button>
              </div>
         </div>
          <div className='slide second-img-cont'>
              
              <div className='left-section'>
                  <img src={sixth_image} alt="img" />
              </div>
              <div className='right-section'>
                 <h3>Every Drop, Pure Magic.</h3>
                 <p>Crafted with nature’s finest our nourishing formula flows with glow, care, and purity in every drop.</p>
               
              </div>
         </div>
        
        </div>  
      </div>

        <div className='seventh-section'>
         <div className='view-all'>
              <p>Shop by Concern</p>
              <span>view all </span>
         </div>
         
          <div className='seventh-img-container'>
             <div className='concern-container'>
                <img src={seven_img_1} alt="img" />
                <p>Acne Control</p>
             </div>
             <div className='concern-container'>
                <img src={seven_img_2} alt="img" />
                <p>Hair Fall</p>
             </div>
             <div className='concern-container'>
                <img src={seven_img_3} alt="img" />
                <p>Oiliness</p>
             </div>
             <div className='concern-container'>
                <img src={seven_img_4} alt="img" />
                <p>Dandruff</p>
             </div>
             <div className='concern-container'>
                <img src={seven_img_5} alt="img" />
                <p>Uneven Skin Tone</p>
             </div>
             <div className='concern-container'>
                <img src={seven_img_6} alt="img" />
                <p>Dark Circles</p>
             </div>
            {/* duplicates */}
            <div className='concern-container'>
                <img src={seven_img_1} alt="img" />
                <p>Acne Control</p>
             </div>
             <div className='concern-container'>
                <img src={seven_img_2} alt="img" />
                <p>Hair Fall</p>
             </div>
             <div className='concern-container'>
                <img src={seven_img_3} alt="img" />
                <p>Oiliness</p>
             </div>
             <div className='concern-container'>
                <img src={seven_img_4} alt="img" />
                <p>Dandruff</p>
             </div>
             <div className='concern-container'>
                <img src={seven_img_5} alt="img" />
                <p>Uneven Skin Tone</p>
             </div>
             <div className='concern-container'>
                <img src={seven_img_6} alt="img" />
                <p>Dark Circles</p>
             </div>
          </div>
        </div>

        <div className='eight-section'>
                 <div className='view-all'>
                    <p>Everyday glow</p>
                    <span>view all</span>
                  </div>

  <div className='eight-image-container'>

    {eightProducts.map((product)=>{
      const isWishlisted = wishlist.some((item)=>
            item.id === product.id
      );
      return (
        <div key={product.id} className='eight-product-info'>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>

        <div className="rating-line">
          <div className="rating">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p>{product.reviews} reviews</p>
        </div>

        <div className='span-tags'>
          <span>₹{product.price}</span>
          <span><s>{product.oldPrice}</s></span>
          <span>{product.discount}</span>
        </div>

        <div className='cart-btn'  onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
          <button>Add to cart</button>
          <div className={`heart-div ${isWishlisted ? "active-heart" : ""}`}
              onClick={() => toggleWishlist(product)}>
            <span className="codicon--heart"></span>
          </div>
        </div>
      </div>
      )
    })}
  </div>
</div>
       <div className='ninth-section'>
  <div className='view-all'>
    <p>Gentle Hair Love</p>
    <span>view all</span>
  </div>

  <div className='ninth-image-container'>

    {
      ninthProducts.map((product)=>{
        const isWishlisted = wishlist.some((item)=>
              item.id === product.id
        );
        return(
          <div key={product.id} className='hm-nine-product-info'>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>

        <div className="rating-line">
          <div className="rating">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p>{product.reviews} reviews</p>
        </div>

        <div className='span-tags'>
          <span>₹{product.price}</span>
          <span><s>{product.oldPrice}</s></span>
          <span>{product.discount}</span>
        </div>

        <div className='cart-btn' onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
          <button>Add to cart</button>
          <div className={`heart-div ${isWishlisted ? "active-heart" : ""}`}
              onClick={() => toggleWishlist(product)}>
            <span className="codicon--heart"></span>
          </div>
        </div>
      </div>
        )
      })
    }
  </div>
</div>
        <div className='tenth-section'>
          <div className='tenth-container'>
              <div className='left-img-section'>
                   <img src={story_img} alt="" />
              </div>
              <div className='right-cont-section'>
                <h2>Our Story</h2>
                 <p>Earthinaturals started as a promise to care for my family with pure, natural ingredients. I wanted clean, gentle products that were hard to find. I sought honesty, simplicity, and safety in what touched our skin and hair. I began crafting homemade blends with plant-based ingredients and traditional remedies. What started as a labor of love grew into a mission to share. Earthinaturals was born from a home, believing everyone deserves beauty that’s honest and wholesome. Every product reflects that care: pure formulations, thoughtful sourcing, and earth-conscious choices.</p>
                 <button className='about-btn'>About our brand <span className="mynaui--arrow-right"></span></button>
              </div>
          </div>
              
        </div>
         <div className='heading-container'>
            <h1>Real stories, real results.</h1>
            <p>Our products gently care for your skin and are made with natural, eco-friendly ingredients so they’re just as kind to the Earth as they are to you.</p>
         </div>
        <div className='eleven-section'> 
           <div className='eleven-container'>
           
              <div className='upper-section'>
                  <div className='reviews-card'>
                      <img src={eleven_row1_img1} alt="img" />
                      <div className='review-content'>
                          <h3>For Face Cream</h3>
                           <div className="rating">
                       ★ ★ ★ ★ ★
                     </div>
                          <h3 className='names'>Riya.D</h3>
                          <p>“Gives me a natural glow every morning. Love how light and fresh it feels”</p>
                      </div>
                  </div>
                  <div className='reviews-card'>
                      <img src={eleven_row1_img2} alt="img" />
                      <div className='review-content'>
                          <h3>Brightening Face Cream</h3>
                          <div className="rating">
                       ★ ★ ★ ★ ★
                     </div>
                          <h3 className='names'>Riya.M</h3>
                          <p>“This cream gives my face such a radiant glow without feeling heavy. Love that it's all natural”</p>
                      </div>
                  </div>
                  <div className='reviews-card'>
                      <img src={eleven_row1_img3} alt="img" />
                      <div className='review-content'>
                          <h3>Rose Lip Balm</h3>
                          <div className="rating">
                       ★ ★ ★ ★ ★
                     </div>
                          <h3 className='names'>Tanve.G</h3>
                          <p>“Smells like fresh roses and keeps my lips soft all day. I carry it everywhere”</p>
                      </div>
                  </div>
                  <div className='reviews-card'>
                      <img src={eleven_row1_img4} alt="img" />
                      <div className='review-content'>
                          <h3>SPF 45 PA+++ Sunscreen</h3>
                          <div className="rating">
                       ★ ★ ★ ★ ★
                     </div>
                          <h3 className='names'>Aarav.S</h3>
                          <p>“Non-sticky and super light! Finally found a sunscreen that works for Indian skin without white cast.”</p>
                      </div>
                  </div>
                  {/* Duplicates */}
                  <div className='reviews-card'>
                      <img src={eleven_row1_img1} alt="img" />
                      <div className='review-content'>
                          <h3>For Face Cream</h3>
                          <div className="rating">
                       ★ ★ ★ ★ ★
                     </div>
                          <h3  className='names'>Riya.D</h3>
                          <p>“Gives me a natural glow every morning. Love how light and fresh it feels”</p>
                      </div>
                  </div>
                  <div className='reviews-card'>
                      <img src={eleven_row1_img2} alt="img" />
                      <div className='review-content'>
                          <h3>Brightening Face Cream</h3>
                          <div className="rating">
                       ★ ★ ★ ★ ★
                     </div>
                          <h3  className='names'>Riya.M</h3>
                          <p>“This cream gives my face such a radiant glow without feeling heavy. Love that it's all natural”</p>
                      </div>
                  </div>
                  <div className='reviews-card'>
                      <img src={eleven_row1_img3} alt="img" />
                      <div className='review-content'>
                          <h3>Rose Lip Balm</h3>
                          <div className="rating">
                       ★ ★ ★ ★ ★
                     </div>
                          <h3  className='names'>Tanve.G</h3>
                          <p>“Smells like fresh roses and keeps my lips soft all day. I carry it everywhere”</p>
                      </div>
                  </div>
                  <div className='reviews-card'>
                      <img src={eleven_row1_img4} alt="img" />
                      <div className='review-content'>
                          <h3>SPF 45 PA+++ Sunscreen</h3>
                          <div className="rating">
                       ★ ★ ★ ★ ★
                     </div>
                          <h3  className='names'>Aarav.S</h3>
                          <p>“Non-sticky and super light! Finally found a sunscreen that works for Indian skin without white cast.”</p>
                      </div>
                  </div>
              </div>
           </div>
        </div>
        <div  className='eleven-lower-section'>
          <div className='eleven-lower-container'>
             <div className='lower-section'>
                  <div className='reviews-card'>
                      <img src={eleven_row2_img1} alt="img" />
                      <div className='review-content'>
                          <h3>For Brightening Hair Serum</h3>
                          <div className="rating">
                       ★ ★ ★ ★ ★
                     </div>
                          <h3 className='names'>Megha R.</h3>
                          <p>My hair feels so soft and shiny after just a week! Love how lightweight and non-sticky it is.</p>
                      </div>
                  </div>
                  <div className='reviews-card'>
                      <img src={eleven_row2_img2} alt="img" />
                      <div className='review-content'>
                          <h3>Baby Body Lotion</h3>
                          <div className="rating"> 
                       ★ ★ ★ ★ 
                     </div>
                          <h3 className='names'>Pooja. D</h3>
                          <p>“So gentle and moisturizing for my baby’s skin. No rashes, no dryness. A must have”</p>
                      </div>
                  </div>
                  <div className='reviews-card'>
                      <img src={eleven_row2_img3} alt="img" />
                      <div className='review-content'>
                          <h3>Aloe Vera Gel for Face</h3>
                          <div className="rating">
                       ★ ★ ★ ★ ★
                     </div>
                          <h3 className='names'>Nikhil.R</h3>
                          <p>“Cool, refreshing, and instantly calms my skin after shaving. Really good quality gel”</p>
                      </div>
                  </div>
                  <div className='reviews-card'>
                      <img src={eleven_row2_img4} alt="img" />
                      <div className='review-content'>
                          <h3>Vitamin C Serum</h3>
                          <div className="rating">
                       ★ ★ ★ ★ ★
                     </div>
                          <h3 className='names'>Ankita .B</h3>
                          <p>“My dark spots are fading and my skin tone looks brighter. So happy with the results”</p>
                      </div>
                  </div>
                  <div className='reviews-card'>
                      <img src={eleven_row2_img5} alt="img" />
                      <div className='review-content'>
                          <h3>Hair Strengthening Oil</h3>
                          <div className="rating">
                       ★ ★ ★ ★ ★
                     </div>
                          <h3 className='names'>Sneha P.</h3>
                          <p>“Noticed less hair fall within two weeks. The scent is herbal and calming—my weekend ritual now!”</p>
                      </div>
                  </div>
                  {/* Duplicates */}
                 <div className='reviews-card'>
                      <img src={eleven_row2_img1} alt="img" />
                      <div className='review-content'>
                          <h3>For Brightening Hair Serum</h3>
                          <div className="rating">
                       ★ ★ ★ ★ ★
                     </div>
                          <h3 className='names'>Megha R.</h3>
                          <p>My hair feels so soft and shiny after just a week! Love how lightweight and non-sticky it is.</p>
                      </div>
                  </div>
                  <div className='reviews-card'>
                      <img src={eleven_row2_img2} alt="img" />
                      <div className='review-content'>
                          <h3>Baby Body Lotion</h3>
                          <div className="rating">
                       ★ ★ ★ ★ 
                     </div>
                          <h3 className='names'>Pooja. D</h3>
                          <p>“So gentle and moisturizing for my baby’s skin. No rashes, no dryness. A must have”</p>
                      </div>
                  </div>
                  <div className='reviews-card'>
                      <img src={eleven_row2_img3} alt="img" />
                      <div className='review-content'>
                          <h3>Aloe Vera Gel for Face</h3>
                           <div className="rating">
                       ★ ★ ★ ★ ★
                     </div>
                          <h3 className='names'>Nikhil.R</h3>
                          <p>“Cool, refreshing, and instantly calms my skin after shaving. Really good quality gel”</p>
                      </div>
                  </div>
                  <div className='reviews-card'>
                      <img src={eleven_row2_img4} alt="img" />
                      <div className='review-content'>
                          <h3>Vitamin C Serum</h3>
                           <div className="rating">
                             ★ ★ ★ ★ ★
                          </div>
                          <h3 className='names'>Ankita .B</h3>
                          <p>“My dark spots are fading and my skin tone looks brighter. So happy with the results”</p>
                      </div>
                  </div>
                  <div className='reviews-card'>
                      <img src={eleven_row2_img5} alt="img" />
                      <div className='review-content'>
                          <h3 className='names'>Hair Strengthening Oil</h3>
                           <div className="rating">
                              ★ ★ ★ ★ ★
                           </div>
                          <h3>Sneha P.</h3>
                          <p>“Noticed less hair fall within two weeks. The scent is herbal and calming—my weekend ritual now!”</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      
        <div className='twelve-section'>
          <div className='twelve-container'>
              <div className='leftside-img-cont'>
                   <img src={perfect_match} alt="img" />
              </div>
              <div className='rightside-cnt-cont'>
                <h2>Your perfect match is waiting</h2>
                 <p>Explore our full range of glow boosting skincare, nourishing hair care, and gentle baby essentials all crafted with plant based goodness and Ayurvedic wisdom.</p>
                 <button className='explore-btn'>Explore the Collection </button>
              </div>
          </div>  
        </div>
        <div className='thirteen-section'>
              <div className='thirteen-container'>
                 <h2>Payment Methods</h2>
                  <div className='left-payment-cont'>
                     
                      <div className='payment-container'>
                        <img src={visa} alt="img" />
                        <img src={mastercard} alt="img" /> 
                        <img src={bhim} alt="img" />
                        <img src={gpay} alt="img" />
                        <img src={paytm} alt="img" />
                      </div>
                 
                      <div className='company-title-cont'> 
                         <img src={logo} alt="img" />
                         <p>Glow Leaf Naturals 100% In House Wellness & Beauty Solutions.</p>
                      </div>
                     </div>
              </div>
           </div>  
        
       </div> 
       <Footer/>
        </>
    )
}
export default Home