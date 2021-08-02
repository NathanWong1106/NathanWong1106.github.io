import React, {useState, useRef, useEffect} from "react"
import '../styles/global.css'

//Credit to: https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4

const AnimateInViewSection = (props) => {
    const [isVisible, setVisible] = useState(false);
    const [repeat] = useState(props.repeat ? props.repeat : false); //default run once
    const elem = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(e => {
            e.forEach(entry => {
                if(entry.isIntersecting || repeat){
                    setVisible(entry.isIntersecting);
                }
            })
        })
        observer.observe(elem.current)
        return () => observer.unobserve(elem.current);
    }, [])

    return(
        <section className={`${isVisible ? "visible " + props.animName : "invisible"}`} ref={elem}>
            {props.children}
        </section>
    );
}

export default AnimateInViewSection