import React from 'react'
import avatar from '../styles/img/avatar.png'
import Scroll from 'react-scroll'
const Element = Scroll.Element;
const Go = Scroll.Link;

const About = () => {
    return (
        <Element name='about' className='element'>
            <section id='aboutsection'>
                <div className="container text-center">
                    <h3 className='mainabout'>ABOUT</h3>
                </div>
                <div className="container text-center">
                    <div className="row" id='aboutrow'>
                        <div className="col-md-5 col-lg-5 col-sm-5 col-xs-12">
                            <h3 className='text-right'><i className='about'>Goals</i></h3>
                            <p className='text-right' id='aboutp'>Lorem ipsum dolor sit amet,
                                ac erat dolor quisque magna consectetur leo, pede nec phasellus
                                 praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo.
                                 Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis
                                 adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh
                                 accumsan eleifend. Purus ut vitae sapien dui duis dolores,
                                porttitor tempus nascetur id ut, integer ut dignissim harum. </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-sm-2 col-xs-12"><img className='img-responsive avatar' src={avatar} alt="" /></div>
                        <div className="col-md-5 col-lg-5 col-sm-5 col-xs-12">
                            <h3 className='text-left'><i className='about'>Dreams</i></h3>
                            <p className='text-left' id='aboutp'>Lorem ipsum dolor sit amet,
                                ac erat dolor quisque magna consectetur leo, pede nec phasellus
                                 praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo.
                                 Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis
                                 adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh
                                 accumsan eleifend. Purus ut vitae sapien dui duis dolores,
                                porttitor tempus nascetur id ut, integer ut dignissim harum. </p>
                        </div>
                    </div>
                </div>
            </section>
        </Element>

    )
}

export default About;