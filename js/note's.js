const form = document.querySelector(".note-form"),
    noteInp = document.querySelector(".writer"),
    resultWrapper = document.querySelector(".request"),
    noNotes = document.querySelector(".no-notes");
    dbNote = [];


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newNotes = noteInp.value;   
    noNotes.classList.add("active");
    if(newNotes) {
        dbNote.push(newNotes);
        addNewNote(dbNote);
        sortArr(dbNote)
        console.log(dbNote);
        localStorage.setItem("note's", JSON.stringify(newNotes));
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
        sortArr(dbNote)
        item.addEventListener("click", () => {
            item.parentElement.remove()
            dbNote.splice(idx, 1)
            noNotes.classList.add("active");
            addNewNote(dbNote);
            // localStorage.removeItem("note's", item)
        });
    });
};
sortArr(dbNote);
addNewNote(dbNote);
