const menuContent = (function() {
    "use strict";
    let contentDiv = document.createElement('div');
    contentDiv.textContent = "This is the menu page";




    return {contentDiv}
}());

export {menuContent}