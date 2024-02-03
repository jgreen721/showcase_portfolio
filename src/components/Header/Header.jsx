import React from 'react'
import "./Header.css";
import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineLaptop} from "react-icons/ai"
import {FaCodepen} from "react-icons/fa"
import { useAppContext } from '../../context/AppContext';
import {Experience} from "../"

const Header = () => {
    const {currCategory} = useAppContext();
  return (
    <div className="header">

      {/* NAME-ROW */}
        <div className="name-row">
                <div className="firstname">
                    <div className="hidden-overflow">
                        <h1 className="name-h1 bold large drop-in delay-3">J</h1>
                    </div>
                    <h1 className="name-h1 mid-thin rotate-focus delay-1">u</h1>
                    <h1 className="name-h1 mid-thin rotate-focus delay-2">s</h1>
                    <h1 className="name-h1 mid-thin rotate-focus delay-3">t</h1>
                    <h1 className="name-h1 mid-thin rotate-focus delay-4">i</h1>
                    <h1 className="name-h1 mid-thin rotate-focus delay-5">n</h1>
                </div>
                <div className="lastname">
                    <div className="hidden-overflow">
                        <h1 className="name-h1 bold large drop-in delay-4">G</h1>
                    </div>
                    <h1 className="name-h1 mid-thin rotate-focus delay-1">r</h1>
                    <h1 className="name-h1 mid-thin rotate-focus delay-2">e</h1>
                    <h1 className="name-h1 mid-thin rotate-focus delay-3">e</h1>
                    <h1 className="name-h1 mid-thin rotate-focus delay-4">n</h1>
                </div>
            </div>

            <div className="header-details">
                <div className="header-blurb-description-div">
                    <div className="description-row">
                        <h4 className="mid-thin rise-up delay-4">Front-end developer with <span className="bold rise-up">full</span> stack<strong>+</strong> knowledge</h4>
                    </div>
                    <div className="blurb-div">
                        {/* <h5 className="thin scalegrow delay-6">I build pixel-<strong>perfect</strong>, engaging, and accessible sites.</h5> */}
                        <h5 className="thin scalegrow delay-6 desktop-blurb">From simple components to enchanting fullstack sites, I specialize in bringing pixel-perfect responsiveness and modern HTML standards to life.</h5>
                    </div>
                </div>
                <div className="skill-scene-row">
                <ul className="skills">
                    <li className="skill-item slide-right delay-1">
                        <h3 className={currCategory == "Newbie" ? "bold highlight-skill" : "thin"}>Newbie</h3>
                    </li>
                    <li className="skill-item slide-right delay-2">
                        <h3 className={currCategory == "Beginner" ? "bold highlight-skill" : "thin"}>Beginner</h3>
                    </li>
                    <li className="skill-item slide-right delay-3">
                        <h3 className={currCategory == "Junior" ? "bold highlight-skill" : "thin"}>Junior</h3>
                    </li>
                    <li className="skill-item slide-right delay-4">
                        <h3 className={currCategory == "Senior" ? "bold highlight-skill" : "thin"}>Senior</h3>
                    </li>
                </ul>
               <Experience/>
                </div>

                 <ul className="links">
                    <li className="link-item drop-in delay-0">
                        <a target="_blank" href="https://www.linkedin.com/in/justin-green-2484513b/">
                            <AiOutlineLinkedin className="media-icon"/>
                        </a>
                    </li>
                    <li className="link-item drop-in delay-1">
                        <a target="_blank" href="https://github.com/jgreen721">
                            <AiOutlineGithub className="media-icon"/>
                        </a>
                    </li>
                    <li className="link-item drop-in delay-2">
                        <a target="_blank" href="https://codepen.io/jgreen721">
                            <FaCodepen className="media-icon"/>
                        </a>
                    </li>
                    <li className="link-item drop-in delay-3">
                        <a target="_blank" href="https://www.instagram.com/justng2d1/">
                            <AiOutlineInstagram className="media-icon"/>
                        </a>
                    </li>
                    <li className="link-item drop-in delay-4">
                        <a target="_blank" href="https://www.frontendmentor.io/profile/jgreen721">
                            <AiOutlineLaptop className="media-icon"/>
                        </a>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Header