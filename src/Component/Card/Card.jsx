
import React from 'react';
import img1 from '../../assets/card.png';
import './Card.css';

const Card = () => {
  return (
    <div className="cards">
        <div className="card-left">
            <h2>Find a better card deal in few easy steps.</h2>
            <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet 
                quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
            <button className="btn">Get Started</button>
        </div>
        <div className="card-right"  data-aos="fade-up"   data-aos-duration="2500" data-aos-offset="80"
                data-aos-delay="200">
            <img src={img1} alt="" />
        </div>
    </div>
  )
}

export default Card;