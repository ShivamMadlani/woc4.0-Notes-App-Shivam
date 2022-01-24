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
        <div class="menu" id="menu">
            <h3 class="nme">${element}</h3>
            <div class="btns">
                <button class="addtsk">Add task</button>
                <button class="deltsk" onclick="del(${index})">Del list</button>
            </div>
        </div>
    </li>`;
    });
    list.innerHTML = str;
}

function add() {
    new_refresh();
    refresh();
}


function del(iindex) {
    console.log("del");
    notesarr_str = localStorage.getItem('notes');
    notesarr = JSON.parse(notesarr_str);
    notesarr.splice(iindex, 1);
    localStorage.setItem('notes', JSON.stringify(notesarr));
    refresh();
}