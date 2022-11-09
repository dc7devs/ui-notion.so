'use strict'

import ChangeStyleMenuBar from '/modules/menu_bar.mjs';
import ChangeBannerStyleButtonAndIconDetailsImg from './modules/change_company_auto.mjs';
import changeImageBox from './modules/change_tamplate_btn.mjs';
import RandomList from './utils/_array_lists.mjs';

const change = new ChangeBannerStyleButtonAndIconDetailsImg();
const randomList = new RandomList();

// funcionalidade para animação da barra de menu
ChangeStyleMenuBar();

// funcionalidade para animação/troca das imagens na seção 'by-teams'
function randomChange() {
    randomList.CompanyRandomList().forEach(delayLoop(changeNext, 4000));
};

function delayLoop(fn, delay) {
    return (myObject, index, myArray) => {
        setTimeout(() => {
            fn(myObject, index, myArray);
        }, index * delay);
    }
}
function changeNext(myObject, index, myArray) {
    changeCustumer(myObject);

    if(myArray[index+1] === undefined) {
        randomChange();
    }
}

function changeCustumer(Obj) {
    change.ChangeNameCompany(Obj);
    change.ChangeBannerImg(Obj);
    change.ChangeDetailsImg(Obj);
}

randomChange();

// funcionalidade para animação/troca da seção 'by-tamplates'
changeImageBox();