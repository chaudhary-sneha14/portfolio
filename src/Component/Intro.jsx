import { NavLink } from "react-router-dom"

import kuki from"../assets/kuki.jpg"
// import kuki from"../assets/kuki-removebg-preview.png"

import btnImg from "../assets/hireme.png"

export const Intro=()=>{

    return(
       
       <section id="intro">
        <div className="introContent">

            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Sneha</span> <br />Full Stack Developer</span>
            <p className="introPara">I’m a passionate Full Stack Web Developer and a B.Tech Computer Science <br/> student at KIET (AKTU) with a GPA of 8.9. Skilled in HTML, CSS, JavaScript,<br/> React, Mongodb, Nodejs 
             and Tailwind CSS, I specialize in building modern,<br/> responsive, and user-friendly websites..</p>
            <a href="#contact">
            <button className="btn">
            <img src={btnImg} className="btnImg" alt="Hire me" />
             Hire Me
             </button>
             </a>
            </div>
            <img src={kuki} alt="profile" className="bg" />  
            {/* <img src={bg} alt="profile" className="bg" /> */}
       
       </section>
    )
}