import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './mainStyle.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


// import Aos from 'aos';

export const Main = () => {

    const [counterOn,setCounterOn] = useState(false);
    


    return (
        <div>

            {/* Navbar */}
            <NavBar />

            <section id="hero" className="jumbotron">
                <div className="container">
                    <h1 className="hero-title load-hidden">
                        Hi, My name is <span className="text-color-main">Randika</span>
                        <br />
                        I'm the Frontend Developer.
                    </h1>
                    <p className="hero-cta load-hidden">
                        <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">Know more</a>
                    </p>
                </div>

                <div id='calculation'>
                        <div id='experience'>
                            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                            <h1 className='count'>
                                {counterOn && <CountUp start={0} end={3} duration={5} delay={0}/>}
                                +
                            </h1>
                            </ScrollTrigger>
                            <h4 className='info'>Years Experience</h4>
                        </div>
                        <div id='projects'>
                            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                            <h1 className='count'>
                                {counterOn && <CountUp start={0} end={8} duration={8} delay={0}/>}
                                +
                            </h1>
                            </ScrollTrigger>
                            <h4 className='info'>Projects Done</h4>
                        </div>
                        <div id='clients'>
                            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                            <h1 className='count'>
                                {counterOn && <CountUp start={0} end={2} duration={2} delay={0}/>}
                                +
                            </h1>
                            </ScrollTrigger>
                            <h4 className='info'>Happy Clients</h4>
                        </div>
                    </div>
            </section>



        </div>
    )
}
