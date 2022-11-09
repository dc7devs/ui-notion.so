export default class ChangeBannerStyleButtonAndIconDetailsImg {
    ElImgChange = document.querySelector("section.by-teams div.banner-img-round img");
    ElIconChange = document.querySelector("section.by-teams div.tabs-column div.details div.logo-wrap img");
    ElTitleBtnsChange = document.querySelectorAll("section.by-teams div.tabs-column nav button.bt-tabs");

    /**
     * @Param {[ {nameCompany: string, pathBannerChange: string, pathIconChange: string} ]} Obj
    */
    ChangeBannerImg({ pathBannerChange }) {
        this.ElImgChange.setAttribute('src', pathBannerChange);
    }

    /**
     * @Param {[ {nameCompany: string, pathBannerChange: string, pathIconChange: string} ]} Obj
    */
    ChangeDetailsImg({ pathIconChange }) {
        this.ElIconChange.setAttribute('src', pathIconChange);
    }

    /**
     * @Param {[ {nameCompany: string, pathBannerChange: string, pathIconChange: string} ]} Obj
    */
    ChangeNameCompany({ nameCompany }) {
        for(let button of this.ElTitleBtnsChange) {
            if(button.innerHTML === nameCompany) {
                if(!button.classList.contains("active-button")) {
                    button.classList.add("active-button");
                }
            } else {
                if(button.classList.contains("active-button")) {
                    button.classList.remove("active-button");
                }
            }
        }
    }
}
