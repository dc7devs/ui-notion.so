// animação para barra de menu

const space = document.querySelector("div.js-space");
let header = document.querySelector("header");
let header_menubar = document.querySelector("header div.header-menubar");
let primary_button = document.querySelector("li.nav-right-tnf-item");
let didScroll=false;

function styleMenuBar() {    
    header.setAttribute("style", "height: 60px; transition: .3s");
    header_menubar.setAttribute("style", "border-bottom: 1px solid var(--border-color-regular)");
    primary_button.classList.add("inscroll");
}

function styleOldMenuBar() {
    header.setAttribute('style', 'height: 80px; transition: .5s');
    header_menubar.setAttribute('style', "border-bottom: 0");
    primary_button.classList.remove("inscroll");
}

window.addEventListener('scroll', () => {
    didScroll = true;
});

window.setInterval(() => {
    if (window.scrollY > 80) {
        didScroll = false;

        styleMenuBar();
    } else {
        styleOldMenuBar();
    }
}, 100);
