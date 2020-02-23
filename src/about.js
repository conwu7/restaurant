const aboutContent = (function() {
    "use strict";
    let contentDiv = document.createElement('div');
    contentDiv.textContent = "This is the about page";




    return {contentDiv}
}());

export {aboutContent}