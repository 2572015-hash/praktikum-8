// 2572015 - Steven Theodore Alden

var skorPlayer = 0;
var skorBot = 0;

var pilihan = ["batu", "kertas", "gunting"];

var gambarPilihan = {
    "batu"    : "rock.png",
    "kertas"  : "paper.png",
    "gunting" : "scissor.png"
};

function mainkan(pilihanPlayer) {
    var angkaRandom = Math.floor(Math.random() * 3);
    var pilihanBot = pilihan[angkaRandom];
    var imgPlayer = document.getElementById("gambar-player");
    var imgBot    = document.getElementById("gambar-bot");

    imgPlayer.src = gambarPilihan[pilihanPlayer];
    imgBot.src    = gambarPilihan[pilihanBot];

    imgPlayer.alt = pilihanPlayer;
    imgBot.alt    = pilihanBot;

    var hasilTeks = "";

    if (pilihanPlayer === pilihanBot) {
        hasilTeks = "DRAW!";

    } else if (
        (pilihanPlayer === "batu"    && pilihanBot === "gunting") ||
        (pilihanPlayer === "kertas"  && pilihanBot === "batu")    ||
        (pilihanPlayer === "gunting" && pilihanBot === "kertas")
    ) {

        skorPlayer = skorPlayer + 1;
        hasilTeks = "PLAYER WIN!";

    } else {
        skorBot = skorBot + 1;
        hasilTeks = "BOT WIN!";
    }

    document.getElementById("skor").textContent = skorPlayer + " - " + skorBot;

    document.getElementById("hasil").textContent = hasilTeks;
}