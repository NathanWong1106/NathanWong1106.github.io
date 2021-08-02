import React from "react"
import "./component-styles/AccordionElement.css"

const AccordionElement = props => {
    const content = React.createRef();
    const [isOpen, setIsOpen] = React.useState(false);
    const CHEVRON = <svg className={`transform duration-500 fill-current text-white stroke-current stroke-2 ${isOpen ? "rotate-180" : "rotate-0"}`} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>

    const openClose = () => {
        //State is not set until function call is finished
        let text = content.current;

        //Clamp transition duration between 0.5s to 1.5s depending on scroll height
        text.style.transition = Math.min(1.5, Math.max(0.5, text.scrollHeight / 1500)) + "s"
        text.style.height = !isOpen ? text.scrollHeight + "px" : "0px";
        setIsOpen(!isOpen);
    };

    return (
        <div className="my-2">
            <div className={`flex flex-row p-4 bg-black bg-opacity-50 rounded-lg duration-500 cursor-pointer hover:bg-opacity-30 ${isOpen ? "border-4 border-opacity-75 border-white" : ""}`} onClick={openClose}>
                <div className="text-3xl font-bold text-turquoise">{props.title}</div>
                <div className="ml-auto mt-2 transform duration-500 hover:scale-110">{CHEVRON}</div>
            </div>
            {/* h-0 overriden by openClose() styling --> h-0 used to close section on load */}
            <div ref={content} className={`text-xl text-turquoise mx-5 accordion-content h-0 ${isOpen ? "my-5" : "my-0"}`}>
                {props.children}
            </div>
        </div>
    );
}

export default AccordionElement;