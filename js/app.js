var btnBurger = document.getElementById("btn-burger");

function showMenu(){
    var menu = document.getElementById("op-menu");

    if(menu.classList.contains("disabled-m")){
        menu.classList.remove("disabled-m");
        menu.classList.add("enable-m");
        menu.classList.add("enable-line");
    }
    else {
        menu.classList.remove("enable-m");
        menu.classList.add("disabled-m");
    }
}

btnBurger.addEventListener('click', showMenu);
