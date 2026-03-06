import './AddToCart.css'
import cartimg from './assets/Empty-Cart-img.png'
import { useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { CartContext } from './CartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from 'react-router-dom';
const AddToCart = () => {

    const { cart, dispatch} = useContext(CartContext);
    const navigate=useNavigate();

    const subtotal = cart.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);
   const deliveryFee = subtotal> 1000? 0 : 59;
   const discount= subtotal> 2500? 200: 50;
   const total = subtotal+deliveryFee- discount;
    return(
       <>

       <div className='addCart-container'>
             {cart.length===0 ? (
                <div className='AddCart-header'>
                    <h3>My Cart(0)</h3>
                                   <div className='wishlist-image-container'>
                                        <img src={cartimg} alt='img'/>
                                        <h4>Oops, Nothing Here Yet!</h4>
                                        <button className='wishlist-explore-btn' onClick={()=>navigate("/")}>Shop now</button>
                                   </div> 
                </div>
             ): (
              <div className='mycart-section'>
               <div className='product-cart-list'>
                 <h3>My Cart ({cart.length})</h3>
                 <div className='product-cart-container'>
                     {cart.map((item)=>(
                         <div key={item.id} className='hm-cart-section-info'>
                            <div className='item-image'>
                                <img src={item.img} alt='img'/>
                            </div>
                            <div className='image-content-info'>
                              <div className='img-right-sect'>
                                <h3>{item.name}</h3>
                                <div className='price-container'>
                                    {item.price && (
                                      <span className='item-cost'>₹{item.price}</span>
                                    )}
                                    {item.oldPrice && (
                                      <span className='strike-cost'><s>{item.oldPrice}</s></span>
                                    )}

                                    {item.discount && (
                                       <span className='percentage'>{item.discount}</span>
                                    )}
                                 </div>
                                </div> 
                                
                                 <div className='wrong-icon-cont'>
                                   <span onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}><CloseIcon sx={{ fontSize: { xs: 15, sm: 18, md: 24}}}/></span>
                                  <div className='buttons-container'>
                                    <button onClick={()=>dispatch({ type: "Decrement_Qty", payload: item.id })}><RemoveIcon sx={{ fontSize: { xs: 15, sm: 18, md: 24}}}/></button>
                                    <span className='count'>{item.quantity}</span>
                                    <button onClick={()=>dispatch({ type: "Increment_Qty", payload: item.id })}><AddIcon sx={{ fontSize: { xs: 15, sm: 18, md: 24}}}/></button>
                                  </div>
                                
                                </div>
                              </div>
                             
                        </div> 
                        
                     ))}
                     <div className='btn-div'>
                      <button className='show-more-items' onClick={()=>navigate("/")}>Show More items</button> 
                      </div>
                 </div>
               </div> 
               <div className='order-container'>
               <div className='order-summary-section'>
                        <h2>Order Summary</h2>
                        <div>
                        <div>
                          <span>Subtotal</span><span>{subtotal}</span>
                        </div>
                        <div>
                          <span>Discount</span><span>{discount}</span>
                        </div>
                        <div>
                          <span>Delivery Fee</span><span>₹{deliveryFee}</span>
                        </div>
                        <hr />
                        <div>
                        <span>Total</span>
                        <span>{total}</span>
                        </div>
                        </div>
                        <div className='input-coupon-div'>
                            <input type="text" placeholder='Add Coupon Code'/>
                            <button>Apply</button>
                        </div>
                        <div>
                            <button  disabled={cart.length === 0} onClick={()=>navigate("/checkout")}>Proceed to Checkout</button>
                            <button onClick={()=>navigate("/")}>Continue Shopping</button>
                        </div>
                 </div>   
                 </div>            
           </div>  
             )}
       </div>
          
       </>
    )
}
export default AddToCart