const form = document.querySelector(".note-form"),
    noteInp = document.querySelector(".writer"),
    resultWrapper = document.querySelector(".request"),
    noNotes = document.querySelector(".no-notes");

const noteDb = {
    dbNote: [
        
    ],
};


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newNotes = noteInp.value;   

    noNotes.classList.add("active");

    if(newNotes) {
        noteDb.dbNote.push(newNotes);
        addNewNote(noteDb.dbNote);
        sortArr(noteDb.dbNote)
        console.log(noteDb.dbNote);
        // localStorage.setItem("note's", JSON.stringify(newNotes));
    };

    e.target.reset();
});

const sortArr = (arr) => {
    arr.sort()
} 

function addNewNote (dbNote) {
    resultWrapper.innerHTML = "";
    dbNote.forEach((item, idx) => {
        resultWrapper.innerHTML += `
        <li class="result-card">${idx + 1}
            ${item}
            <button class="delete-result"><i class='bx bxs-trash'></i></button>
        </li>
        `
    });

    document.querySelectorAll(".delete-result").forEach((item, idx) => {
        sortArr(noteDb.dbNote)
        item.addEventListener("click", () => {
            item.parentElement.remove()
            noteDb.dbNote.splice(idx, 1)
            noNotes.classList.add("active");
            addNewNote(noteDb.dbNote);
            // localStorage.removeItem("note's", item)
        });
    });
};
addNewNote();

sortArr(noteDb.dbNote);
addNewNote(noteDb.dbNote);

localStorage.setItem("notes", JSON.parse(item));