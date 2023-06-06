
let img = "img/mascot_images/mascote_sobre.png";
let shown_img = document.getElementById("mascote");

function change_mascot_click (src) {
    img = src;
    shown_img.src = img;
}

function change_mascot_on (src) {
    shown_img.src = src;
}

function change_mascot_out () {
    shown_img.src = img;
}