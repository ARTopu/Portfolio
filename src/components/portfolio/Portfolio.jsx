import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.jpg"
import IMG6 from "../../assets/portfolio6.jpg"

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id:1,
    image:IMG1,
    title:"E-Learning [ASP.NET]",
    github:"https://github.com/ARTopu/E-Learning/tree/main/E-Learning",
    demo: "https://github.com/ARTopu/E-Learning/tree/main/E-Learning"
  },
  {
    id:2,
    image:IMG2,
    title:"Face Eye Detection [Python]",
    github:"https://github.com/ARTopu/Face_Eye_Detection",
    demo: "https://github.com/ARTopu/Face_Eye_Detection"
  },
  {
    id:3,
    image:IMG3,
    title:"Object Detection [Python]",
    github:"https://github.com/ARTopu/Object_Detection",
    demo: "https://github.com/ARTopu/Object_Detection"
  },
  {
    id:4,
    image:IMG4,
    title:"Live Chat [ASP.NET]",
    github:"https://github.com/ARTopu/LiveChat",
    demo: "https://github.com/ARTopu/LiveChat"
  },
  {
    id:5,
    image:IMG5,
    title:"MovieLand [React.JS]",
    github:"https://github.com/ARTopu/MovieLand",
    demo: "https://github.com/ARTopu/MovieLand"
  },
  {
    id:6,
    image:IMG6,
    title:"Pharmacy Management System [PHP, JavaScript]",
    github:"https://github.com/ARTopu/Pharmacy_Management_System",
    demo: "https://github.com/ARTopu/Pharmacy_Management_System"
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=> {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={image} alt={title}/>
                </div> 
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
export default Portfolio;