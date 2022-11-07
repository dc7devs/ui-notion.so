import ChangeStyleMenuBar from '/modules/menu_bar.mjs';
import RandomBannerAndIconDetailsImg from './modules/random_img.mjs';
import RandomList from './utils/_array_lists.mjs';

const random_exc = new RandomBannerAndIconDetailsImg();
const randomList = new RandomList();

// funcionalidade para animação da barra de menu
ChangeStyleMenuBar();

// funcionalidade para animação/troca das imagens na seção 'by-teams'
function randomChange() {
    randomList.CompanyRandomList().forEach(delayLoop(changeNext, 3000));
};

function delayLoop(fn, delay) {
    return (myObject, index, myArray) => {
        setTimeout(() => {
            fn(myObject, index, myArray);
        }, index * delay);
    }
}

function changeNext(myObject, index, myArray) {
    random_exc.ChangeNameCompany(myObject);
    random_exc.ChangeBannerImg(myObject);
    random_exc.ChangeDetailsImg(myObject);
    
    if(myArray.length-1 == index) {
        randomChange();
    }
}

randomChange();

// funcionalidade para animação/troca da seção 'by-tamplates'