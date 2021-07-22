import React from "react"
import "./component-styles/Footer.css"
import FooterLink from "./FooterLink"

//TODO SVG Icons
const Footer = (props) => {
    return (
        <section>
            <div className="footer-bg bg-black text-white text-center">
                <div className="text-5xl font-extrabold py-10">
                    <span className="bg-clip-text text-transparent bg-gradient-to-l from-green-400 to-blue-500">
                        Contact:
                    </span>
                </div> 
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center mx-5 md:mx-10 lg:mx-20">
                    <FooterLink href="mailto:wongnathan1106@gmail.com">Email</FooterLink>
                    <FooterLink href="https://github.com/NathanWong1106">Github</FooterLink>
                    <FooterLink href="https://www.linkedin.com/in/nathanwong1106/">LinkedIn</FooterLink>
                </div>
            </div>
        </section>
    );
}

export default Footer;