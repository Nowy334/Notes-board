export function saveNotes (tab) {
    localStorage.setItem("Notes", JSON.stringify(tab));
}

export function returnNotes() {
    const Notes = JSON.parse(localStorage.getItem("Notes"));
    return Notes;
}

export function removeNote() {
    localStorage.clear();
}

export function removeNotes() {
    localStorage.clear();
}
