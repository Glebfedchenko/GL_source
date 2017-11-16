import React, { Component } from 'react'
import logo from '../styles/img/logo.png';
import Scroll from 'react-scroll'
const Element = Scroll.Element;
const Go = Scroll.Link;

const Header = ()=>{
    return (
        <Element name='head' className='element'>
        <section id='headersection'>
            <div id="headersubsection">
                <nav className="navbar navbar-default navbar-static-top" id='allnav'>
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Go to="head" spy={true} smooth={true} offset={-100} duration={2000}>Home</Go></li>
                                <li ><Go to="about" spy={true} smooth={true} offset={0} duration={2000}>About </Go></li>
                                <li><Go to="skills" spy={true} smooth={true} offset={20} duration={2000}>Skills</Go></li>
                                <li ><Go to="contact" spy={true} smooth={true} offset={500} duration={2000}>Contact </Go></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container text-center col-xs-12" id='heading'>
                    <h1 id='fg'>GLEB FEDCHENKO</h1>
                    <h2 id='fe'><i>FRONT-END DEVELOPER</i></h2>
                </div>
            </div>
        </section>
        </Element>
    )
}


export default Header;