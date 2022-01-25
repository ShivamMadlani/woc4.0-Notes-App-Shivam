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
                <button class="addtsk" onclick="tsk()">Add task</button>
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

function add_tsk() {
    console.log("adding tsk");
    const name_tsk = prompt("Enter task");
    if (name_tsk != null) {
        if (localStorage.getItem('tasks') == null) {
            taskarr = [];
            taskarr.push(name_tsk);
            localStorage.setItem('tasks', JSON.stringify(taskarr));
        }
        else {
            taskarr_str = localStorage.getItem('notes');
            taskarr = JSON.parse(taskarr_str);
            taskarr.push(name_tsk);
            localStorage.setItem('tasks', JSON.stringify(taskarr));
        }
    }
    add_tsk2();
}

function add_tsk2() {
    if (localStorage.getItem('tasks') == null) {
        taskarr = [];
        localStorage.setItem('tasks', JSON.stringify(taskarr));
    }
    else {
        taskarr_str = localStorage.getItem('tasks');
        taskarr = JSON.parse(notesarr_str);
    }
    let tsk_list = document.getElementById('taskss');
    console.log(tsk_list);
    let s = "";
    taskarr.forEach(element => {
        s += `<li>${element}<button id="edit"><i class="material-icons">edit</i></button> <button id="trash"><i
        class="material-icons">delete</i></button></li>`;
    });
    tsk_list.innerHTML = s;
}

function tsk() {
    add_tsk();
    add_tsk2();
}