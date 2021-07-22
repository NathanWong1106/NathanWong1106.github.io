import React from "react"

const FooterLink = (props) => {
    return (
        <div className="transform duration-500 mx-10 w-30 my-2 text-white text-center text-xl hover:text-lightGray hover:scale-105">
            <a target="_blank" href={props.href}>
                {props.children}
            </a>
        </div>
    );
}

export default FooterLink;