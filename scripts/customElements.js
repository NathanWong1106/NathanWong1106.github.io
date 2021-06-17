class Sidebar {

    constructor(id, elem, isOpen=false) {
        this.id = id;
        this.elem = elem;
        this.isOpen = isOpen;
    }

    toggle = () => {
        let smallScreen = window.matchMedia("(max-width: 600px)");

        if(this.isOpen){
            this.elem.style.width = "0";
            this.isOpen = false;
            this.elem.style.backgroundColor = "rgba(0,0,0,0)"
        }
        else if(smallScreen.matches){
            this.elem.style.width = "80vw";
            this.elem.style.backgroundColor = "white"
            this.isOpen = true;
        } else {
            this.elem.style.width = "10vw";
            this.elem.style.backgroundColor = "white"
            this.isOpen = true;
        }
    }
}

let sidebars = {};

const runFuncForAll = (func, query) => {
    let elems = document.querySelectorAll(query);
    Array.prototype.forEach.call(elems, func);
}


const playAnimOnVisible = (elem, animClassName) => {
    if(elem.classList.contains("is-inview")){
        elem.classList.add(animClassName);
    }

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if(mutation.type !== "attributes" && mutation.attributeName !== "class"){
                return;
            } else {
                if(mutation.target.classList.contains("is-inview") && !mutation.target.classList.contains(animClassName)){
                    mutation.target.classList.add(animClassName);
                }
            }
        })
    })

    observer.observe(elem, {attributes: true});
}

const addScrollSpy = (elem) => {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if(mutation.type !== "attributes" && mutation.attributeName !== "class"){
                return;
            } else {
                if(mutation.target.classList.contains("is-inview")){
                    clearActiveNavs();
                    runFuncForAll(nav => {
                        if(nav.dataset.spytarget.slice(1) === elem.id){
                            nav.classList.add("active");
                        }
                    }, ".scrollspy-nav")
                }
            }
        })
    })
    observer.observe(elem, {attributes: true});
}

const scrollButtonFunc = button => {
    button.onclick = () => {
        scroll.scrollTo(document.getElementById(button.dataset.scrollto));
    }
}

const clearActiveNavs = () => {
    runFuncForAll((nav) => {
        nav.classList.remove("active");
    }, ".scrollspy-nav")
}

const titlesFunc = title => {
    playAnimOnVisible(title, "title-init");
    addScrollSpy(title);
}

const articlesFunc = article => {
    playAnimOnVisible(article, "article-init");
}

const sidebarToggleFunc = toggle => {
    toggle.onclick = () => {
        let bar = sidebars[toggle.dataset.sidebar];
        bar.toggle();
        toggle.style.transform = bar.isOpen ? "rotate(180deg)" : "rotate(0deg)";
    }
}

const scrollspyNavFunc = nav => {
    nav.onclick = () => {
        scroll.scrollTo(document.querySelector(nav.dataset.scrollto));
    }
}

// Gather all sidebar togglers
runFuncForAll((sidebar) => {
    sidebars[sidebar.id] = new Sidebar(sidebar.id, sidebar);
}, ".sidebar")

// Scroll buttons
runFuncForAll(scrollButtonFunc, ".scroll-button");

// Scrollspy navs
runFuncForAll(scrollspyNavFunc, ".scrollspy-nav");

// Titles
runFuncForAll(titlesFunc, ".title");

// Articles
runFuncForAll(articlesFunc, ".article");

// Sidebar toggles
runFuncForAll(sidebarToggleFunc, ".sidebar-toggle");
