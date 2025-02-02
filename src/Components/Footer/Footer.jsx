import React from "react"
import "./Footer.css"
import { BsGithub, BsInstagram, BsCodeSquare } from 'react-icons/bs';
const Footer = ()=>{
return(<footer>
<a href="#home" className="footer_logo">Junaid</a>
<ul className="links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#projects">Project</a></li>
</ul>
<div className="footer_social">
     <a href="https://github.com/junaid-hbk"><BsGithub /></a>
     <a href="https://www.instagram.com/junaid_hbk"><BsInstagram /></a>
     <a href="https://codepen.io/Junaid-Mansuri"><BsCodeSquare /></a>
</div>

<div className="footer_copyright">
        <small>&copy; Mansuri Junaid. All right are Reserved</small>
</div>
</footer>)
}
export default Footer