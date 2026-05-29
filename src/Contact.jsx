import health from './assets/health.png';
import support from './assets/Customer_support.png';
import payment from './assets/payment.png';
import flower from './assets/flower.png';
 import girl from './assets/contact_girl.png';
 import cream from './assets/contact_cream.png';
import leaf from './assets/contact_leaf.png';
import gleaf from './assets/green_leaf.png';
import first from './assets/first_background.png';
import serums from './assets/first_serums5.png';
import serum from './assets/first_serum.png';
import leaves from './assets/first_leaves.png';
import faqImage from './assets/faqImage.png';
import {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import './Contact.css'
const Contact = () =>{
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
   const [activeIndex, setActiveIndex] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === 0 ? 1 : 0));
    }, 4000); // every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
  {
    question: "Are your products 100% natural?",
    answer:
      "Yes. Our products are formulated using natural, responsibly sourced ingredients."
  },
  {
    question: "Are Naturals products safe for sensitive skin?",
    answer:
      "Absolutely. Our formulations are gentle and designed with sensitive skin in mind. However, we recommend a patch test before full use."
  },
  {
    question: "Are your products eco-friendly?",
    answer:
      "Yes. We prioritize sustainable packaging and environmentally responsible practices."
  },
  {
    question: "How can I contact your team for queries or support?",
    answer:
      "You can reach us via email or phone listed on our Contact page."
  }
];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };
    return(
        <>
        <div className="contact-container">
           <div className="first-section">
      <div className="slides-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <div className='slide-section-one'>
          <div className="left-cont">
            <h1>We’re Here to Help</h1>
            <p>Our support team is ready to guide you with care and clarity.</p>
          </div> 
          <div className="right-img-sect">
            <img src={first} alt="alt" className='image1'/>
            <img src={serums} alt="" className='image2' />
            <img src={leaves} alt="" className='image3' />
          </div>
        </div>

        <div className="slide-section-two">
          <div className='left-content'>
            <p>Best Deal on Serum</p>
            <h1>Skin whitening serum</h1>
            <span>Up to 80% OFF</span>
          </div>
          <div className='right-serum'>
            <img src={serum} alt="img" className='rel-image'/>
            <img src={gleaf} alt="img" className='abs-image'/>
          </div>
        </div>
      </div>
    </div>
           <div className='two-container'>
               <p>Connect With Naturals</p>
               <div className='returns-container'>
                    <div className='first-cont'>
                        <img src={support} alt="img" />
                        <p>Friendly, fast customer support</p>
                    </div>
                    <div className='first-cont'>
                        <img src={health} alt="img" />
                        <p>Experts in natural care</p>
                    </div>
                    <div className='first-cont'>
                        <img src={payment} alt="img" />
                        <p>Easy return & exchange process</p>
                    </div>
               </div>
           </div>

           <div className='third-container'>
            <img src={flower} alt="img" className='flower-img' />
                <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Your Address"
          value={formData.address}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>   
           </div>

           <div className='fourth-container'>
                <div className='contact-data'>
                   <span class="ic--baseline-phone"></span>
                   <p>Phone Number</p>
                   <p>+91 9876543216</p>
                </div>
                <div className='contact-data'>
                   <span class="material-symbols--mail"></span>
                   <p>Email Address</p>
                   <p>support@naturals.com</p>
                </div>
                <div className='contact-data'>
                   <span class="mdi--location"></span>
                   <p>Location</p>
                   <p> Hyderabad, Telengana , India</p>
                </div>
           </div>

           <div className="fifth-container">
  <div className="faq-wrapper">
    
    {/* Left Image */}
    <div className="faq-image">
      <img src={faqImage} alt="FAQ" />
    </div>

    {/* Right Accordion */}
        <div className="faq-card">
          <h2>Frequently Asked Questions</h2>

          {faqs.map((item, index) => (
            <div key={index} className="faq-block">

              <div
                className="faq-item"
                onClick={() => toggleFAQ(index)}
              >
                <p>{item.question}</p>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}

            </div>
          ))}
        </div>
  </div>
</div>

           <div className='sixth-container'>
  <div className="left-img-section">
    <div className="main-image-container">
      <img src={girl} alt="Main" className="main-img" />
      {/* <div className="overlay-images">
        <img src={cream} alt="Cream" className="second-img" />
        <img src={leaf} alt="Leaf" className="third-img" />
      </div> */}
    </div>
  </div>
  <div className="right-img-section">
    <h1>Gentle on Skin, Tough on Toxins</h1>
    <p>Detoxifies and restores skin health with charcoal, clay, and green tea.</p>
    <button>Shop Our Bestsellers</button>
  </div>
</div>
        </div>
        </>
    )
}
export default Contact