export function search(e){
    const term = e.target.value.toLowerCase();
    const notes = document.querySelectorAll('.note');

    for( let i = 0; i < notes.length; i++) {
        const title = notes[i].firstElementChild.textContent;
        if(title.toLocaleLowerCase().indexOf(term)!= -1){
            notes[i].style.display = "flex";
        }else{
            notes[i].style.display = "none";
        }
    }
}