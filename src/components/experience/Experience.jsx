import React from 'react';
import "./experience.css";
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>ReactJS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Tailwild CSS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>NextJS</h4>
                <small className='text-light'>beginner</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>AngularJS</h4>
                <small className='text-light'>beginner</small>
                </div>
            </article>
          </div>
        </div>
        {/* END of FRONTEND */}
       <div className="experience__backend">
       <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>ASP.NET Core</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Node.js</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>SQL</h4>
                <small className='text-light'>Basic</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Postman API</h4>
                <small className='text-light'>beginner</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>MongoDB</h4>
                <small className='text-light'>beginner</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Express.js</h4>
                <small className='text-light'>beginner</small>
                </div>
            </article>
          </div>
       </div>
      </div>
    </section>
  )
}
export default Experience;