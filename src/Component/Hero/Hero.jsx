import img1 from '../../assets/Discount.png';
import img2 from '../../assets/Group 481768.png';
import img3 from '../../assets/robot.png';
import './Hero.css';

const Hero = () => {

    return ( 
        <div   className="hero">
        {/*Left Hero*/}
            <div className="left-hero"  >
                <div className='circle'></div>
               <div className="discount">
                <img src={img1} alt="" />
                <h4>20% <span>DISCOUNT FOR</span> 1 MONTH <span>ACCOUNT</span></h4>
               </div>
               <div className="hero-text">
                <h1>The Next <span>Generation</span> Payment Method.</h1>
              <img src={img2} alt="" />
               </div>
               <p>Our team of experts uses a methodology to identify the credit cards most likely 
                to fit your needs. We examine annual percentage rates, annual fees.</p>
            </div>

           {/*Right Hero*/}
            <div className="right-hero">
                <div className='pink'></div>
                <div className='white'></div>
                <div className='blue'></div>
                <img className='img' data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="80"
                data-aos-delay="200" src={img3} alt="" />
            </div>
        </div>
     );
}
 
export default Hero;