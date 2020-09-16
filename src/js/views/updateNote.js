import {toggleModal, renderResults} from "../views/createNote";
import {controlNote} from "../script";
import {removeNotes,saveNotes} from '../models/localStorage';


export function UpdateNotes(e, tab, notes){
    const btnEdit = document.querySelector('.modal-edit__content--create-btn');
    let noteTitle;
    let noteDescryption;
    let data = e.target.parentNode.parentNode.parentNode;
    let title = document.querySelector('.modal__content--nav-title');
    let descryption = document.querySelector('.modal__content--description-text');
    const btn = document.querySelector('.modal__content--create-btn');
    const cross = document.querySelector('.modal__content--nav-icon-use');


    if (e.target.classList.contains("edit")){
       // const notes = document.querySelectorAll('.note');
    
        for(let i=0; i<tab.length; i++){
            if(tab[i].id === data.getAttribute('data-itemid')){
                title.value = `${tab[i].title}`;
                descryption.value = `${tab[i].descryption}`;
                btnEdit.classList.remove('modal-btn-hidden');
                btn.classList.add('modal-btn-hidden');
                toggleModal(); 
            }
        }

        noteTitle = e.target.parentNode.parentNode.parentNode.children[0].children[0];
        noteDescryption = e.target.parentNode.parentNode.parentNode.children[1];
        
        btnEdit.addEventListener('click', changeValue);
        cross.addEventListener('click', () => { 
            title.value = "";
            descryption.value = "";
            btnEdit.classList.add('modal-btn-hidden');
            btn.classList.remove('modal-btn-hidden');
            btnEdit.removeEventListener('click', changeValue);
        });
         

        function changeValue() {
            noteTitle.textContent = document.querySelector('.modal__content--nav-title').value;
            noteDescryption.textContent = document.querySelector('.modal__content--description-text').value;
            btnEdit.classList.add('modal-btn-hidden');
            btn.classList.remove('modal-btn-hidden');
            toggleModal();

            for(let i=0; i<tab.length; i++){
                if(tab[i].id === data.getAttribute('data-itemid')){
                    tab[i].title = document.querySelector('.modal__content--nav-title').value;
                    tab[i].descryption = document.querySelector('.modal__content--description-text').value;
                    removeNotes();
                    saveNotes(tab);
                }
            }

            title.value = "";
            descryption.value = "";
            btnEdit.removeEventListener('click', changeValue);
        };
    
    }
}

          

