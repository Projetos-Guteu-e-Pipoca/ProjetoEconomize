function bot(){
    var areas = document.getElementsByName("areas")
    var p = document.getElementById("Lporque")
    var e = document.getElementById("Lenergia")
    var a = document.getElementById("Lagua")
    var d = document.getElementById("Ldia")
    p.style.backgroundColor = "rgb(0, 186, 0)"
    e.style.backgroundColor = "rgb(0, 186, 0)"
    a.style.backgroundColor = "rgb(0, 186, 0)"
    d.style.backgroundColor = "rgb(0, 186, 0)"
    
    if (areas[0].checked) {
        p.style.backgroundColor = "red"
    }
    if (areas[1].checked){
        e.style.backgroundColor = "red"
    }
    if (areas[2].checked){
        a.style.backgroundColor = "red"
    }
    if (areas[3].checked){
        d.style.backgroundColor = "red"
    }
}

bot()