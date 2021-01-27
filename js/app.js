function handleClickP(e) {
    var p = e.target;
    p.classList.add("gbox");
}


function init() {
    // This code will be executed when page is completely loaded.
    console.log("Page loaded!");
    var ps = document.getElementsByTagName("p");
    for (var i = 0; i < ps.length; i++) {
        ps[i].addEventListener("click", handleClickP);
    }
}

document.addEventListener("DOMContentLoaded", init);