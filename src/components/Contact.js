import React, { Component } from 'react'
import Scroll from 'react-scroll'
const Element = Scroll.Element;

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleMessage = this.handleMessage.bind(this);

    }
    handleName(e) {
        e.preventDefault()
        this.setState({ name: e.target.value })
    }
    handleEmail(e) {
        e.preventDefault()
        this.setState({ email: e.target.value })
    }
    handleMessage(e) {
        e.preventDefault()
        this.setState({ message: e.target.value })
    }

    handleClick() {
        let value = {
            Name: document.getElementById('name').value,
            Email: document.getElementById('email').value,
            Message: document.getElementById('message').value
        }
        this.setState({
            name: '',
            message: '',
            email: ''
        })
        console.log(`My name is ${value.Email}; My Email is ${value.Name}; My message is ${value.Message}`)
    }
    render() {
        return (
            <Element name='contact' className='element'>
                <section id='contactsection'>
                    <div className="container text-center ">
                        <h3 className='mainabout' id='main'>CONTACT</h3>
                        <div className="col-md-2 col-lg-2 col-sm-1"></div>
                        <div className="col-md-3 col-lg-3 col-sm-4 text-left">
                            <h5>Phone number:</h5>
                            <p>+38066-66-66-666</p>
                            <h5>Email:</h5>
                            <p>mail@gmail.com</p>
                            <h5>Skype:</h5>
                            <p>mySkypeAcc</p>
                        </div>
                        <div className="col-md-5 col-lg-5 col-sm-7 ">
                            <input type="text" onChange={this.handleName} value={this.state.name} className="form-control" id="name" placeholder="Name" />
                            <input type="email" onChange={this.handleEmail} value={this.state.email} className="form-control" id="email" placeholder="E-mail" />
                            <input type="text" onChange={this.handleMessage} value={this.state.message} className="form-control" id="message" placeholder="Send a message" />
                            <button id="button" onClick={this.handleClick} >SEND</button>
                        </div>
                        <div className="col-md-1 col-lg-1"></div>
                    </div>
                </section>
            </Element>

        );
    }
}

export default Contact;