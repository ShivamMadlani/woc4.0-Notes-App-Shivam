function add() {
    var menu_2 = document.getElementById("menu_2");
    menu_2.style.display = "inline-block";
    const x = prompt('Enter name', 'Note');
    if (x != null) {
        document.getElementById("2").innerHTML = x;
    }
}

function del(){
    var menu_2=document.getElementById("menu_2");
    menu_2.style.display = "none";
}