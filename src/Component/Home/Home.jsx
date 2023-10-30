
import React, { useState } from 'react';
import ContactForm from './ContactForm';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    const [contact, setContact] = useState(false);
    return (
        <>
            {contact ? 
<div>
  {/*    <link*/}
  {/*      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"*/}
  {/*      rel="stylesheet"*/}
  {/*    />*/}
  {/*    <link*/}
  {/*  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"*/}
  {/*  rel="stylesheet"*/}
  {/*/>*/}
                    <ContactForm />
    </div>                :
            <>
                <div className="custom-footer-bg p-3">
                <div className="centered-content">
                    <a href="tel:8888401513"> <i className="fa fa-phone"></i> 8888401513 /</a>
                    <a href="tel:7588489516"> 7588489516 | </a>
                    <a href="mailto:fierosafety@gmail.com"> <i className="fa fa-envelope"></i> fierosafety@gmail.com </a>
                </div>
            </div>
            <div className="custom-footer-bg1">
                <img src="/finalfs.png" alt="" className="compressed-image" />
                <div style={{ position: 'absolute', top: 90, right: 20 }}>
                    <ul className="wrapper">
                        <li className="icon facebook">
                            <span className="tooltip">Facebook</span>
                            <span><i class="fa fa-brands fa-facebook"></i></span>


                        </li>
                        <li className="icon twitter">
                            <span className="tooltip">Twitter</span>
                            <span><i class="fa fa-brands fa-twitter"></i></span>
                        </li>
                        <li className="icon instagram">
                            <span className="tooltip">Instagram</span>
                            <span><i class="fa fa-brands fa-instagram"></i></span>
                        </li>
                        <li className="icon github">
                            <span className="tooltip">Github</span>
                            <span><i class="fa fa-brands fa-github"></i></span>
                        </li>
                        <li className="icon youtube">
                            <span className="tooltip">Youtube</span>
                            <span><i class="fa fa-brands fa-youtube"></i></span>

                        </li>

                    </ul></div>

            </div>
            <div className="custom-footer-bg2 p-3 mt-2">
                <ul className="nav" >
                    <li className="nav-item dropdown">
                        <a className="nav-link active" style={{ color: 'white', marginRight:'40px' }} aria-current="page" href="#">HOME</a>
                       
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link custom-text-color" style={{ color: 'white', marginRight: '40px' }}>ABOUT US</a>
                       
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" style={{ color: 'white', marginRight: '40px' }}>PRODUCTS <i class="fa fa-solid fa-caret-down"></i></a>
                        <div class="dropdown-content">
                            <ul>
                                <li><a href="#">fire helmet</a></li>
                                <li><a href="#">Dropdown Item Y</a></li>
                                <li><a href="#">Dropdown Item Zjhhhhhhhhhhgk</a></li>

                            </ul>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" aria-disabled="true" style={{ color: 'white', marginRight: '40px' }}>SERVICES</a>
                       
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" style={{ color: 'white', marginRight: '40px' }}>CERTIFICATION</a>
                        
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" onClick={() => setContact(true)} style={{ color: 'white', marginRight: '40px' }}>CONTACT US</a>
                        
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" style={{ color: 'white', marginRight: '40px' }}>BROCHURE</a>
                       
                    </li>
                </ul>


            </div>

                    <div className="custom-footer-bg3 mt-5" >
                <div className="custom-footer p-3">
                    <div className="contact-info">
                        <h5>Contact Info</h5>
                        <hr />
                        <p style={{ marginTop: '25px' }}>
                                    
                                    <i className="fa fa-brands fa-house" style={{ marginRight: '10px' }}></i>
                                    
                                    Vidya Vasant Park, Front of Vasantrao Naik B.Ed. College, Kalamba, Kolhapur - 416007

                        </p>
                                <p>
                                    
                                    <i className="fa fa-phone" style={{ marginRight: '10px' }}></i>
                                    7588489516/8888401513
                        </p>
                        <p style={{ marginBottom: '25px' }}>
                                    <i className="fa fa-envelope" style={{ marginRight: '10px' }}></i>
                                    fierosafety@gmail.com
                        </p>
                    </div>
                    <div className="contact-info">
                        <h5>Useful Links</h5>
                                <hr />
                                <p><i class="fa fa-solid fa-bars"></i>Home</p>
                                <p>About Us</p>
                        <p>Contact</p>
                       

                    </div>
                    <div className="clearfix"></div>
                    <hr />


                    <div className="copyright-notice">
                        Copyright @2023 All Rights Reserved | By Software Development Cell, New Arts,Commerce and Science College,Ahmednagar

                    </div>
                    <div style={{ textAlign: 'center', color: 'black' }}>
                                <ul className="wrapper">
                                    <li className="icon facebook">
                                        <span className="tooltip">Facebook</span>
                                        <span><i class="fa fa-brands fa-facebook"></i></span>


                                    </li>
                                    <li className="icon twitter">
                                        <span className="tooltip">Twitter</span>
                                        <span><i class="fa fa-brands fa-twitter"></i></span>
                                    </li>
                                    <li className="icon instagram">
                                        <span className="tooltip">Instagram</span>
                                        <span><i class="fa fa-brands fa-instagram"></i></span>
                                    </li>
                                    <li className="icon github">
                                        <span className="tooltip">Github</span>
                                        <span><i class="fa fa-brands fa-github"></i></span>
                                    </li>
                                    <li className="icon youtube">
                                        <span className="tooltip">Youtube</span>
                                        <span><i class="fa fa-brands fa-youtube"></i></span>

                                    </li>

                                </ul>
                    </div>
                </div>
                    </div>
        </>}
            
        </>
       
    );
}

export default Home;
