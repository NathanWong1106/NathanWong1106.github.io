import React, {useState, useRef, useEffect} from "react"
import '../styles/global.css'

//Credit to: https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
const AnimateInViewSection = (props) => {
    const [isVisible, setVisible] = useState(false);
    const dom = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(e => {
            e.forEach(entry => {
                setVisible(entry.isIntersecting);
            })
        })
        observer.observe(dom.current)
        return () => observer.unobserve(dom.current);
    }, [])

    return(
        <section className={`${isVisible ? "visible " + props.animName : "invisible"}`} ref={dom}>
            {props.children}
        </section>
    );
}

export default AnimateInViewSection