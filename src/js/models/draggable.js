import {saveNotes, removeNote} from '../models/localStorage';


export function draggable(tab){
    let data;
    const elements = document.querySelectorAll('.note');
    let isDown = false;


    for(const el of elements){
    
        el.addEventListener('mousedown', e => {
            data = e.target;
            
            let shiftX = e.clientX - el.getBoundingClientRect().left;
            let shiftY = e.clientY - el.getBoundingClientRect().top;
            isDown = true;
            el.style.zIndex = 1000;

            function onMouseMove(e) {
                if(isDown) {
                    el.style.left = e.pageX - shiftX + 'px' ;
                    el.style.top =  e.pageY -shiftY + 'px';
                    for(let i = 0; i<tab.length; i++){
                        if(tab[i].id === data.getAttribute('data-itemid')){
                            tab[i].top = e.pageY - shiftY;
                            tab[i].left = e.pageX - shiftX;
                            saveNotes(tab);
                        }
                    }
                }
            }

            el.addEventListener('mousemove', onMouseMove);

            document.addEventListener('mouseup', e => {
                el.style.zIndex = 10;
                isDown = false;
            });
            
        });
    }

}

export function draggablePhone(tab,data, e){
    let isDown = false;
            
            let shiftX = e.touches[0].clientX - data.getBoundingClientRect().left;
            let shiftY = e.touches[0].clientY - data.getBoundingClientRect().top;
            
            isDown = true;
            data.style.zIndex = 1000;

            function onMouseMove(e) {
                if(isDown) {
                    
                    data.style.left = e.changedTouches[0].clientX - shiftX + 'px' ;
                    data.style.top = e.changedTouches[0].clientY - shiftY + 'px';
                    
                    for(let i = 0; i < tab.length; i++){
                        if(tab[i].id === data.getAttribute('data-itemid')){
                            tab[i].top = e.changedTouches[0].clientY - shiftY;
                            tab[i].left = e.changedTouches[0].clientX - shiftX;
                            saveNotes(tab);
                        }
                    }
                    
                }
            }

            data.addEventListener('touchmove', onMouseMove);

            document.addEventListener('touchend', e => {
                data.style.zIndex = 10;
                isDown = false;
            });
          
}

