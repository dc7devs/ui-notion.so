export default class RandomBannerAndIconDetailsImg {
    ElImgRandom = document.querySelector("section.by-teams div.banner-img-round img");
    ElIconRandom = document.querySelector("section.by-teams div.tabs-column div.details div.logo-wrap img");
    ElTitleBtnsRandom = document.querySelectorAll("section.by-teams div.tabs-column nav button.bt-tabs");

    /**
     * @Param {[ {nameCompany: string, pathBannerRandom: string, pathIconRandom: string} ]} Obj
    */
    ChangeBannerImg({ pathBannerRandom }) {
        this.ElImgRandom.setAttribute('src', pathBannerRandom);
    }

    /**
     * @Param {[ {nameCompany: string, pathBannerRandom: string, pathIconRandom: string} ]} Obj
    */
    ChangeDetailsImg({ pathIconRandom }) {
        this.ElIconRandom.setAttribute('src', pathIconRandom);
    }

    /**
     * @Param {[ {nameCompany: string, pathBannerRandom: string, pathIconRandom: string} ]} Obj
    */
    ChangeNameCompany({ nameCompany }) {
        for(let button of this.ElTitleBtnsRandom) {
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
