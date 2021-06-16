const runFuncForAllClasses = (func, className) => {
    let elems = document.getElementsByClassName(className);
    Array.prototype.forEach.call(elems, func);
}

const scrollButtonFunc = button => {
    button.onclick = () => {
        scroll.scrollTo(document.getElementById(button.dataset.scrollto));
    }
}

const titlesFunc = title => {
    if(title.classList.contains("is-inview")){
        title.classList.add("title-init");
    }

    //Locomotive Scroll adds the "is-inview" class whenever an element is in view
    //We can take advantage of that to play animations
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if(mutation.type !== "attributes" && mutation.attributeName !== "class"){
                return;
            } else {
                if(mutation.target.classList.contains("is-inview") && !mutation.target.classList.contains("title-init")){
                    mutation.target.classList.add("title-init");
                }
            }
        })
    })

    observer.observe(title, {attributes: true});
}


// Scroll buttons
runFuncForAllClasses(scrollButtonFunc, "scroll-button");

// Titles
runFuncForAllClasses(titlesFunc, "title");

