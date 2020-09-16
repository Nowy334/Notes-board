import uniquid from 'uniquid';

export default class Note {
    constructor(title, descryption){
        this.title = title;
        this.descryption = descryption; 
        this.id = uniquid();
    }
}
