
import React, { useState } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    return (
        <>
            <div className="custom-footer-bg p-3 mt-2">
                <div className="centered-content">
                    <a href="tel:8888401513"> <i className="fa fa-phone"></i> 8888401513 /</a>
                    <a href="tel:7588489516"> 7588489516 | </a>
                    <a href="mailto:fierosafety@gmail.com"> <i className="fa fa-envelope"></i> fierosafety@gmail.com </a>
                </div>
            </div>
            <div className="custom-footer-bg1 p-3 mt-2">
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
                        <a className="nav-link active" style={{ color: 'white' }} aria-current="page" href="#">Admissions</a>
                        <div class="dropdown-content">
                            <ul>
                                <li><a>Admission Form</a></li>
                                <li><a href="#">Dropdown Item 2</a></li>

                                <li><a href="#">Dropdown Item 3</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link custom-text-color" style={{ color: 'white' }}>Link</a>
                        <div class="dropdown-content">
                            <ul>
                                <li><a href="#">Dropdown fgggggggggggggggggggjItem A</a></li>
                                <li><a href="#">Dropdown Item B</a></li>
                                <li><a href="#">Dropdogfjgggggggggggggggggwn Item C</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" style={{ color: 'white' }}>Link</a>
                        <div class="dropdown-content">
                            <ul>
                                <li><a href="#">Dropdown Item Xhjkkkkkkkkkkkkkkkkkkkkkkk</a></li>
                                <li><a href="#">Dropdown Item Y</a></li>
                                <li><a href="#">Dropdown Item Zjhhhhhhhhhhgk</a></li>

                            </ul>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" aria-disabled="true" style={{ color: 'white' }}>Disabled</a>
                        <div class="dropdown-content">
                            <ul>
                                <li><a href="#">Disabled Item jhhhhhhhhhhhhhk1</a></li>
                                <li><a href="#">Disabled Item 2</a></li>
                                <li><a href="#">Disabled Item 3</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" style={{ color: 'white' }}>Link</a>
                        <div class="dropdown-content">
                            <ul>
                                <li><a href="#">Dropdown Item Xhjkkkkkkkkkkkkkkkkkkkkkkk</a></li>
                                <li><a href="#">Dropdown Item Y</a></li>
                                <li><a href="#">Dropdown Item Zjhhhhhhhhhhgk</a></li>

                            </ul>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" style={{ color: 'white' }}>Link</a>
                        <div class="dropdown-content">
                            <ul>
                                <li><a href="#">Dropdown Item Xhjkkkkkkkkkkkkkkkkkkkkkkk</a></li>
                                <li><a href="#">Dropdown Item Y</a></li>
                                <li><a href="#">Dropdown Item Zjhhhhhhhhhhgk</a></li>

                            </ul>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" style={{ color: 'white' }}>Link</a>
                        <div class="dropdown-content">
                            <ul>
                                <li><a href="#">Dropdown Item Xhjkkkkkkkkkkkkkkkkkkkkkkk</a></li>
                                <li><a href="#">Dropdown Item Y</a></li>
                                <li><a href="#">Dropdown Item Zjhhhhhhhhhhgk</a></li>

                            </ul>
                        </div>
                    </li>
                </ul>


            </div>
            <div><i className="fa-solid fa-envelope"></i></div>
            
        </>
       
    );
}

export default Home;
