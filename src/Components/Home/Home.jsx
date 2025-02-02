import React from "react";
import { BsGithub, BsInstagram, BsCodeSquare } from 'react-icons/bs';
import suit1 from '/Images/newsuit.png';

import './Home.css';

const Home = () => {
    return (
        <>
            <header id="home">
                <div className="container home_container">
                    <h5>Hello, I'm</h5>
                    <h1>Mansuri Junaid</h1>
                    <h5 className="text-light">Frontend Software Engineer</h5>
                    <div className="cta">
                    <a href="/Resume/Junaid_Mansuri_Resume (2).pdf" download className="btn">
                            Download CV
                        </a>
                        <a href="#contact" className="btn btn-primary">
                            Contact Me
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://github.com/junaid-hbk"><BsGithub /></a>
                        <a href="https://www.instagram.com/junaid_hbk"><BsInstagram /></a>
                        <a href="https://codepen.io/Junaid-Mansuri"><BsCodeSquare /></a>
                    </div>
                    <div className="myimg">
                        <img src={suit1} alt="My Image" />
                    </div>
                    <a href="#contact" className="scrolldown">
                        Scroll Down
                    </a>
                </div>
            </header>
        </>
    );
}

export default Home;
