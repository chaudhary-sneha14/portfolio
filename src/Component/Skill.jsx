import UIDesign from "../assets/ui-design.png"
import WebDesign from "../assets/website-design.png"
import AppDesign from "../assets/app-design.png"


export const Skill=()=>{
    return(
        <section className="skills" id="skills">
            <span className="skillTitle">What I do</span>
            {/* <span className="skillDesc">I am a highly motivated Computer Science student at KIET (AKTU) with a 9.1 GPA, passionate about designing and
                 developing dynamic and responsive web applications. Skilled in HTML, CSS, JavaScript (ES6+),
                 React, Tailwind CSS, and the MERN stack, I enjoy transforming ideas into full-stack solutions that are both functional and user-friendly. </span> */}
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIdesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Frontened Design</h2>
                        <p>Create user-friendly and intuitive digital interfaces.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={WebDesign} alt="UIdesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Backened Developer</h2>
                        <p> Design responsive and modern websites.</p>
                    </div>

                </div>

                <div className="skillBar">
                    <img src={AppDesign} alt="UIdesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Full stack Developer</h2>
                        <p>Build clean, functional website layouts.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}