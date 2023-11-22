
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import pic from '../assets/profilePic.png';
import linkedin from '../assets/linkedin.png';
import message from '../assets/message.png';
import github from '../assets/github.png';





export default function Portfolio({ }) {



    

    return (
        <>

<div className='wholePage'>

<div className='mainFrame1'>
    <div className='mainPicDiv'>
        <img className='picSize' src={pic}></img>
    </div>
    <div className='nameColumn'>
    <div className='name'>Anthony McCullough</div>
    <hr className='line'></hr>
    <div className='title'>Web Developer</div>
    </div>
    <div className='picsRow'>
    <AnchorLink href="#contactForm" className='iconPic1'>
      <img  className='picSize2' src={message}></img>
      </AnchorLink>
      <Link to="https://www.linkedin.com/in/anthony-mccullough-06b0a7299/" className='iconPic2' >
      <img className='picSize2' src={linkedin}></img>
      </Link>
      
      <Link to="https://github.com/AnthonyMcCullough" className='iconPic3'>
      <img className='picSize2' src={github}></img>
      </Link>
    
    </div>
    <div className='linksColumn'>
    
        <div className='infoColumn'>
            <div className='titleLink'><u>Email:</u></div>
            <AnchorLink href="#contactForm" className='link'>mccullougha583@gmail.com</AnchorLink>
        </div>
        <div className='infoColumn'>
        <div className='titleLink'><u>LinkedIn:</u></div>
        <Link to="https://www.linkedin.com/in/anthony-mccullough-06b0a7299/" className='link'>Anthony McCullough | LinkedIn</Link>
        </div>
        <div className='infoColumn'>
        <div className='titleLink'><u>GitHub:</u></div>
        <Link to="https://github.com/AnthonyMcCullough" className='link'>Anthony McCullough | GitHub</Link>
        </div>

    </div>



</div>

<div className='mainFrame2'>
  


</div>

</div>
           



        </>
    )

}