import React from "react"
import "./component-styles/Footer.css"
import FooterLink from "./FooterLink"

const LINKS = [
    {
        name: "GitHub",
        href: "https://github.com/NathanWong1106",
        SVG: <svg className="fill-current h-5 w-5" height="20" width="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
             </svg>
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/nathanwong1106/",
        SVG: <svg className="fill-current h-5 w-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
                <path d="M449.446 0C483.971 0 512 28.03 512 62.554v386.892C512 483.97 483.97 512 449.446 512H62.554C28.03 512 0 483.97 0 449.446V62.554C0 28.03 28.029 0 62.554 0h386.892zM160.461 423.278V197.561h-75.04v225.717h75.04zm270.539 0V293.839c0-69.333-37.018-101.586-86.381-101.586-39.804 0-57.634 21.891-67.617 37.266v-31.958h-75.021c.995 21.181 0 225.717 0 225.717h75.02V297.222c0-6.748.486-13.492 2.474-18.315 5.414-13.475 17.767-27.434 38.494-27.434 27.135 0 38.007 20.707 38.007 51.037v120.768H431zM123.448 88.722C97.774 88.722 81 105.601 81 127.724c0 21.658 16.264 39.002 41.455 39.002h.484c26.165 0 42.452-17.344 42.452-39.002-.485-22.092-16.241-38.954-41.943-39.002z"/>
             </svg>
    },
    {
        name: "Email",
        href: "mailto:wongnathan1106@gmail.com",
        SVG: <svg className="fill-current h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3H4C1.8 3 0 4.8 0 7v10c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4zm1.6 5.8l-7.9 5.3c-.5.3-1.1.5-1.7.5s-1.2-.2-1.7-.5L2.4 8.8c-.4-.3-.5-.9-.2-1.4.3-.4.9-.5 1.4-.2l7.9 5.3c.3.2.8.2 1.1 0l7.9-5.3c.5-.3 1.1-.2 1.4.3.2.4.1 1-.3 1.3z"/>
             </svg>
    },
]

//TODO SVG Icons
const Footer = (props) => {
    return (
        <section>
            <div className="footer-bg bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm drop-shadow-2xl text-center">
                <div className="text-5xl font-extrabold py-10">
                    <span className="bg-clip-text text-transparent bg-gradient-to-l from-green-400 to-blue-500">
                        Contact:
                    </span>
                </div>
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center mx-5 md:mx-10 lg:mx-20">
                    {
                        LINKS.map(link => (
                            <span key={link.href}>
                                <FooterLink href={link.href}>
                                    {link.SVG} {link.name}
                                </FooterLink>
                            </span>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Footer;