function handleClickPa() {
    console.log("a clicked!");
}

function init() {
    // This code will be executed when page is completely loaded.
    console.log("Page loaded!");
    var pa = document.getElementById("a");
    pa.addEventListener("click", handleClickPa);
}

document.addEventListener("DOMContentLoaded", init);