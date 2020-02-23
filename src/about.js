const aboutContent = (function() {
    "use strict";
    let contentDiv = document.createElement('div');
    contentDiv.classList.add('aboutPage');
    contentDiv.classList.add('notActive');
    contentDiv.textContent = "This is the about page";




    return {contentDiv}
}());

export {aboutContent}