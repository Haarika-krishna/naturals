import {WishlistContext} from './WishlistContext'
import wishlistimg from './assets/wishlist_img.png'
import { useContext } from 'react'
import StarIcon from '@mui/icons-material/Star';
import './Wishlist.css'
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

const Wishlist = () => {
    const {wishlist, removeWishlist} = useContext(WishlistContext)
  
    const { cart, dispatch } = useContext(CartContext);
    
    const navigate = useNavigate();
    return(
        <>
        <div className='wishlist-container'>
               {wishlist.length === 0 ? 
               (
                <div className='wishlist-header'>
                    <h4>My WishList(0)</h4>
                <div className='wishlist-image-container'>
                     <img src={wishlistimg} alt='img'/>
                     <h4>Your Wishlist Is Waiting</h4>
                     <button className='wishlist-explore-btn' onClick={()=>navigate("/")}>Start Exploring</button>
                </div>  
                </div>  
               )
               :  (
                  <div className='wishlist-products-list'>
                    <h4>My WishList ({wishlist.length})</h4>
                    <div className='wishlist-products-container'>
                      
                       {wishlist.map((item)=>(
                        <div key={item.id} className='hm-product-info'>
                               <img src={item.img} alt='img'/>
                               <span className="bestseller">Bestseller</span>
                               <h3>{item.name}</h3>
                               <div className="rating-line">
                                           <div className="rating">
                                             <StarIcon />
                                             <StarIcon />
                                             <StarIcon />
                                             <StarIcon />
                                             <StarIcon />
                                           </div>
                                           <p>{item.reviews}</p>
                                         </div>
                                         <div className="span-tags">
                                           <span>₹{item.price}</span>
                                           {item.oldPrice && <span><s>{item.oldPrice}</s></span>}
                                           {item.discount && <span>{item.discount}</span>}
                                         </div> 
                                         <div className='cart-btn'>
                                            <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}>Add to cart</button>
                                            <div className='delete-icon' onClick={() => removeWishlist(item.name)}>
                                                <span className="solar--trash-bin-minimalistic-line-duotone"></span> 
                                            </div>
                                         </div>       
                        </div>
                       ))} 
                       </div>
                  </div>
                
                
                
               )}
        </div>
        </>
    )
}
export default Wishlist