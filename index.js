const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true
})


// All scroll buttons
let scrollButtons = document.getElementsByClassName("scroll-button");
Array.prototype.forEach.call(scrollButtons, elem => {
    elem.onclick = () => {
        scroll.scrollTo(document.getElementById(elem.dataset.scrollto));
    }
})