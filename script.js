import ChangeStyleMenuBar from '/assets/modules/menu_bar.mjs';
import RandomBannerAndIconDetailsImg from '/assets/modules/random_img.mjs';

const randomBannerAndIconDetailsImg = new RandomBannerAndIconDetailsImg();

const CompanyRandomList = [
    {
        nameCompany: "Company home",
        pathBannerRandom: "./assets/images/random_company/company-home.png",
        pathIconRandom: "./assets/icons/figma-logo.png"
    },
    {
        nameCompany: "Roadmap",
        pathBannerRandom: "./assets/images/random_company/roadmap.png",
        pathIconRandom: "./assets/icons/match.png"
    },
    {
        nameCompany: "Design docs",
        pathBannerRandom: "./assets/images/random_company/desing-docs.png",
        pathIconRandom: "./assets/icons/headspace.png"
    },
    {
        nameCompany: "Engineering wiki",
        pathBannerRandom: "./assets/images/random_company/engineering-wiki.png",
        pathIconRandom: "./assets/icons/branch.png"
    },
    {
        nameCompany: "Meeting notes",
        pathBannerRandom: "./assets/images/random_company/meeting-notes.png",
        pathIconRandom: "./assets/icons/mixpanel _dark.png"
    },
    {
        nameCompany: "Website publishing",
        pathBannerRandom: "./assets/images/random_company/website-publishing.png",
        pathIconRandom: "./assets/icons/multiverse.png"
    }
];

// Barra de menu
ChangeStyleMenuBar();

// Animação de imagens randomicas
function randomChange() {
    CompanyRandomList.forEach(delayLoop(changeNext, 3000));
};

function delayLoop(fn, delay) {
    return (myObject, index, myArray) => {
        setTimeout(() => {
            fn(myObject, index, myArray);
        }, index * delay);
    }
}

function changeNext(myObject, index, myArray) {
    // randomBannerAndIconDetailsImg.ChangeNameCompany(ObjRandom);
    randomBannerAndIconDetailsImg.ChangeBannerImg(myObject);
    randomBannerAndIconDetailsImg.ChangeDetailsImg(myObject);
    
    if((myArray.length-1) == index) {
        randomChange();
    }
}

randomChange();