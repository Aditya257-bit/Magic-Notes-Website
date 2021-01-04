let addBtn = document.getElementById('addbtn');
showNotes();

addBtn.addEventListener('click', (e) => {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));

    addtxt.value = "";
    console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function (element, index) {
        html += `
        <div class="card my-2 mx-2 noteCard" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">Notes</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deletenotes(this.id)" class="btn btn-primary">Delete Notes</button>
          </div>
        </div>
        `
        
        let elemnotes = document.getElementById('notes');
        
        if(elemnotes != 0){
            elemnotes.innerHTML = html;
        }
        else{
            elemnotes.innerHTML = "Nothing to show";
        }
        
    });
}

function deletenotes(index){
    console.log("I am deleting" + " " + index);
   
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}
