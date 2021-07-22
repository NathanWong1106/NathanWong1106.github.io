import React, {useState} from "react"
import HamburgerButton from "./HamburgerButton";
import "./component-styles/Navbar.css"
import logo from '../images/Logo.png'

//Scrollto IDs prefixed with #

const Navbar = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openClose = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = data.allMdx.nodes.map(node => {
        return <div className={`transform duration-500 my-6 hover:scale-105 text-xl md:my-3 mx-5 ${isOpen ? "h-full" : "h-0"}`} key={node.id}><a className="text-white hover:text-lightGray" href={`#${node.frontmatter.title}`}>{node.frontmatter.title}</a></div>
    });

    return(
        <nav className="fixed top-0 z-50 min-w-full">
            <div className={`flex flex-row duration-500 backdrop-filter backdrop-blur md:backdrop-blur-none ${isOpen ? "shadow-none md:shadow-lg md:backdrop-blur-lg" : "shadow-lg md:shadow-none"} md:bg-transparent`}>
                <div className="transform duration-500 hover:scale-105 hover:rotate-12 flex-initial text-3xl md:text-4xl font-extrabold p-5 ml-5">
                    <a className="bg-clip-text text-transparent bg-gradient-to-r from-navy to-turquoise" href="#Intro">
                        <img src={logo} className="filter drop-shadow-lg h-12 w-12"/>
                    </a>
                </div>
                <div className={`hidden md:backdrop-filter md:backgrop-blur-lg md:flex md:flex-row duration-200 justify-end nav-row ${isOpen ? "nav-row-shown" : "nav-row-hidden"} ml-auto mt-4 mx-5`}>
                    {navLinks}
                </div>
                <div className="transform duration-500 hover:scale-105 ml-auto md:ml-5 mt-6 mx-5">
                    <HamburgerButton isOpen={isOpen} onClick={() => openClose()}/>
                </div>
            </div>
            <div className={`m:visible md:hidden nav-table shadow-xl bg-transparent text-center font-bold ${isOpen ? "nav-table-shown backdrop-filter backdrop-blur" : "nav-table-hidden"}`}>
                { navLinks }
            </div>
        </nav>
    );
}

export default Navbar