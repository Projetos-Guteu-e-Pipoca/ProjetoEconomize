function bot(){
    var areas = document.getElementsByName("areas")
    var p = document.getElementById("Lporque")
    var e = document.getElementById("Lenergia")
    var a = document.getElementById("Lagua")
    var d = document.getElementById("Ldia")
    var p2 = document.getElementById("pq")
    var e2 = document.getElementById("ener")
    var a2 = document.getElementById("ag")
    var d2 = document.getElementById("d")
    p.style.backgroundColor = "rgb(0, 186, 0)"
    e.style.backgroundColor = "rgb(0, 186, 0)"
    a.style.backgroundColor = "rgb(0, 186, 0)"
    d.style.backgroundColor = "rgb(0, 186, 0)"
    
    if (areas[0].checked) {
        p.style.backgroundColor = "green"
    }
    if (areas[1].checked){
        e.style.backgroundColor = "green"
    }
    if (areas[2].checked){
        a.style.backgroundColor = "green"
    }
    if (areas[3].checked){
        d.style.backgroundColor = "green"
    }
}

bot()