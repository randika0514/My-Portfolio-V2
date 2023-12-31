import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './mainStyle.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';



export const Main = () => {

    const [counterOn, setCounterOn] = useState(false);



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
                    <button className='home-btn'>Know more</button>
                </div>


                {/* Countdown */}
                <div id='calculation'>
                    <div id='experience'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1 className='count'>
                                {counterOn && <CountUp start={0} end={3} duration={5} delay={0} />}
                                +
                            </h1>
                        </ScrollTrigger>
                        <h4 className='info'>Years Experience</h4>
                    </div>
                    <div id='projects'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1 className='count'>
                                {counterOn && <CountUp start={0} end={10} duration={6} delay={0} />}
                                +
                            </h1>
                        </ScrollTrigger>
                        <h4 className='info'>Projects Done</h4>
                    </div>
                    <div id='clients'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1 className='count'>
                                {counterOn && <CountUp start={0} end={2} duration={2} delay={0} />}
                                +
                            </h1>
                        </ScrollTrigger>
                        <h4 className='info'>Happy Clients</h4>
                    </div>
                </div>

                <div className='profile-photo'>

                </div>
            </section>



        </div>
    )
}
