const runFuncForAllClasses = (func, className) => {
    let elems = document.getElementsByClassName(className);
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

const scrollButtonFunc = button => {
    button.onclick = () => {
        scroll.scrollTo(document.getElementById(button.dataset.scrollto));
    }
}

const titlesFunc = title => {
    playAnimOnVisible(title, "title-init");
}

const articlesFunc = article => {
    playAnimOnVisible(article, "article-init");
}


// Scroll buttons
runFuncForAllClasses(scrollButtonFunc, "scroll-button");

// Titles
runFuncForAllClasses(titlesFunc, "title");

// Articles
runFuncForAllClasses(articlesFunc, "article");

