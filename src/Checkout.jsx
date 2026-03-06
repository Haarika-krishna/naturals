import './Checkout.css'
import React, { useState, useContext } from 'react';
import WestIcon from '@mui/icons-material/West';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
const Checkout = () => {
   const { cart, dispatch} = useContext(CartContext);
  const navigate=useNavigate();
  
const [form, setForm] = useState({  firstName: "",  lastName: "",  email: "",  phone: "",  pincode: "",  city: "",  state: "", address: "",addressType: "Office"});
    const handleChange = (e) => {
      const { name, value } = e.target;

       setForm((prev) => ({
          ...prev,
       [name]: value,
     }));
    }
      const subtotal = cart.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);
   const deliveryFee = subtotal> 1000? 0 : 59;
   const discount= subtotal> 2500? 200: 50;
   const total = subtotal+deliveryFee- discount;
    return(
        <>
        <div className="checkout-container">
             <span className="back-link" onClick={()=>navigate(-1)}><WestIcon/> Back</span>
                <h2 className="checkout-title">Check out</h2>
            <div className='form-order-container'>   
           <div className="checkout-form-container">
         
           <form className="checkout-form">

          <div className="form-row">
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
            />
          </div>
         </div>

         <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
          />
         </div>

         <div className="input-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            onChange={handleChange}
          />
         </div>

         <div className="form-row">
          <div className="input-group">
            <label>Pin Code</label>
            <input
              type="text"
              name="pincode"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
            />
          </div>
         </div>

         <div className="input-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            onChange={handleChange}
          />
         </div>

         <div className="input-group">
          <label>Address</label>
          <textarea
            name="address"
            rows="3"
            onChange={handleChange}
          ></textarea>
         </div>

          <button className="save-btn">
            Save Address
           </button>
         <div className="address-type">
  <label className="save-label">Save address as</label>

  <div className="radio-group">
    <label>
      <input
        type="radio"
        name="addressType"
        value="Home"
        checked={form.addressType === "Home"}
        onChange={handleChange}
      />
      Home
    </label>

    <label>
      <input
        type="radio"
        name="addressType"
        value="Office"
        checked={form.addressType === "Office"}
        onChange={handleChange}
      />
      Office
    </label>

    <label>
      <input
        type="radio"
        name="addressType"
        value="Others"
        checked={form.addressType === "Others"}
        onChange={handleChange}
      />
      Others
       </label>
     </div>
   </div>
        </form>
      </div>
      
      <div className='order-summary-sect'>
        <h3>{`Order items-${cart.length}`}</h3>
          {
            cart.map((item, index)=>(
                
                <div className='upper-order-item-container'>
                     
                <div key= { item.id} className='each-product-ordercontainer'>
                     <div className='item-image'>
                                <img src={item.img} alt='img'/>
                      </div>
                      <div className='image-content-info'>
                              <div className='img-right-sect'>
                                <h3>{item.name}</h3>
                                <div className='cost-container'>
                                    {item.price && (
                                      <span className='item-price'>₹{item.price}</span>
                                    )}
                                    {item.oldPrice && (
                                      <span className='strike-price'><s>{item.oldPrice}</s></span>
                                    )}

                                    {item.discount && (
                                       <span className='item-percentage'>{item.discount}</span>
                                    )}
                                </div>
                            </div> 
                        </div>
                   </div>
                   
                </div>
                
            ))
          }
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
           
      </div>
      </div> 
        </>
    )
}
export default Checkout;