import React, {useState} from "react"
import '../styles/global.css'
import "./component-styles/HamburgerButton.css"

const HamburgerButton = ({isOpen, onClick}) => {
    return(
        <div className="menu-container" onClick={()=>onClick()}>
            <div className={`transform bg-white line1 ${ isOpen ? "rotate-45 translate-y-2.5" : "rotate-0" }`}></div>
            <div className={`transform bg-white line2 ${ isOpen ? "rotate-80 opacity-0" : "rotate-0" }`}></div>
            <div className={`transform bg-white line3 ${ isOpen ? "-rotate-45 -translate-y-2.5" : "rotate-0" }`}></div>
        </div>
    );
}

export default HamburgerButton