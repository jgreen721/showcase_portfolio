import React from 'react'
import {Samples} from ".."
import "./AboutMe.css"

const AboutMe = ({data}) => {
  return (
    <div className="about-me-parent">
      <div className="about-me-div">
        <h5 className="thin about-me-h5">Started down this rabbit hole around the time I was busy as an armchair physicist and a little show by the name of <span className="bold"><a className="about-me-link" target="_blank" href="https://siliconvalley.com">Silicon Valley</a></span> came on. I was obsessed and seeing as Ed Witten seemed to have the theoritical physics department pretty well covered and my sophmore level Math probably wouldn't re-invent any new dimensions, I recalibrated my focus. Starting with instructional sites like <span className="bold"><a className="about-me-link" href="https://codecademy.com" target="_blank">Codecademy</a></span> to get some level of a base before I enrolled into a **gasp** coding bootcamp offered thru <span className="bold"><a className="about-me-link" href="https://ucla.com" target="_blank">UCLA</a></span>. Soaked up every detail on the MERN stack teachings and then, a pandemic hit. No worries in continuing on with plenty of computer time and escalating my skills and knowledge. Fast forward a few years and several samples and sites later and here I am, looking for a workplace to contribute to with my skills, knowledge and maybe most valuable of all, <span className="bold">obsessed</span> passion.</h5>
        <h5 className="thin indent">Thanks to <span className="bold"><a className="about-me-link" target="_blank" href="https://frontendmentor.io">FrontEndMentor</a></span> I've accumalated several samples varying from single component snippets up to full-scale sites. Please look around and enjoy!</h5>
      </div>
      <div className="samples-container">
        <Samples data={data}/>
      </div>
   
    </div>
  )
}

export default AboutMe