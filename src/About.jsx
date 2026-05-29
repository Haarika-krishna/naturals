import './About.css'
import first_img1 from './assets/About-img-1.png';
import above_lines from './assets/above-lines.png';
import below_lines from './assets/below-lines.png';
import logo from './assets/Naturals_logo.png';
import second_img1 from './assets/about-sec2-img1.png';
import second_img2 from './assets/about-sec2-img2.png';
import image_1 from './assets/about-thirdsec-img1.png';
import image_2 from './assets/about-thirdsec-img2.png';
import image_3 from './assets/about-thirdsec-img3.png';
import image_4 from './assets/about-thirdsec-img4.png';
import image_5 from './assets/about-thirdsec-img5.png';
import image_6 from './assets/about-thirdsec-img6.png';
import image_7 from './assets/about-thirdsec-img7.png';
import fourth_img from './assets/fourth-image.png';
import leaf from './assets/green_leaf.png';
import box from './assets/box.png';
import bath from './assets/bath.png';
import fifth_image from './assets/fifth-container-image.png';
import seventh_left from './assets/seventh-left-image.png';
import seventh_img1 from './assets/seventh-right-img1.png';
import seventh_img2 from './assets/seventh-right-img2.png';
import seventh_img3 from './assets/seventh-right-img3.png';
import seventh_img4 from './assets/seventh-right-img4.png';

const About = () => {
    return(
        <>
        <div className="about-main-container">
            <div className="hs-first-section">
                <img src={below_lines} alt="img" className='img-1' />
                <img src={above_lines} alt="img" className='img-2'/>
               
                  <div className='hs-left-container'>
                      <h1>Real Care was Always Homemade.</h1>
                      <p>Before it was a brand, it was a quiet act of love using Earth’s gifts to protect what mattered most.</p>
                      <button>Discover Our Story</button>
                  </div>
                  <div className='hs-right-container'>
                    <img src={first_img1} alt="img" />
                  </div>
                  
            </div>
            <div className='hs-second-section'>
                  <img src={second_img2} alt="img" className='cream-img'/>
                <div className='hs-left-img-section'>
                   <img src={second_img1} alt="img" />
                  
                </div>
                <div className='hs-right-img-section'>
                    <h2>Our Story</h2>
                    <p><span>naturals</span> began not as a business idea, but as a promise — a promise to care for my family with the purest, most natural ingredients possible.
                         Like many, I found myself reading labels, researching ingredients, and wondering why truly clean and gentle products were so hard to find. I wanted more than just results — I wanted honesty, simplicity, and the peace of knowing that what touched our skin and hair was safe, nurturing, and close to nature.
                         So I started small, crafting homemade blends using plant-based ingredients and traditional remedies that had stood the test of time. What began as a labor of love for my family soon grew into something bigger — something I felt called to share.
                         That’s how naturals was born — from the heart of a home, with the belief that everyone deserves beauty that’s as honest and wholesome as nature itself.
                         Today, every naturals product carries that same care. Pure formulations. Thoughtful sourcing. Earth-conscious choices. Because this brand will always be about more than just beauty — it’s about trust, love, and a return to what’s real.</p>
                </div>
            </div>
         {/* third section */}
            <div className='three-container'>
              <h3>For All Skin & Hair Types</h3>
              <p>Inclusive care. Whether you're dry, oily, sensitive, or somewhere in-between — we’ve formulated something that’s right for you.</p>

            <div className='third-img-container'>
                <div className='upper-imgs-row'>
                  <img src={image_1} alt="alt" />
                  <img src={image_2} alt="alt" />
                  <img src={image_3} alt="alt" />
                  <img src={image_4} alt="alt" />
                </div>
                <div className='lower-imgs-row'>
                  <img src={image_5} alt="alt" className='left-img'/>
                  <img src={image_6} alt="alt" className='middle-img' />
                  <img src={image_7} alt="alt" className='right-img'/>
                </div>
                 <div className='image-content'>
                       <div className='first-img-content'>
                            <img src={leaf} alt="img" />
                            <h2>100% Natural Ingredients</h2>
                            <p>We trust nature. Every product is made from plant-based ingredients, oils, and herbal extracts — no synthetics, no parabens, no compromise.</p>
                       </div>
                       <div className='second-img-contnt'>
                           <img src={bath} alt="img" />
                           <h2>Ayurveda-Inspired Formulas</h2>
                           <p>Rooted in tradition. Our recipes are crafted using the timeless science of Ayurveda, balancing your Doshas to enhance your natural beauty.</p>
                       </div>
                       <div className='third-img-contnt'>
                           <img src={box} alt="img" />
                           <h2>Ayurveda-Inspired Formulas</h2>
                           <p>Planet-first mindset. We use recyclable, biodegradable, and minimal packaging to reduce our environmental impact.</p>
                       </div>
                 </div>
            </div>
            </div>

            <div className='fourth-section'>
                  <div className='fourth-sec-content'>
                      <h1>Eco-Packaging That Grows With You</h1>
                      <p>At Naturals, our care for the planet goes beyond clean ingredients it extends to our packaging too. Each product comes in a thoughtfully designed eco-pack that’s not just biodegradable, but plantable.</p>
                      <span>Seed-Embedded Packaging</span>
                      <p>Our outer box contains real seeds. Once you’re done, simply place it in soil — water it, and watch a plant grow. It's beauty that truly blooms.</p>

                  </div>
                  <div className='fourth-sec-image'>
                         <img src={fourth_img} alt="alt" />
                  </div>
            </div>
            <div className='fifth-section'>
                <div className='fifth-sec-image'>
                         <img src={fifth_image} alt="alt" />
                  </div>
                  <div className='fifth-sec-content'>
                      <span>Why It Matters</span>
                      <ul>
                        <li>No plastic waste</li>
                        <li>Compostable materials</li>
                        <li>Grows into herbs or flowers</li>
                        <li>Designed to nourish the Earth, just like our products nourish you</li>
                      </ul>
                      <div className='background-container'>
                        
                            <p>From your hands to the soil — giving back to nature, one package at a time.</p>
                        
                      </div>
                  </div>
                  
            </div>

            <div className='hm-six-container'>
               <h1>Join the Naturals</h1>
               <p>When you choose Naturals, you're not just buying a product — you're making a conscious choice for a cleaner, healthier lifestyle. You're supporting a brand that honors tradition, respects nature, and celebrates self-love in its purest form.</p>
               <p>We invite you to explore our range and experience the difference of true, earth-aligned beauty care. Because when your self-care is in harmony with nature, your beauty naturally blossoms.</p>
            </div>

            <div className='seventh-container'>
                 <div className="seventh-left-section">
                  <img src={seventh_left} alt="img" />
                 </div>
                 <div className="seventh-right-section">
                  <div className="upper-two">
                   <div className="first-cont">
                    <h2>Strengthening Hair oil</h2>
                    <p>Reduces hair fall & strengthens roots naturally.</p>
                    <p>View More</p>
                    <img src={seventh_img1} alt="alt" />
                    <img src={above_lines} alt="img" className='lines'/>
                  </div>
                  <div className="second-cont">
                    <h2>Brightening Face Cream</h2>
                    <p>Evens skin tone & boosts glow naturally.</p>
                    <p>View More</p>
                    <img src={seventh_img2} alt="alt" />
                  </div>
                  </div>
                  <div className="lower-two">
                       <div className="third-cont">
                    <h2>Smoothing Body Lotion</h2>
                    <p>Deeply hydrates & smoothens skin—naturally.</p>
                    <p>View More</p>
                    <img src={seventh_img3} alt="alt" />
                  </div>
                  <div className="fourth-cont">
                    <h2>Dark circles cream</h2>
                    <p>Reduces dark circles & refreshes tired eyes naturally.</p>
                    <p>View More</p>
                    <img src={seventh_img4} alt="alt" />
                  </div>
                  </div>
                  
                 </div>
            </div>
        </div>
        </>
    )
}
export default About