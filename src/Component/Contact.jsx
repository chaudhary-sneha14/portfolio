import FacebookIcon from '../assets/facebook-icon.png'
import YouTubeIcon from "../assets/youtube.png"
import TwitterIcon from "../assets/twitter.png"
import InstagramIcon from "../assets/instagram.png"
import emailjs from '@emailjs/browser';
import { useRef } from 'react'



export const Contact=()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_hdq8j1r', 'template_0rak2ra', form.current, {
            publicKey: 'Tpb2ZRzBwsf16CLpK',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert("email sent succesfully")
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };


    return(
        <section id="contactPage">
          
            <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form  className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name' />
                <input type="email" className="email" placeholder='Your Email' name='your_email' />
                <textarea name="message" rows="5" placeholder='Your Message' className="msg"></textarea>
                <button type='submit'  value='send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} className="link" />
                    <img src={TwitterIcon} className="link" />
                    <img src={YouTubeIcon} className="link" />
                    <img src={InstagramIcon} className="link" />
                </div>
            </form>


            </div>
        </section>
    )
}