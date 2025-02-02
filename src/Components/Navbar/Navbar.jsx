import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FaLaptopCode } from 'react-icons/fa';
import { GoChecklist } from 'react-icons/go';
import { BiMessageAltDetail } from "react-icons/bi";

import './Navbar.css'
const Navbar = () => {
    const [active,setActive] = useState("#");
    return(
        <nav>
                  <a href="#"
                  onClick={()=> setActive("#")}
                  className={active === "#" ? "active" : ""}
                  >
                    < AiOutlineHome/>
                  </a>
                  <a href="#about"
                   onClick={()=> setActive("#about")}
                   className={active === "#about" ? "active" : ""}
                   >
                  < BiUser/>
                  </a>
                  <a href="#experience"
                   onClick={()=> setActive("#experience")}
                   className={active === "#experience" ? "active" : ""}
                   >
                  < FaLaptopCode/>
                  </a>
                  <a href="#projects"
                   onClick={()=> setActive("#project")}
                   className={active === "#project" ? "active" : ""}
                   >
                  < GoChecklist/>
                  </a>
                  <a href="#contact"
                  onClick={()=> setActive("#contact")}
                  className={active === "#contact" ? "active" : ""}
                  >
                   < BiMessageAltDetail/>
                  </a>
              </nav> )
}

export default Navbar;
