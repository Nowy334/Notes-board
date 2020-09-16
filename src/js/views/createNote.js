import {getRandomIntY} from '../models/randomIntY';
import {getRandomIntX} from '../models/randomIntX';
import {saveNotes, returnNotes} from '../models/localStorage';

export function toggleModal() {
    const modalWidnow = document.querySelector('.modal');
    modalWidnow.classList.toggle('modal-hidden');

};

export const renderResults = obj => {
    const board = document.querySelector('.board');

    const markup = `
    <div class="note" data-itemid="${obj.id}" style = "position: absolute; top: ${obj.top = getRandomIntY()}px; left: ${ obj.left = getRandomIntX()}px;">
            <nav class="note__nav">
                <h2 class="note__nav--title" >${obj.title}</h2>
                <svg class="note__nav--icon-edit">
                    <use xlink:href = "images/sprite.svg#icon-edit" class="edit"></use>
                </svg>
                <svg class="note__nav--icon-trash">
                    <use xlink:href = "images/sprite.svg#icon-trash" class="trash"></use>
                </svg>
            </nav>
            <div class="note__descryption">
                ${obj.descryption}
            </div>
            <div class="note__footer">

            </div>
        </div>
    `;

   board.insertAdjacentHTML('afterbegin', markup);
 };

 export const renderResultsStorage = obj => {
    const board = document.querySelector('.board');
    

    const markup = `
    <div class="note" data-itemid="${obj.id}" style = "position: absolute; top: ${obj.top}px; left: ${obj.left}px;">
            <nav class="note__nav">
                <h2 class="note__nav--title" >${obj.title}</h2>
                <svg class="note__nav--icon-edit">
                    <use xlink:href = "images/sprite.svg#icon-edit" class="edit"></use>
                </svg>
                <svg class="note__nav--icon-trash">
                    <use xlink:href = "images/sprite.svg#icon-trash" class="trash"></use>
                </svg>
            </nav>
            <div class="note__descryption">
                ${obj.descryption}
            </div>
            <div class="note__footer">

            </div>
        </div>
    `;

   board.insertAdjacentHTML('afterbegin', markup);
 };