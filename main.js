function add() {
    var id=2;
    var name=['a','b','menu_2','menu_3','menu_4','menu_5'];
    for(;id<=5;){
        var m=document.getElementById("menu_2").id = name[3];
        
        console.log(m);

        m.style.display = "inline-block";
        const x = prompt('Enter name', 'Note');
        if (x != null) {
            document.getElementById(id).innerHTML = x;
        }
        id++;
        break;  
    }
}

function del(){
    var menu_2=document.getElementById("menu_2");
    menu_2.style.display = "none";
}