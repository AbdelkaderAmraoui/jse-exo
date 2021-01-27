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
    var pa = document.getElementById("a");
    pa.addEventListener("click", handleClickPa);
    var pb = document.getElementById("b");
    pb.addEventListener("click", handleClickPb);
    var pc = document.getElementById("c");
    pc.addEventListener("click", handleClickPc);
    var pd = document.getElementById("d");
    pd.addEventListener("click", handleClickPd);
    var pe = document.getElementById("e");
    pe.addEventListener("click", handleClickPe);
    var pf = document.getElementById("f");
    pf.addEventListener("click", handleClickPf);
    var pg = document.getElementById("g");
    pg.addEventListener("click", handleClickPg);
    var ph = document.getElementById("h");
    ph.addEventListener("click", handleClickPh);
    var pi = document.getElementById("i");
    pi.addEventListener("click", handleClickPi);
    var pj = document.getElementById("j");
    pj.addEventListener("click", handleClickPj);
}

document.addEventListener("DOMContentLoaded", init);