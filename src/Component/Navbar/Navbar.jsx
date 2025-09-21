import logo from "../../assets/Sneha_logo.png"
import contactImg from "../../assets/contact.png"
import { Link } from 'react-scroll';
import menu from "../../assets/menu.png"
import { useState } from "react";


export const Navbar=()=>{
    
    const[showMenu,setshowMenu] =useState(false)

    return(
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktopMenu">
                {/* <NavLink to="/" className="desktopMenuListItem">Home</NavLink>
                <NavLink to="/about" className="desktopMenuListItem">About</NavLink>
                <NavLink to="/protfolio" className="desktopMenuListItem">Portfolio</NavLink>
                <NavLink to="/clients" className="desktopMenuListItem">Clients</NavLink> */}

        {/* <a href="#intro" offset={-50} className="desktopMenuListItem">Home</a>
        <a href="#skills" className="desktopMenuListItem">About</a>
        <a href="#works" className="desktopMenuListItem">Portfolio</a>
        <a href="#clients" className="desktopMenuListItem">Clients</a> */}

      <Link to="intro" smooth={true} offset={-50} className="desktopMenuListItem" activeClass="active">Home</Link>
      <Link to="skills" smooth={true} offset={-50} className="desktopMenuListItem" activeClass="active">About</Link>
      <Link to="work" smooth={true} offset={-50} className="desktopMenuListItem" activeClass="active">Work</Link>
      <Link to="education" smooth={true} offset={-50} className="desktopMenuListItem" activeClass="active">Education</Link>
      <Link to="tool" smooth={true} offset={-50} className="desktopMenuListItem" activeClass="active">Skills</Link>
      


            </div>
            <a href="#contact">
            <button className="desktopMenuBtn">
                <img src={contactImg} className="desktopMenuImg" /> Contact Me 
            </button>
            </a>

{/* _______________________for phone_________________ */}
            <img src={menu} alt="logo" className="mobMenu" onClick={()=>{setshowMenu(!showMenu)}} />
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link to="intro" smooth offset={-50} duration={500} spy className="ListItem"onClick={()=>{setshowMenu(false)}} activeClass="active">Home</Link>
            <Link to="skills" smooth offset={-50} duration={500} spy className="ListItem" onClick={()=>{setshowMenu(false)}}activeClass="active">About</Link>
           <Link to="work" smooth offset={-50} duration={500} spy className="ListItem" onClick={()=>{setshowMenu(false)}}activeClass="active">Work</Link>
           <Link to="education" smooth offset={-50} duration={500} spy className="ListItem"onClick={()=>{setshowMenu(false)}} activeClass="active">Education</Link>
           <Link to="tool" smooth offset={-50} duration={500} spy className="ListItem"onClick={()=>{setshowMenu(false)}} activeClass="active">Skills</Link>
           <Link to="contact" smooth offset={-50} duration={500} spy className="ListItem" onClick={()=>{setshowMenu(false)}}activeClass="active">Contact</Link>


            </div>

            
        </nav>
    )
}