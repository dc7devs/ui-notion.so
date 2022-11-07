import ChangeStyleMenuBar from '/assets/modules/menu_bar.mjs';
import RandomBannerAndIconDetailsImg from './assets/modules/random_img.mjs';
import { CompanyRandomList, TamplatesRandomList }  from './assets/utils/array_lists.mjs';

const randomBannerAndIconDetailsImg = new RandomBannerAndIconDetailsImg();

// funcionalidade para animação da barra de menu
ChangeStyleMenuBar();

// funcionalidade para animação/troca das imagens na seção 'by-teams'
function randomChange() {
    CompanyRandomList().forEach(delayLoop(changeNext, 3000));
};

function delayLoop(fn, delay) {
    return (myObject, index, myArray) => {
        setTimeout(() => {
            fn(myObject, index, myArray);
        }, index * delay);
    }
}

function changeNext(myObject, index, myArray) {
    randomBannerAndIconDetailsImg.ChangeNameCompany(myObject);
    randomBannerAndIconDetailsImg.ChangeBannerImg(myObject);
    randomBannerAndIconDetailsImg.ChangeDetailsImg(myObject);
    
    if(myArray.length == index) {
        randomChange();
    }
}

randomChange();

// funcionalidade para animação/troca da seção 'by-tamplates'