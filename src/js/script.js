import '../scss/main.scss';
import {toggleModal, renderResults, renderResultsStorage} from "./views/createNote";
import Note from './models/notes';
import {draggable, draggablePhone} from './models/draggable';
import {deleteNote, deleteNotes} from './views/deleteNote';
import {UpdateNotes} from './views/updateNote';
import {saveNotes, returnNotes, removeNote} from './models/localStorage';


window.addEventListener('load', () => {
    if(localStorage.getItem('Notes')!= null){
        tab = returnNotes();
        for(let i = 0; i< tab.length; i++){
            renderResultsStorage(tab[i]);
        }
        init();

    }else {
        tab = [];
    }
});

document.querySelector('.board__panel--btn').addEventListener("click", () => {
    toggleModal();
});

document.querySelector('.modal__content--nav-icon-use').addEventListener("click", () => {
    toggleModal();
});

document.querySelector('.modal__content--create-btn').addEventListener('click', () => {
    controlNote();
    toggleModal();
    document.querySelector('.modal__content--nav-title').value = "";
    document.querySelector('.modal__content--description-text').value = "";

});

document.querySelector('.board').addEventListener('click', e => {
    deleteNote(e,tab);
});

function init() {
    const drag = document.querySelectorAll('.note');
    for(const el of drag) {
        el.addEventListener('mouseover', () => {
            draggable(tab);
        });

        el.addEventListener('touchstart', (e)=>{
            console.log('telefon');
            let data = e.target;
            draggablePhone(tab, data, e);
        });
    }

    const update = document.querySelectorAll('.note');
        const notes = document.querySelectorAll('.note');
        for(const el of update){
            el.addEventListener('click', (e) => {
                UpdateNotes(e, tab, notes);
            });
        }
        

    document.querySelector('.board__panel--delete').addEventListener('click', () => {
     const notes = document.querySelectorAll('.note');
     deleteNotes(notes);
    });
}

let tab = [];
const state = {};
window.r = state;
window.p = tab;

export const controlNote = () => {

    const title = document.querySelector('.modal__content--nav-title').value;
    const descryption = document.querySelector('.modal__content--description-text').value;

    if(title || descryption) {
        state.note = new Note(title, descryption);
        tab.push(state.note);
        renderResults(state.note);
        saveNotes(tab);
        console.log(tab);
    }

    init();

};