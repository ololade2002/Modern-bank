
import React from 'react';
import './Footer.css';
import '../../assets/logo.svg';
import img1 from '../../assets/logo.svg';
import img2 from '../../assets/instagram.svg';
import img3 from '../../assets/facebook.svg';
import img4 from '../../assets/twitter.svg';
import img5 from '../../assets/linkedin.svg';

const Footer = () => {
  return (
   <div className="footer">

    <div className='first'>
        <div>
      <div className="logo-f">
        <img src={img1} alt="" />
      </div>
      <p>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div>
            <h3>Useful Links</h3>
            <ul>
                <li>Content</li>
                <li>How It Works</li>
                <li>Create</li>
                <li>Explore</li>
                <li>Terms & Services</li>
            </ul>
        </div>

        <div>
            <h3>Community</h3>
            <ul>
                <li>Help Center</li>
                <li>Partner</li>
                <li>Suggestion</li>
                <li>Blog</li>
                <li>Newsletter</li>
            </ul>
        </div>

        <div>
            <h3>Partner</h3>
            <ul>
                <li>Our Partner</li>
                <li>Become A Partner</li>
            </ul>
        </div>

    </div>

<div className='hr'></div>

    <div className='second'>
<div>
    <h4>Copyright &copy;   2021 HooBank. All Rights Reserved.</h4>
</div>

<div className="social">
    <li><img src={img2} alt="" /></li>
    <li><img src={img3} alt="" /></li>
    <li><img src={img4} alt="" /></li>
    <li><img src={img5} alt="" /></li>
</div>

    </div>

   </div>
  )
}

export default Footer;