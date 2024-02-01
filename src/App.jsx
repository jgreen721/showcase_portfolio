import {useRef,useState} from "react";
import {Header, AboutMe,CursorGlow, ThemeSwitch} from "./components"
import "./App.css"
import { useAppContext } from "./context/AppContext";

function App() {
    const {appTheme,category} = useAppContext()




  return (
    <div data-theme={appTheme} className="app">
      <div className="app-content">
        {/* <CursorGlow/> */}
        {/* <ThemeSwitch/> */}
  
      <div className="app-row">
        <div className="column header-column">
          <Header/>
        </div>
        <div className="column about-column">
          <AboutMe/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
