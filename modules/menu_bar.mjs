export default function ChangeStyleMenuBar() {
    const header = document.querySelector("header");
    const header_menubar = document.querySelector("header div.header-menubar");
    const primary_button = document.querySelector("li.nav-right-tnf-item");
    let did_scroll=false;

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
        did_scroll = true;
    });

    window.setInterval(() => {
        if (window.scrollY > 80) {
            did_scroll = false;

            styleMenuBar();
        } else {
            styleOldMenuBar();
        }
    }, 100);
}