// 2572015 - Steven Theodore Alden
var skor = 0;
function terapkanWarna() {
    var r = document.getElementById("r").value;
    var g = document.getElementById("g").value;
    var b = document.getElementById("b").value;

    if (r === "") { r = 0; }
    if (g === "") { g = 0; }
    if (b === "") { b = 0; }
    document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
}

function acakWarna() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    document.getElementById("r").value = r;
    document.getElementById("g").value = g;
    document.getElementById("b").value = b;

    document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
}

function ubahSkor(angka) {
    skor = skor + angka;
    document.getElementById("counter").textContent = skor;
}

function resetSemua() {
    document.getElementById("r").value = "";
    document.getElementById("g").value = "";
    document.getElementById("b").value = "";

    document.body.style.backgroundColor = "white";

    skor = 0;
    document.getElementById("counter").textContent = 0;
}