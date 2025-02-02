import React from "react";
import img from '/Images/hoodieimg.jpeg';
import './About.css'
import {GiGraduateCap} from "react-icons/gi"
import {BsTelephoneForward} from "react-icons/bs"
import {TfiWorld} from "react-icons/tfi"

const  About = ()=>{
return(<section id="about">
<h5>Get to know</h5>
<h2>About Me</h2>
    <div className="container about_container" >
    <div className="about_me">
    <div className="about_me_img">
        <img src={img} alt="Junaid" />
        </div>
    </div>
    <div className="about_content"> 
    <div className="about_cards"> 
    <article className="about_card"> 
            <GiGraduateCap className="about_icons"/>
            <h5>Degree</h5>
            <small>
                BE in Information Technology <br />
                <i>Vansant Dada Patil Prathisthan</i>
                <br />
                <b>Average cgpa: 7.5</b>
            </small>
            </article>

            <article className="about_card"> 
            <TfiWorld className="about_icons"/>
            <h5>Location</h5>
            <small>
                Address : 27, Ali umer Street, siddque bldg, Room no 9 <br />
                Mumbai : 400003 , Mahrashtra
            </small>
            </article> 

            <article className="about_card"> 
            <BsTelephoneForward className="about_icons"/>
            <h5>Contact</h5>
            <small>
                <ul>
                    <li>Phone: 9152358377</li>
                    <li>Email: junaidmansuri989@gmail.com</li>
                    <li>Instagram: Junaid_hbk</li>
                </ul>
            </small>
            </article>   
    </div>
    <p>
        Hii, I'm Mohammed Junaid, a Software Engineer, I have a passion for building robust, scalable, and efficient project
        with a knowledge of in Mongo DB, Express, React, Node.js and Java language. I have craft some front-end project and full-stack projects.
    </p>
    </div>
    </div>
</section>)
}
export default About