
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import About from './About';
import Product from './Product';
import Services from './Services';

import { Carousel } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    const [contact, setContact] = useState(false);
    const [home, setHome] = useState(true);
    const [section, setSection] = useState('HOME'); // Default section is 'home'
    const [productName, setProductName] = useState('helmet');
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    const carouselImages = [
        '/images/slider3.jpg',
        '/images/slider2.jpg',
        '/images/slider1.jpg',
    ];


    //useEffect(() => {
    //    // Initialize the carousel when the component mounts
    //    const carousel = new window.bootstrap.Carousel(document.getElementById('carouselExampleCaptions'), {
    //        interval: 2000, // Set the interval for automatic sliding (in milliseconds)
    //        wrap: false, // Enable carousel wrap (circular sliding)
    //    });
    //}, []);


    const setStates = (product) => {
        setProductName(product);
        setSection('PRODUCTS');
    }
  

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
           
                <div className="custom-footer-bg">
                <div className="centered-content p-2">
                    <div className="color3">
                <marquee width='800' behavior='alternate'>
                    <a href="tel:8888401513"> <i className="fa fa-phone"></i> 88884015132/</a>
                    <a href="tel:7588489516"> 75884893516 | </a>
                        <a href="mailto:fierosafety@gmail.com"> <i className="fa fa-envelope"></i> fierosafetyat@gmail.com </a>
                        </marquee>  </div>
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
                <img src="/2.png" alt="" className="responsive-image" style={{ marginLeft: '15vh' }} />
                
                <img src="/4.png" alt="" className="responsive-image" style={{ marginLeft: '5vh' }} />
              
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

            <div className={`custom-footer-bg2 ${isSticky ? 'sticky-navbar' : ''}`}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className={`nav-item ${section === 'HOME' ? 'active' : ''}`}>
                                    <a className="nav-link" href="#" onClick={() => setSection('HOME')}>HOME</a>
                                </li>
                                <li className={`nav-item ${section === 'ABOUT' ? 'active' : ''}`}>
                                    <a className="nav-link" href="#" onClick={() => setSection('ABOUT')}>ABOUT US</a>
                                </li>
                                <li className={`nav-item dropdown ${section === 'PRODUCTS' ? 'active' : ''}`}>
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setSection('PRODUCTS')}>
                                        PRODUCTS
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#" onClick={() => setStates('helmet')}>Fire Helmet</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => setStates('fire_extingusher')}>Fire Extinguisher</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => setStates('fire_alarm')}>Fire Alarm</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => setStates('fire_spinkler')}>Sprinkler System</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => setStates('fire_suppression')}>Suppression System</a></li>
                                        {/* Add other product items as needed */}
                                    </ul>
                                </li>
                                <li className={`nav-item ${section === 'SERVICES' ? 'active' : ''}`}>
                                    <a className="nav-link" href="#" onClick={() => setSection('SERVICES')}>SERVICES</a>
                                </li>
                                <li className={`nav-item ${section === 'CERTIFICATION' ? 'active' : ''}`}>
                                    <a className="nav-link" href="#" onClick={() => setSection('CERTIFICATION')}>CERTIFICATION</a>
                                </li>
                                <li className={`nav-item ${section === 'CONTACT' ? 'active' : ''}`}>
                                    <a className="nav-link" href="#" onClick={() => setSection('CONTACT')}>CONTACT US</a>
                                </li>
                                <li className={`nav-item ${section === 'BROCHURE' ? 'active' : ''}`}>
                                    <a className="nav-link" href="/images/Fierosafety Business Details.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setSection('BROCHURE')}>BROCHURE</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
</div>

            <div> <a
                href="https://api.whatsapp.com/send?phone=9356548301"
                className="whatsapp-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa fa-whatsapp"></i>
            </a></div>




            
              
              
                {section === "HOME" &&
                        <>

                        
                <div className="container">
                    {/* ... Your other content ... */}
                    <div className="row">
                        <div className="col-12">
                            <Slider {...carouselSettings}>
                                {carouselImages.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`Slide ${index + 1}`} className="d-block w-100 img-fluid" />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    {/* ... Rest of your content ... */}
                </div>


                    <div className="col-12 row p-4">
                        <div className="col-7 row ">
                                <h2 className='color1' style={{ marginBottom: '0px' }}>WE ARE FIERO SAFETY PVT.LTD.</h2> 
                                <hr className="custom-hr" style={{ backgroundColor: 'red'} } />
                                <p className="color2" >SHIELDON Fire & Safety Pvt. Ltd. is a fire protection company that delivers quality fire protection systems and safety solutions under one roof. We protect lives and property while providing an exceptional value to our customers. we strive to become a full-service, world class fire protection organization.
                                We have experience with the commercial, industrial or residential marketplaces. At SHIELDON Fire & Safety Pvt. Ltd., we provide a host of fire protection services and fire safety consultancy for all types of buildings to provide your needs as a full service fire protection company.</p>
                            </div>
                            <div className="col-5" style={{ marginLeft:'3vh' }}>
                            <img src="/brochure front page new.jpg" alt="" className="compressed-image1" />
                        </div>
                        </div>

                </>}

            {section === "CONTACT" &&
                <ContactForm />}

            {section === "ABOUT" &&
                <About />}

            {section === "PRODUCTS" &&
                <Product
                    productName={productName}
                />}
            {section === "SERVICES" &&
                <Services/>}




      


                    <div className="custom-footer-bg3" >
                <div className="custom-footer p-3">
                    <div className="contact-info">
                        <h5>Contact Info</h5>
                        <hr className="custom-hr" />
                        <p style={{ marginTop: '25px' }}>
                                    
                                    <i className="fa fas fa-home" style={{ marginRight: '10px' }}></i>
                                    
                                    Vidya Vasant Park, Front of New Law College, Kalamba, Nashik - 416007

                        </p>
                                <p>
                                    
                                    <i className="fa fa-phone" style={{ marginRight: '10px' }}></i>
                                    75884899516/88889401513
                        </p>
                        <p style={{ marginBottom: '25px' }}>
                                    <i className="fa fa-envelope" style={{ marginRight: '10px' }}></i>
                                    fierosafetyat@gmail.com
                        </p>
                    </div>
                    <div className="contact-info">
                        <h5>Useful Links</h5>
                        <hr className="custom-hr" />
                        <p><i class="fa fa-solid fa-caret-right"></i> Home<i class="fa fa-solid fa-caret-right" style={{ marginLeft:'10vw' }}></i> Certification</p>
                        <p><i class="fa fa-solid fa-caret-right"></i> About Us<i class="fa fa-solid fa-caret-right" style={{ marginLeft: '8vw' }}></i> Contact Us</p>
                        <p><i class="fa fa-solid fa-caret-right"></i> Products<i class="fa fa-solid fa-caret-right" style={{ marginLeft: '8vw' }}></i> Broucher</p>
                        <p><i class="fa fa-solid fa-caret-right"></i> Services</p>
                       

                    </div>

                    <div className="clearfix"></div>
                    <hr className="custom-hr" />


                    <div className="copyright-notice">
                        Copyright @2023 All Rights Reserved | By Software Development Cell,Ahmednagar

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
