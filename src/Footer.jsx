import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () =>{
    return(
       <>
         <div className="footer-section">
                <div className="footer-container">
                    <div className="first-part-cont">
                        <h3>Shop</h3>
                        <p>Hair care</p>
                        <p>Skin care</p>
                        <p>Baby products</p>
                         
                    </div>
                    <div className="second-part-cont">
                         <h3>Company</h3>
                        <p>About Us</p>
                        <p>Carrers</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="third-part-cont">
                        <h3>Help</h3>
                        <p>FAQ</p>
                        <p><Link to="/returns">Return & Refund Policy</Link></p>
                        <p>Customer Support (Email)</p>
                        <p><Link to="/terms">Terms & Conditions</Link></p>
                        <p><Link to="/privacy-policy">Privacy Policy</Link></p>
                    </div>
                    <div className="fourth-part-cont">
                        <h3>My Account</h3>
                        <p>My Profile</p>
                        <p>My Orders</p>
                        <p>Track My Order</p>
                    </div>
                      <div className="fifth-part-cont">
                        <div className='fifth-inside-cont'>
                        <h3>Office Address</h3>
                        <p> Hyderabad, Telengana , India.</p>
                        <p>+91 9876543210</p>
                         <div className="logo-imges-container">
                            <span className="ic--baseline-facebook"></span>
                            <span className="mage--instagram-circle"></span>
                            <span className="formkit--twitter"></span>
                            <span className="entypo-social--linkedin-with-circle"></span>
                         </div>
                      </div>
                      </div>   
                </div>
                 <hr />
                <div className='copyright-container'>
                    <div className='three-content'>
                        <p>Terms of Use</p><span className="ph--line-vertical-thin"></span>
                        <p>Privacy Policy</p><span className="ph--line-vertical-thin"></span>
                        <p>Disclaimer</p>
                    </div>
                   <p>Copyright © 2025 All rights reserved.</p>
                </div>
          
         </div>
       </>
    )
}
export default Footer