import React from 'react'
import './Projects.css'

import img1 from '../../assest/myglam.png'
import img2 from '../../assest/dermstore.png'


const data =[
  {
    id:1,
    image:img1,
    title:'MyGlam.com',
    github:'https://github.com/mrprincesingh/eager-mice-5540',
    demo:'https://magnificent-starship-340b64.netlify.app/',
    discription:"It was a group project which was completed with in 5days , MyGlam is a ecommerce website which is specialized in Beauty product",
    TechStack:"HTML , CSS , JavaScript"

  },
  {
    id:2,
    image:img2,
    title:'Dermstore.com',
    github:'https://github.com/nrishav007/Dermstore_Clone',
   demo:'https://dermstore-clone-chi.vercel.app/',
   discription:"Dermstore is US web store which sells cosmetics and skin care products. ",
    TechStack:"HTML , CSS , JavaScript"
  },
  {
    id:3,
    image:img1,
    title:'MyGlam.com',
    github:'https://github.com/mrprincesingh/eager-mice-5540',
    demo:'https://magnificent-starship-340b64.netlify.app/',
    discription:"It was a group project which was completed with in 5days , MyGlam is a ecommerce website which is specialized in Beauty product",
    TechStack:"HTML , CSS , JavaScript"

  },
 
]
const Project = () => {
  return (
    <section id='Project'>
     
      <h2 className='main_head'>My Recent Projects</h2>

      <div className='container Project__container'>
        {
          data.map(({id,discription,TechStack, image, title, github, demo})=>{
            return (
              <article key={id} className="Project__item">
          <div className="Project__item-image">
            <img src={image} alt={title} width="300px" />
            </div>
            <h3>{title}</h3>
            <p style={{color:"black"}}>Discription:{discription}</p>
            <p style={{color:"black"}}>TechStack : {TechStack}</p>
            <div className='Project__item-cta'>
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

export default Project
