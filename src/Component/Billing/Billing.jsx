
import React from 'react';
import './Billing.css';
import img1 from '../../assets/bill.png';
import img2 from '../../assets/apple.svg';
import img3 from '../../assets/google.svg';

const Billing = () => {
  return (
   <div className="billing">
    <div className="billing-left"  data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="80"
                data-aos-delay="200">
        <div></div>
        <img src={img1} alt="" />
    </div>
    <div className="billing-right">
        <h2> Easily control your billing & invoicing.</h2>
        <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce 
            ipsum orci rhoncus aliporttitor integer platea 
            placerat.</p>
            <div className="b-img">
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
    </div>
   </div>
  )
}

export default Billing