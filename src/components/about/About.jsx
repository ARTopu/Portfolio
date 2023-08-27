import React from 'react';
import"./about.css";
import ME from "../../assets/about_me.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about--cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ World Wide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
            <p>
            Welcome to my website my name is Atiqur Rahman. I am a recent Computer
             Science graduate who is highly motivated and pays great attention to detail. 
             My passion lies in web development and I am excited to utilize my knowledge and 
             skills to design captivating and user-friendly websites. I am actively seeking a stimulating 
             role as a web developer, where I can contribute to the progress and achievements of a forward-thinking organization.
            </p>
            <a href='#contact' className='btn btn-primary' id='a'>Let's Talk</a>
          </div>
        </div>

      </div>
    </section>
  )
}
export default About;