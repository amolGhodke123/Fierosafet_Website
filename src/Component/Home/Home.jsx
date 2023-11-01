
import React, { useState } from 'react';
import ContactForm from './ContactForm';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    const [contact, setContact] = useState(false);
    const [home, setHome] = useState(true);

    return (
        <>
           
                <div className="custom-footer-bg">
                <div className="centered-content p-2">
                <div className="color3">
                    <a href="tel:8888401513"> <i className="fa fa-phone"></i> 8888401513 /</a>
                    <a href="tel:7588489516"> 7588489516 | </a>
                    <a href="mailto:fierosafety@gmail.com"> <i className="fa fa-envelope"></i> fierosafety@gmail.com </a>
                    </div>
                </div>
            </div>
            <div className="custom-footer-bg1 mb-4" style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/finalfs.png" alt="" className="compressed-image" />
                <div className="color4">
                    FIERO SAFETY SERVICES PVT.LTD.
                    <div className="color5">
                        We keep you safe...!!!
                    </div>
                   
                </div>
             {/*   <img src="/2.png" alt="" style={{marginLeft:'6vh'} } />*/}
              
                <div style={{ position: 'absolute', top: 70, right: 20 }}>
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
            <div className="custom-footer-bg2">
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




                    <div>
                {contact ? <ContactForm /> :
                <>
                    { home &&

                    <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/images/slider3.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="/images/slider1.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="/images/slider2.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                        }



                    <div className="col-12 row">
                        <div className="col-8 row p-4">
                            <h2 className='color1'>WE ARE FIERO SAFETY PVT.LTD.</h2> <hr  />
                            <p className="color2">SHIELDON Fire & Safety Pvt. Ltd. is a fire protection company that delivers quality fire protection systems and safety solutions under one roof. We protect lives and property while providing an exceptional value to our customers. we strive to become a full-service, world class fire protection organization.
                                We have experience with the commercial, industrial or residential marketplaces. At SHIELDON Fire & Safety Pvt. Ltd., we provide a host of fire protection services and fire safety consultancy for all types of buildings to provide your needs as a full service fire protection company.</p>
                        </div>
                        <div className="col-4 p-4">
                            <img src="/brochure front page new.jpg" alt="" className="compressed-image1" />
                        </div>
                        </div>

                    </>
}

            </div>


                    <div className="custom-footer-bg3" >
                <div className="custom-footer p-3">
                    <div className="contact-info">
                        <h5>Contact Info</h5>
                        <hr className="custom-hr" />
                        <p style={{ marginTop: '25px' }}>
                                    
                                    <i className="fa fas fa-home" style={{ marginRight: '10px' }}></i>
                                    
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
                        <hr className="custom-hr" />
                                <p><i class="fa fa-solid fa-bars"></i>Home</p>
                                <p>About Us</p>
                        <p>Contact</p>
                       

                    </div>
                    <div className="clearfix"></div>
                    <hr className="custom-hr" />


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
        
            
        </>
       
    );
}

export default Home;
