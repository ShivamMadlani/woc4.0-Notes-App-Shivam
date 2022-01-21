function add() {
    var name = prompt("Enter the name of note", "Note");
    const name_node = document.createTextNode(name);

    const new_note = document.createElement("div");
    const new_btns = document.createElement("div");
    const h3 = document.createElement("h3");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");

    h3.appendChild(name_node);
    new_btns.appendChild(btn1);
    new_btns.appendChild(btn2);

    new_btns.className="btns";
    btn1.className="addtsk";
    btn2.className="deltsk";
    new_note.className = "menu";

    btn1.innerText="Add task";
    btn2.innerText="Del list";

    new_note.style.top = "-60px";
    new_btns.style.top = "210px";

    new_note.appendChild(h3);
    new_note.appendChild(new_btns);

    document.getElementById("menu").insertAdjacentElement ('afterend', new_note);
}