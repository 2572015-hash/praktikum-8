// 2572015 - Steven Theodore Alden

function mulaiQuiz() {
    var operasi = ["+", "-", "*"];
    var skor = 0;
    var jumlahSoal = 0;

    while (true) {

        var angka1 = Math.floor(Math.random() * 20) + 1;
        var angka2 = Math.floor(Math.random() * 20) + 1;
        var indexOperasi = Math.floor(Math.random() * operasi.length);
        var op = operasi[indexOperasi];

        var jawaban = 0;
        if (op === "+") {
            jawaban = angka1 + angka2;
        } else if (op === "-") {
            jawaban = angka1 - angka2;
        } else if (op === "*") {
            jawaban = angka1 * angka2;
        }

        var soal = "Berapa hasil dari " + angka1 + " " + op + " " + angka2 + " ?";
        var inputUser = prompt(soal);

        if (inputUser === null || inputUser === "exit") {
            break;
        }

        jumlahSoal = jumlahSoal + 1;

        var jawabanUser = parseFloat(inputUser);

        if (Math.abs(jawabanUser - jawaban) < 0.01) {
            alert("Benar!");
            skor = skor + 1;
        } else {
            alert("Salah! Jawaban yang benar adalah: " + jawaban);
        }
    }
    var tampilkan = confirm("Apakah kamu ingin melihat hasil quiz?");

    if (tampilkan) {

        document.getElementById("result").textContent = "Skor Akhir: " + skor + " / " + jumlahSoal;

        var waktu = new Date().toLocaleString();
        document.getElementById("datetime").textContent = "Selesai pada: " + waktu;
    }
}