//This would be used for switching Tabs. Call each of - homepage, menu and about - in here. Good luck!
import {homeContent} from "./homepage";
import {aboutContent} from "./about";
import {menuContent} from "./menu";

(function() {
    (function() {
        let bannerDiv = document.getElementById("banner");
        bannerDiv.textContent = "Soro's Restaurant";
    })();
    let _buttonMapping = {
        homebtn: homeContent.contentDiv,
        menubtn: menuContent.contentDiv,
        aboutbtn: aboutContent.contentDiv
    };
    let _currentPage;
    let _contentContainer = document.getElementById("mainContent");
    let _navButtons = Array.from(document.querySelectorAll('nav button'));
    _navButtons.forEach(button => {
        button.addEventListener('click', onNavClick);
    });
    document.querySelector('#homebtn').click();
    function switchPage(oldDiv, newDiv) {
       if (oldDiv) _contentContainer.removeChild(_contentContainer.firstElementChild);
       _contentContainer.appendChild(newDiv);
       _currentPage = newDiv;
    }
    function updateNav(e) {
        _navButtons.forEach(button=>{button.classList.remove('activeLink')})
        e.target.classList.add('activeLink');
    }
    function onNavClick(e) {
        switchPage(_currentPage, _buttonMapping[e.target.id]);
        updateNav(e);
    }
})();