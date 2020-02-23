const menuContent = (function() {
    "use strict";
    let contentDiv = document.createElement('div');
    contentDiv.classList.add('menuPage');
    contentDiv.classList.add('notActive');
    contentDiv.textContent = "This is the menu page";
    let childDiv = document.createElement('h2');
    childDiv.textContent = "this is a Menu heading content";



    contentDiv.appendChild(childDiv);
    return {contentDiv}
}());

export {menuContent}