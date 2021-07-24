import React from "react"
import AnimateInViewSection from "./AnimateInViewSection"

const CompanyDesc = props => {
    return (
        <AnimateInViewSection animName="slide-in-from-right">
            <div className="my-5">
                <div className="text-3xl font-bold underline mb-2">{props.name}</div>
                <div className="text-lg"><b>Tech: </b>{props.tech}</div>
                <div className="text-lg"><b>Date: </b>{props.time}</div>
                <div className="mt-2 text-xl">
                    {props.children}
                </div>
            </div>
        </AnimateInViewSection>
    )
}

export default CompanyDesc;