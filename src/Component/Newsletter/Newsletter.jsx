
import React from 'react';
import './Newsletter.css';
import { sponsorData } from '../../../Data/Data';

const Newsletter = () => {
  return (
    <div className="new">

<div className="sponsors"  data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="80"
                data-aos-delay="200">
{sponsorData.map((sponsor,index)=> (
    <div className="sponsor-preview" key={index}>
        <img src={sponsor.img} alt="" />
    </div>
))}
 </div>

        <div className="news">
        <div className='news-l' >
        <h2>Let’s try our service now!</h2>
        <p>Everything you need to accept
             card payments and grow your business anywhere on the planet.</p>

        </div>
        <div className='news-r' >
            <button className="btn">Get Started</button>
        </div>
    </div>
    </div>
  )
}

export default Newsletter