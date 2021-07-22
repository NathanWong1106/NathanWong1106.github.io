import React, {useState} from "react"
import HamburgerButton from "./HamburgerButton";
import "./component-styles/Navbar.css"
import logo from '../images/Logo.png'

//Scrollto IDs prefixed with #

const Navbar = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openClose = () => {
        setIsOpen(!isOpen)
        
        //Since we set state in the same function, we don't have access to the updated bool
        //Workaround by using negation of isOpen
        let body = document.getElementsByTagName("BODY")[0];
        body.style.overflow = !isOpen ? window.innerWidth < 768 ? "hidden" : "auto" : "auto";
    };

    const navLinksCol = data.allMdx.nodes.map(node => {
        return <div className={`transform duration-500 my-6 hover:scale-105 text-2xl mx-5`} onClick={() => openClose()} key={node.id}><a className="text-white hover:text-lightGray" href={`#${node.frontmatter.title}`}>{node.frontmatter.title}</a></div>
    });
    
    const navLinksRow = data.allMdx.nodes.map(node => {
        return <div className={`transform duration-500 my-3 mx-5 hover:scale-105 text-xl`} key={node.id}><a className="text-white hover:text-lightGray" href={`#${node.frontmatter.title}`}>{node.frontmatter.title}</a></div>
    });

    /* For some reason md:navbar-shown does the exact opposite of what is expected... if it works don't touch it lol */
    return(
        <nav className={`fixed transition duration-500 top-0 z-50 min-w-full backdrop-filter overflow-hidden
        ${isOpen ? "shadow-lg backdrop-blur-lg navbar-shown" : "shadow-lg md:shadow-none navbar-hidden backdrop-blur-lg md:backdrop-blur-none"}`}>
            <div className="z-50 logo">
                <a href="#Intro">
                    <img src={logo} className="filter drop-shadow-lg h-12 w-12"/>
                </a>
            </div>
            <div className="z-50 menu-button">
                <HamburgerButton isOpen={isOpen} onClick={() => openClose()}/>
            </div>
            <div className={`z-40 flex flex-col content-center justify-center md:hidden nav-col bg-transparent text-center font-bold duration-500 ${isOpen ? "nav-col-shown" : "nav-col-hidden"}`}>
                    { navLinksCol }
            </div>
            <div className={`hidden mr-20 md:flex flex-row duration-500 justify-end nav-row ${isOpen ? "nav-row-shown" : "nav-row-hidden"} ml-auto mt-4 mx-5`}>
                    { navLinksRow }
            </div>
        </nav>
    );
}

export default Navbar