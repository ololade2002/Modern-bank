
import React from 'react';
import './Testimonial.css';
import { testimonialData } from '../../../Data/Data';
import { useState } from 'react';


const Testimonial = () => {

const [selected,setSelected] = useState(1)

  return (
   <div className="testimonial">
    <div className="body-t">
     <h2>What people are saying about us</h2>
     <p>Everything you need to accept card payments
         and grow your business anywhere on the planet.</p>
    </div>

 <div className="sub-body"  data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="80"
                data-aos-delay="200">
    {testimonialData.map((testimonial,index)=> (
        <div className={selected === index ? 'testimonial-preview select' : 
        'testimonial-preview'} onClick={()=>setSelected(index)} key={index} >
       <img src={testimonial.img} alt="" />
       <h3>{testimonial.text}</h3>
       <div className="info">
        <img src={testimonial.person} alt="" />
        <div>
            <h3>{testimonial.name}</h3>
            <h5>{testimonial.role}</h5>
        </div>
       </div>
        </div>
    ))}
 </div>

 

   </div>
  )
}

export default Testimonial;