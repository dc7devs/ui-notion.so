export default class RandomBannerAndIconDetailsImg {
    ElImgRandom = document.querySelector("section.by-teams div.banner-img-round img");
    ElIconRandom = document.querySelector("section.by-teams div.tabs-column div.details div.logo-wrap img");
    // ElTitleBtnRandom = querySelector("section.by-teams div.tabs-column nav button.bt-tas.active-button");

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
    // ChangeNameCompany({ nameCompany }) {
    //     ElTitleBtnRandom.innerHTML(nameCompany);
    // }
}
