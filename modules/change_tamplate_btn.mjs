import RandomList from '../utils/_array_lists.mjs';
const randomList = new RandomList();

export default function changeImageBox() {
    const ElLeftButton = document.querySelector("section.by-tamplates div.btn-left");
    const ElRightButton = document.querySelector("section.by-tamplates div.btn-right");
    const ElBoxList = [];

    document.querySelectorAll("section.by-tamplates div.box-round-media").forEach(el => {
        if(($(el).css("display") == "flex")) {
            ElBoxList.push(el);
        }
    });

    // tratar em responsividade
    ElRightButton.addEventListener("click", () => {
        fillBox(
            randomList.TamplatesRandomList()
                .slice(ElBoxList.length)
        );
    });

    // tratar em responsividade
    ElLeftButton.addEventListener("click", () => {
        fillBox(
            randomList.TamplatesRandomList()
                .slice(0)
        );
    });

    function fillBox(ListObj) {
        ElBoxList.forEach((contentBox, index) => {
            const img = contentBox.querySelector("div.overlay-contain div.image img");
            const title = contentBox.querySelector("a.js-title");
    
            img.setAttribute("src", ListObj[index].srcImgBox);
            title.innerHTML = ListObj[index].title;
        });
    }

    fillBox(randomList.TamplatesRandomList());
}


