import React from 'react';


//import ContactForm from './Contact/ContactForm'
const Product= () => {


    return (
        <>
            <img src="/images/pumproom.jpg" class="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
                <h5 className="colorAbout"> About Us</h5>

                <p>Some representative placeholder content for the first slide.</p>
            </div>

            
                <div className="col-md-12 row p-3">
                    <div className="col-md-6">
                        <img style={{ height: "300px", width: "500px", marginLeft: "20px" }} src="/images/slider1.jpg" />
                    </div>
                    <div className="col-md-6">
                        <h1>FIRE PROTECTION SYSTEM</h1>
                        <h3>(DRY & WET RISER SYSTEM) INSTALLATION, COMMISSIONING & TESTING</h3>
                        <p style={{ textAlign: "justify" }} >
                            As part of services, SHIELDON Fire & Safety Pvt. Ltd. provide the installation of new & maintenance of existing fire protection systems such as Dry & Wet Riser System. Our staff of designers designs fire protection systems that are specific to your facility, that will detect and respond to fire conditions to ensure the safety of your occupants and reduce the damage to your facility. Providing you with peace of mind, knowing that your facilities, and the people who live, work and play in them are safe from the ravages of fire.
                        </p>
                    </div>
                </div>
            
        </>
    )

}
export default Product;