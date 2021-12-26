
showNotes()

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addText")
    let addTitle = document.getElementById("addTitle")
    let notes = localStorage.getItem("notes")

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }

    let myobj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myobj);

    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";

    showNotes()
})

function showNotes() {
    let notes = localStorage.getItem("notes")

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += ` <div class="noteCard card mx-3 my-3 " style="width: 18rem;">
       <div class="card-body">
           <h5 class="card-title"> ${index+1}. ${element.title}</h5>
           <p class="card-text" >Note:- ${element.text}</p>
           <button class="btn btn-primary" id="${index}" onClick ="deleteNotes(this.id)">Remove</button>
       </div>
   </div>`

    });
    notesElement = document.getElementById('notes')
    if (notesObj != 0) {
        notesElement.innerHTML = html;

    }
    else {
        notesElement.innerHTML = ` Nothing To Show`
    }
}

function deleteNotes(index) {
    let notes = localStorage.getItem("notes")

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes()

}


let search = document.getElementById("searchNotes");

search.addEventListener("input", function () {
    let inputVAl = search.value.toLowerCase();

    let notesCard = document.getElementsByClassName("noteCard")

    Array.from(notesCard).forEach(function searchShow(element) {

        // let cardText = element.getElementsByTagName("p")[0].innerText;
        let title = element.getElementsByTagName("h5")[0].innerText;

        if (title.includes(inputVAl)) {
            element.style.display = "block";

        }
        else {
            element.style.display = "none"
        }
    });

});

