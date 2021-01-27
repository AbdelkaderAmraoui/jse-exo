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

function init() {
    // This code will be executed when page is completely loaded.
    console.log("Page loaded!");
    var pa = document.getElementById("a");
    pa.addEventListener("click", handleClickPa);
    var pb = document.getElementById("b");
    pb.addEventListener("click", handleClickPb);
}

document.addEventListener("DOMContentLoaded", init);