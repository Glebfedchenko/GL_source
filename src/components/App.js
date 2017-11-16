import React from 'react'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'

const App = () =>{
    return(
        <section >
            <Header/>
            <About/>
            <Skills/>
            <Contact/>
            <Footer/>
        </section>
    )
}

export default App;