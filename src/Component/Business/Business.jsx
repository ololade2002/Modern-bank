
import React from 'react';
import Stats from '../Stats/Stats';
import './Business.css';

import { BusinessData } from '../../../Data/Data';
import { useState } from 'react';

const Business = () => {
  
const [active,setActive] = useState(1)

  return (
   <div className="business">
  <Stats/>
  <div className="business-body">
<div className="left-business">
    <h2>You do the business, we’ll handle the money.</h2>
    <p> With the right credit card, you can improve your financial life by building credit, earning rewards and
         saving money. But with hundreds of credit cards on the market.
         </p>
         <button className="btn">Get Started</button>
</div>

<div className="right-business"   data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="80"
                data-aos-delay="200">
{BusinessData.map((business,index) => (
    <div className={active === index ? 'business-preview active' : 'business-preview'} 
    onClick={()=>setActive(index)} key={index}>
      <div>
    <img src={business.img} alt="" /></div>
    <div>
        <h2>{business.title}</h2>
        <p>{business.text}</p>
    </div>
    </div>
))}
</div>

</div>
   </div>
  )
}

export default Business;