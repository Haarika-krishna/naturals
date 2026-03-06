import {useState} from 'react';
import './MyOrders.css'
import orders_serum from '../assets/orders_img.png';
import { useNavigate } from 'react-router-dom';
import WestIcon from "@mui/icons-material/West";
const MyOrders = ({onFullOrder, onCancelOrder}) =>{
    const [searchProducts,setSearchProducts] = useState(' ');
    const navigate=useNavigate();
    return(
        <>
        <div className="myorders-section">
         <WestIcon
                className="mobile-back"
                onClick={() => setIsOpen(true)}
              />
            <div className="first-orders-section">
                    <h2>My Orders</h2>
                    <p>Total Orders 20</p>
            </div>
            <div className="second-input-section">
                 <div>
                    <input type="text" className='search-input' placeholder="Search By product, order Id....."/>
                    <span className="material-symbols-light--search"></span>
                 </div>
                  
                  <div className='buttons-cont'>
                      <button>All</button>
                      <button>Return</button>
                      <button>Cancelled</button>
                      <button>Inprogress</button>
                      <button>Delivered</button>
                      <button>Exchange</button>
                  </div>
            </div>
            <div className='third-product-section'>
                 <div className='product-deliver-info' onClick={onFullOrder}>
                   <img src={orders_serum} alt='img'/>
                   <div className='product-info-content'>
                      <h5 className='first-heading'>Delivered, 15 Jan</h5>
                      <p>Estimated Delivery wed, 20 jun</p>
                      <p>Radiant Shine Hair Conditioner</p>
                      <span>100ml</span>
                   </div>
                   </div>
                   <div className='product-deliver-info'>
                   <img src={orders_serum} alt='img'/>
                   <div className='product-info-content'>
                      <h5 className='second-heading'>Confirmed, 15 Jan</h5>
                      <p>Estimated Delivery wed, 20 jun</p>
                      <p>Radiant Shine Hair Conditioner</p>
                      <span>20ml</span>
                   </div>
                   </div>
                   <div className='product-deliver-info'>
                   <img src={orders_serum} alt='img'/>
                   <div className='product-info-content'>
                      <h5 className='third-heading'>Refunded Amount 799</h5>
                      <p>Estimated Delivery wed, 20 jun</p>
                      <p>Radiant Shine Hair Conditioner</p>
                      <span>50ml</span>
                   </div>
                   </div>
                   <div className='product-deliver-info' onClick={onCancelOrder}>
                   <img src={orders_serum} alt='img'/>
                   <div className='product-info-content'>
                      <h5 className='fourth-heading'>Cancelled, 15 Jan</h5>
                      <p>Estimated Delivery wed, 20 jun</p>
                      <p>Radiant Shine Hair Conditioner</p>
                      <span>10ml</span>
                   </div>
                   </div>
                </div>
            </div>
        </>
    )
}
export default MyOrders;