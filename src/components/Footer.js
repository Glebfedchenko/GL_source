import React from 'react'
import logo from '../styles/img/footerlogo.png'
import Scroll from 'react-scroll'
const Element = Scroll.Element;
const Go = Scroll.Link;

const Footer = () => {
    return (
        <Element name='' className='element'>
            <section id='footersection'>
                <div className="col-md-2 col-lg-2 col-sm-1"></div>
                <div className="col-md-4 col-lg-4 col-sm-4 col-xs-6" id='footerinfo'>
                    <p id='footerp'>Mobile:  +38066-66-66-666</p>
                    <p id='footerp'>Email:    mail@gmail.com</p>
                    <p id='footerp'>Skype:   mySkypeAcc</p>
                </div>
                <div className="col-md-1 col-lg-1 col-sm-2"></div>
                <div className="col-md-4 col-lg-4 col-sm-2 col-xs-6 text-center" id='footerlogo'>
                <Go to="head" spy={true} smooth={true} offset={-100} duration={2000}><img src={logo} alt="" /></Go>
                </div>
                <div className="col-md-1 col-lg-1"></div>

            </section>
        </Element>

    )
}

export default Footer;