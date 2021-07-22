import React from "react"

const FooterLink = (props) => {
    return (
        <div className="transform duration-500 mx-10 w-20 text-white text-center text-xl hover:text-lightGray hover:scale-105">
            <a href={props.href}>
                {props.children}
            </a>
        </div>
    );
}

export default FooterLink;