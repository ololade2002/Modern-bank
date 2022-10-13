
import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import { navData } from '../../../Data/Data';
import menuopen from '../../assets/menu.svg';
import menuclose from '../../assets/close.svg';

const Navbar = () => {

    const [activeLink,setActiveLink] = useState(0);
    const [mobile,setMobile] = useState(false)

  return (
   <div className="navbar">
    
        <div className="logo">
            <img src={logo} alt="" />
        </div>

          <ul className={mobile ? 'nav-item-mobile' : 'nav-item' } onClick={()=>setMobile(false)}>
        {navData.map((nav,index)=> (
            <div className="nav-preview" key={index}>
                <li className={activeLink === index ? 'nav-link activee' : 'nav-link'}
                onClick={()=>setActiveLink(index)}
                >{nav.title}</li>
            </div>
        ))}
        </ul> 

       {/*Mobile Menu */}
       <button className="menu" onClick={()=>setMobile(!mobile)}>
        {mobile ?  <img src={menuclose} alt="" />  : <img src={menuopen} alt="" /> }
       </button>


   </div>
  )
}

export default Navbar