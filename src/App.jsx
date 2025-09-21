
import { Intro } from "./Component/Intro"
import { Navbar } from "./Component/Navbar/Navbar"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Skill } from "./Component/Skill"
import { Works } from "./Component/Works"
import { Contact } from "./Component/Contact"
import { Footer } from "./Component/Footer"
import {Education} from "./Component/Education"
import {Tool} from "./Component/tool"


export const App=()=>{
  return(
//  <BrowserRouter>
//  <Navbar/>
//  <Routes>
//  <Route path="/" element={<Intro/>}/>
//  <Route path="/about" element={<Skill/>}/>
//  <Route path="/protfolio" element={<Works/>}/>
//  <Route path="/clients" element={<Contact/>}/>
//  </Routes>
//  <Footer/>
//  </BrowserRouter>

<div>
<Navbar/>
<Intro/>
<Skill/>
<Education/>
<Works/>
<Tool/>
<Contact/>
<Footer/>
</div>
  )
}