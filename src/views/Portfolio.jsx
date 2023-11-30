
import React, { useState} from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import AnchorLink  from 'react-anchor-link-smooth-scroll';




import pic from '../assets/profilePic.png';
import linkedin from '../assets/linkedin.png';
import message from '../assets/message.png';
import github from '../assets/github.png';

import bootstrap from '../assets/bootstrap.png'
import css from '../assets/css.png'
import express from '../assets/express.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import jquery from '../assets/jquery.png'
import mongoDB from '../assets/mongoDB.png'
import mongoose from '../assets/mongoose.png'
import node from '../assets/node.png'
import oop from '../assets/oop.png'
import sass from '../assets/sass.png'
import react from '../assets/react.png'
import eCommerce from '../assets/eCommerce.png'
import calculator from '../assets/calculator.png'
import library from '../assets/library.png'
import tripPlan from '../assets/tripPlan.png'




const Portfolio = () => {

    const [mainPic,setMainPic] = useState(eCommerce)




    const displayLargeImage  = (mainPicPath) => {
    
        setMainPic(mainPicPath)
        
    
       
    
    }



    return (
        <>

            <div className='wholePage'>

                <div className='mainFrame1'>
                    <div className='mainPicDiv'>
                        <img alt="alt" className='picSize' src={pic}></img>
                    </div>
                    <div className='nameColumn'>
                        <div className='name'>Anthony McCullough</div>
                        <hr className='line'></hr>
                        <div className='title'>Web Developer</div>
                    </div>
                    <div className='picsRow'>
                        <AnchorLink href="#contactForm" className='iconPic1'>
                            <img alt="alt" className='picSize2' src={message}></img>
                        </AnchorLink>
                        <Link to="https://www.linkedin.com/in/anthony-mccullough-06b0a7299/" className='iconPic2' >
                            <img alt="alt" className='picSize2' src={linkedin}></img>
                        </Link>

                        <Link to="https://github.com/AnthonyMcCullough" className='iconPic3'>
                            <img alt="alt" className='picSize2' src={github}></img>
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
                    <div className='contentSection'>
                        <div className='content'>
                            
                            <div className='contentDiv'>
                                <h1 className='title2'>About Me</h1>
                                <div className="text">
                                   Hello , my name is Anthony McCullough . 
                                   Im a web developer from Phoenix,AZ that has a passion for designing, 
                                   constructing, and debugging mobile responsive web applications. 
                                   I want to continue my education in the technical indsurty to include creating video games and virtual reality.
                                    My other hobbies include sports, hiking, fishing, excercising, and eating.

                                    
                                </div>
                            </div>
                                   

                            <div className='contentDiv'>
                                <h1 className='title2'>Skills</h1>
                                <div className="text">
                               
                               <img alt="alt" src={html} className='iconPicSize'></img>
                               <img alt="alt"  src={css} className='iconPicSize'></img>
                               <img alt="alt"  src={javascript} className='iconPicSize'></img>
                               <img alt="alt"  src={oop} className='iconPicSize'></img>
                               <img alt="alt"  src={react} className='iconPicSize'></img>
                               <img alt="alt"  src={bootstrap} className='iconPicSize'></img>

                                    
                                </div>

                                <div className="text">
                                
                                <img alt="alt"  src={sass} className='iconPicSize'></img>
                               <img alt="alt"  src={jquery} className='iconPicSize'></img>
                               <img alt="alt"  src={node} className='iconPicSize'></img>
                               <img alt="alt"  src={express} className='iconPicSize'></img>
                               <img alt="alt"  src={mongoose} className='iconPicSize'></img>
                               <img alt="alt"  src={mongoDB} className='iconPicSize'></img>
                               

                                    
                                </div>


                            </div>



                            <div className='contentDiv'>
                                <h1 className='title2'>Projects</h1>
                                <div className="text2">
                               
                               <img alt="alt"  src={mainPic} className='bigPicSize'></img>
                               

                                    
                                </div>

         

                                <div className="picRow">
                               <div className='picLinkColumn'>
                               <div className='miniTitle'>E-Commerce Store </div>
                                <img alt="alt"  src={eCommerce} onClick={()=>displayLargeImage(eCommerce)} className='projectPicSize'></img>
                                <Link to="https://github.com/AnthonyMcCullough/E-CommerceStore" className='link2'>GitHub</Link>
                                </div>

                                <div className='picLinkColumn'>
                                <div className='miniTitle'>Personal Library </div>
                          
                                <img alt="alt"  src={library} onClick={()=>displayLargeImage(library)} className='projectPicSize'></img>
                                <Link to="https://github.com/AnthonyMcCullough/PersonalLibrary" className='link2'>GitHub</Link>
                                </div>   
                                
                                <div className='picLinkColumn'>
                                <div className='miniTitle'>Trip Planner</div>
                                <img alt="alt"  src={tripPlan} onClick={()=>displayLargeImage(tripPlan)} className='projectPicSize'></img>
                                <Link to="https://github.com/AnthonyMcCullough/TripPlanner" className='link2'>GitHub</Link>
                                </div>    
                                
                                <div className='picLinkColumn'>
                                <div id="projects" className='miniTitle'>Calculator</div>
                                <img alt="alt"  src={calculator} onClick={()=>displayLargeImage(calculator)}className='projectPicSize'></img>
                                <Link to="https://github.com/AnthonyMcCullough/Calculator" className='link2'>GitHub</Link>
                                </div>
          
                                </div>


                            </div>





                        </div>





                      



                    </div>
                    <div className='navSection'>
                        
                       <AnchorLink href="#aboutMe" className='link'>
                        <button id="1" className='btn'>About Me</button>
                        </AnchorLink>
                        
                        <AnchorLink href="#skills" className='link'>
                        <button id="2" className='btn'>Skills</button>
                        </AnchorLink>

                        <AnchorLink href="#projects" className='link'>
                        <button id="3" className='btn'>Projects</button>
                        </AnchorLink>
                        
                        <AnchorLink href="#contactForm" className='link'>
                        <button className='btn'>Contact</button>
                        </AnchorLink>

                    </div>



                </div>

            </div>




        </>
    )

}

export default Portfolio