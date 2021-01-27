function handleClickPa() {
    console.log("a clicked!");
    var pa = document.getElementById("a");
    pa.classList.add("gbox");
}

function handleClickPb() {
    console.log("b clicked!");
    var pb = document.getElementById("b");
    pb.classList.add("gbox");
}

function handleClickPc() {
    console.log("c clicked!");
    var pc = document.getElementById("c");
    pc.classList.add("gbox");
}

function handleClickPd() {
    console.log("d clicked!");
    var pd = document.getElementById("d");
    pd.classList.add("gbox");
}

function handleClickPe() {
    console.log("e clicked!");
    var pe = document.getElementById("e");
    pe.classList.add("gbox");
}

function handleClickPf() {
    console.log("f clicked!");
    var pf = document.getElementById("f");
    pf.classList.add("gbox");
}

function handleClickPg() {
    console.log("g clicked!");
    var pg = document.getElementById("g");
    pg.classList.add("gbox");
}

function handleClickPh() {
    console.log("h clicked!");
    var ph = document.getElementById("h");
    ph.classList.add("gbox");
}

function handleClickPi() {
    console.log("i clicked!");
    var pi = document.getElementById("i");
    pi.classList.add("gbox");
}

function handleClickPj() {
    console.log("j clicked!");
    var pj = document.getElementById("j");
    pj.classList.add("gbox");
}

function init() {
    // This code will be executed when page is completely loaded.
    console.log("Page loaded!");
    var letters = "abcdefghij";
    var handlers = [handleClickPa, handleClickPb, handleClickPc,
                    handleClickPd, handleClickPe, handleClickPf,
                    handleClickPg, handleClickPh, handleClickPi,
                    handleClickPj];
    var ps = document.getElementsByTagName("p");
    for (var i = 0; i < letters.length; i++) {
        ps[i].addEventListener("click", handlers[i]);
    }
}

document.addEventListener("DOMContentLoaded", init);