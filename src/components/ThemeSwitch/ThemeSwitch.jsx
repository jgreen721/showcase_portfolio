import React, {useRef} from 'react'
import {FaMoon,FaSun} from "react-icons/fa"
import { useAppContext } from '../../context/AppContext';
import "./ThemeSwitch.css"

const ThemeSwitch = () => {
    const moonRef = useRef();
    const sunRef = useRef();
    const {appTheme,setAppTheme} = useAppContext()

    const toggleTheme = ()=>{

        setAppTheme((appTheme)=>appTheme == "light" ? "dark" : "light");
    }
  return (
    <div className="theme-switch">
        <label className="theme-label">
            <input onClick={toggleTheme} type="checkbox" />
            <span></span>
            <div className="moon icon-div">
                <FaMoon className={appTheme  == "dark" ? "icon moon-icon hide-icon" : "icon moon-icon raise-icon"}/>
                <FaSun className={appTheme  == "light" ? "icon sun-icon hide-icon" : "icon sun-icon raise-icon"}/>
            </div>
        </label>
    </div>
  )
}

export default ThemeSwitch