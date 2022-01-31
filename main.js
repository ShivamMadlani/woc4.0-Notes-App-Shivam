function new_refresh() {
    const not_nme = prompt("Enter name of note", "Note");
    if (not_nme != null) {
        if (localStorage.getItem('notes') == null) {
            notesarr = [];
            notesarr.push(not_nme);
            localStorage.setItem('notes', JSON.stringify(notesarr));
        }
        else {
            notesarr_str = localStorage.getItem('notes');
            notesarr = JSON.parse(notesarr_str);
            notesarr.push(not_nme);
            localStorage.setItem('notes', JSON.stringify(notesarr));
        }
    }
    refresh();
}

function refresh() {
    if (localStorage.getItem('notes') == null) {
        notesarr = [];
        localStorage.setItem('notes', JSON.stringify(notesarr));
    }
    else {
        notesarr_str = localStorage.getItem('notes');
        notesarr = JSON.parse(notesarr_str);
    }
    let list = document.getElementById("list");
    let str = "";
    notesarr.forEach((element, index) => {
        str += `
    <li id="list">
        <div id="menu">
            <h3 class="nme">${element}</h3>
            <ul>
                <li id="tasks"></li>
            </ul>
            <div class="btns">
                <button class="addtsk" id="addtsk" onclick="tsk(event)">Add task</button>
                <button class="deltsk" onclick="del(${index})">Del list</button>
            </div>
        </div>
    </li>`;
    });
    list.innerHTML = str;
}

function add() {
    new_refresh();
}


function del(iindex) {
    console.log("del");
    notesarr_str = localStorage.getItem('notes');
    notesarr = JSON.parse(notesarr_str);
    notesarr.splice(iindex, 1);
    localStorage.setItem('notes', JSON.stringify(notesarr));
    refresh();
}

function tsk(event) {
    const tsk_nme = prompt("Enter name of task");
    if (tsk_nme != null) {
        if (localStorage.getItem('ele') == null) {
            elemarr = [];
            elemarr.push(tsk_nme);
            localStorage.setItem('ele', JSON.stringify(elemarr));
        }
        else {
            elemarr = JSON.parse(localStorage.getItem('ele'));
            elemarr.push(tsk_nme);
            localStorage.setItem('ele', JSON.stringify(elemarr));
        }
        let s = "";
        elemarr.forEach(element => {
            s += `<li>${element}<button id="edit"><i class="material-icons">edit</i></button> <button id="trash"><i
            class="material-icons">delete</i></button></li>`;
        });
        event.target.parentElement.previousElementSibling.innerHTML = s;
    }
}
