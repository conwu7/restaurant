const homeContent = (function() {
    "use strict";
    let contentDiv = document.createElement('div');
    contentDiv.classList.add('homePage');
    contentDiv.innerHTML = "<h1>Come join us and experience serenity</h1><h2>";
    let _pictureArray = ['./images/food2.jpg', './images/food3.jpg', './images/food4.jpg', './images/food5.jpg'];
    let _pictureGrid = document.createElement('div');
    _pictureGrid.classList.add('pictureGrid');
    for (let i=0; i<3; i++) {
        let picContainer = document.createElement('div');
        picContainer.style.backgroundImage = `url(${_pictureArray[i]})`;
        _pictureGrid.appendChild(picContainer);
    }
    contentDiv.appendChild(_pictureGrid);



    return {contentDiv}
}());

export {homeContent}