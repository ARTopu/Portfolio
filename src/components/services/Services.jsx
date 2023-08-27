import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>MERN Stack Website Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Maintenance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>E-Commerce Setup</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Portfolio Sites for Creatives</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Performance Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Basic Graphic Design Elements</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integration of Third-Party Services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Basic JavaScript Interactivity</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Hosting and Domain Setup</p>
            </li>
          </ul>
        </article>
        {/* END of Web Development */}
        <article className='service'>
          <div className='service__head'>
            <h3>Software Quality Assurance</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manual Testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Test Case Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Bug Reporting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Test Documentation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Usability Testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Load and Performance Testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Test Environment Setup</p>
            </li>
          </ul>
        </article>
        {/* END of Software Quality Assurance */}
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UX Research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information Architecture</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframing and Prototyping</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visual Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Design</p>
            </li>
          </ul>
        </article>
        {/* END of UI/UX */}
      </div>
    </section>
  )
}
export default Services