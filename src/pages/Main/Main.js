import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './mainStyle.css'

export const Main = () => {
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
            </section>



        </div>
    )
}
