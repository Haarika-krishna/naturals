import './OrderTracking.css'
import WestIcon from "@mui/icons-material/West";
import HeadsetMicTwoToneIcon from '@mui/icons-material/HeadsetMicTwoTone';
import orders_serum from '../assets/orders_img.png';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from '@mui/icons-material/Star';
import location from '../assets/location-img.png'
import { useNavigate } from 'react-router-dom';
const OrderTracking = ({onReturn, onBack}) => {
  const navigate = useNavigate();
    return(
        <>
        <div className='order-tracking-container'>
          <div className='back-mic-icon'>
             <span><WestIcon className="back-icon" onClick={onBack}/>Back</span>
             <span><HeadsetMicTwoToneIcon sx={{color: "black", size: '14'}}/></span>
          </div>
           <div className='tracking-first-cont'>
                  <p>Order id: <span>61654</span></p>
                  <div className='img-container'>
                     <img src={orders_serum} alt="" />
                     <div className='order-content'>
                         <h5 className='first-heading'>Delivered, 12 Jun</h5>
                         <p>Radiant Shine Hair Conditioner</p>
                         <span>100ml</span>
                     </div>
                  </div>
                  <div className='delivered-button'>
                        <button >Exchange</button>
                        <button onClick={onReturn}>Return</button>
                  </div>
           </div>
      {/* Order Tracking */}
      <div className="order-card">
        <h2 className="order-title">Order Tracking</h2>

        <div className="tracking-list">
          <div className="tracking-item done">
            <span className="tracking-dot"><CheckCircleIcon
                      sx={{
                      color: "black",        
                      backgroundColor: "white", 
                      borderRadius: "50%", 
                      fontSize: "28px",
                     }}
            /></span>
            <div className="tracking-text">
              <p className="tracking-status">Delivered</p>
              <span className="tracking-date">25 jun, 2025</span>
            </div>
          </div>

          <div className="tracking-item done">
            <span className="tracking-dot"><CheckCircleIcon
                      sx={{
                      color: "black",        
                      backgroundColor: "white", 
                      borderRadius: "50%", 
                      fontSize: "24px",
                     }}
            /></span>
            <div className="tracking-text">
              <p className="tracking-status">Out For Delivery</p>
              <span className="tracking-date">25 jun, 2025</span>
            </div>
          </div>

          <div className="tracking-item done">
            <span className="tracking-dot"><CheckCircleIcon
                      sx={{
                      color: "black",        
                      backgroundColor: "white", 
                      borderRadius: "50%", 
                      fontSize: "28px",
                     }}
            /></span>
            <div className="tracking-text">
              <p className="tracking-status">Order Packed</p>
              <span className="tracking-date">17 jun, 2025</span>
            </div>
          </div>

          <div className="tracking-item done">
            <span className="tracking-dot"><CheckCircleIcon
                      sx={{
                      color: "black",        
                      backgroundColor: "white", 
                      borderRadius: "50%", 
                      fontSize: "28px",
                     }}
            /></span>
            <div className="tracking-text">
              <p className="tracking-status">Order Placed</p>
              <span className="tracking-date">16 jun, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rating Box */}
      <div className="order-card">
        <div className="rating-box">
          <div className="rating-emoji">😍</div>

          <div className="rating-stars">
            <span><StarIcon/></span>
            <span><StarIcon/></span>
            <span><StarIcon/></span>
            <span><StarIcon/></span>
            <span><StarIcon/></span>
          </div>

          <p className="rating-text">Thank you for sharing your thoughts</p>
        </div>
      </div>

      {/* Delivery Address */}
      <div className="delivery-card">
        <h2 className="delivery-title">Delivery Address</h2>

        <div className="delivery-info">
          <p className="delivery-name">Hari Keerthi</p>
          <p className="delivery-phone">+91 9648383787</p>
          <p className="delivery-address">
            Road no 23, Kakatiya hills, Madhapur,
            <br />
            Hyderabad,India, 50081
          </p>
          <p className="delivery-tag">Office</p>
        </div>

        <div className="delivery-icon"><img src={location} alt="" /></div>
      </div>

      {/* Order Summary */}
      <div className="order-summary-card">
        <h2 className="summary-title">Order Summary</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹2,863</span>
        </div>

        <div className="summary-row">
          <span>Discount (34.2 %)</span>
          <span className="green">-₹979</span>
        </div>

        <div className="summary-row">
          <span>Delivery Fee</span>
          <span>₹59</span>
        </div>

        <hr className="summary-hr" />

        <div className="summary-total">
          <span>Total</span>
          <span>₹1,884</span>
        </div>
      </div>
      <div className="cash-on-delivery">
          <span>Payment Mode</span>
          <span>Cash On Delivery</span>
        </div>
        </div>
        </>
    )
}
export default OrderTracking;