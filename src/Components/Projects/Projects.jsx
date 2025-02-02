import React from "react";
import "./Projects.css"
import img1 from '/Images/College project.png'
import img2 from '/Images/reactmovie.png'
import img3 from '/Images/weatherapp.png'
const Projects = ()=>{
 return(
    <section id="projects">
        <h5>My Recent Works</h5>
        <h2>Projects</h2>
        <div className="container project_container">
            <article className="project_item">
                <div className="project_item_image">
                <img src={img1} alt="" />
                </div>
                <h3>Smart Classrom with Meeting Feature</h3>
                <small className="text-light">Full-Stack Application </small>
                <div className="project_item_btn">
                    <a href="https://github.com/junaid-hbk" className="btn">GitHub</a>
                </div>
            </article>

            <article className="project_item">
                <div className="project_item_image">
                <img src={img2} alt="" />
                </div>
                <h3>React Movie-website</h3>
                <small className="text-light">Front-End Application </small>
                <div className="project_item_btn">
                    <a href="https://github.com/junaid-hbk" className="btn">GitHub</a>
                </div>
            </article>

            <article className="project_item">
                <div className="project_item_image">
                <img src={img3} alt="" />
                </div>
                <h3>Weather App</h3>
                <small className="text-light">Front-End Application </small>
                <div className="project_item_btn">
                    <a href="https://github.com/junaid-hbk" className="btn">GitHub</a>
                </div>
            </article>
        </div>
    </section>
 )
}
export default Projects