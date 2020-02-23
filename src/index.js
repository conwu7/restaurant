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
    _loadPages();
    _navButtons.forEach(button => {
        button.addEventListener('click', onNavClick);
    });
    //load home page by default
    _currentPage = _buttonMapping.homebtn;
    document.querySelector('#homebtn').classList.add('activeLink');
    // document.querySelector('#homebtn').click();
    function _loadPages() {
        const keys = Object.keys(_buttonMapping);
        keys.forEach(key=>{
            _contentContainer.appendChild(_buttonMapping[key]);
        })
    }
    function _switchTabs(oldDiv, newDiv) {
        if (oldDiv === newDiv) {return}
        if (oldDiv) {
            oldDiv.classList.toggle('notActive');
        }
        const bringInActive = setTimeout(()=>{
            newDiv.classList.toggle('notActive')
            }, 200);
       _currentPage = newDiv;
    }
    function updateNav(e) {
        _navButtons.forEach(button=>{button.classList.remove('activeLink')});
        e.target.classList.add('activeLink');
    }
    function onNavClick(e) {
        _switchTabs(_currentPage, _buttonMapping[e.target.id]);
        updateNav(e);
    }
})();