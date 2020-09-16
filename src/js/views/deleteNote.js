import {removeNotes,saveNotes} from '../models/localStorage';


export function deleteNote(e,tab) {
    if (e.target.classList.contains("trash")) {
         e.target.closest(".note").remove();
         let data = e.target.parentNode.parentNode.parentNode;

         for(let i = 0; i<tab.length; i++){
            if(tab[i].id === data.getAttribute('data-itemid')){
                tab.splice(i,1);
                removeNotes();
                saveNotes(tab);
            }
        }
         
    }
}

export function deleteNotes(notes){
    
    for(const el of notes) {
        el.remove();
    }
    removeNotes();
}

export function clearTab(tab) {
 return tab = [];
}