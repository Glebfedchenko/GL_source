import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Scroll from 'react-scroll'
const Element = Scroll.Element;

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [
                { name: "HTML5", level: 8 },
                { name: "CSS3", level: 5 },
                { name: "JavaScript", level: 10 },
                { name: "ReactJS", level: 8 },
                { name: "AngularJS", level: 8 },]
        }
    }
    render() {
        return (
            <Element name='skills' className='element'>

                <section id='skillssection'>
                    <div className="container text-center" id='aboutrow'>
                        <h3 className='mainskills' id='main'>SKILLS</h3>
                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 text-right">
                            {this.state.skills.map((s, i) => {
                                return (
                                    <div className='skillName' key={i}>
                                        {s.name}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 text-left">
                            {this.state.skills.map((s, i) => {
                                return (
                                    <div key={i} className='rate'>
                                        <StarRatingComponent
                                            name="rate1"
                                            value={s.level}
                                            starCount={10}
                                            editing={false}
                                            renderStarIcon={(index, value) => {
                                                return <span className={index <= value ? 'fa fa-circle' : 'fa fa-circle grey'} />;
                                            }}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </Element>

        );
    }
}

export default Skills;