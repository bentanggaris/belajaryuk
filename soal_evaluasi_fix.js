// Merandom soal
let randomEvaluasi=evaluasi.sort((a, b)=>{return 0.5 - Math.random()})

soalSoal(0);

function soalSoal(index) {
    document.getElementById("soaltampil").innerHTML = evaluasi[index].soal;
    document.getElementById("pil1").innerHTML = evaluasi[index].a;
    document.getElementById("pil2").innerHTML = evaluasi[index].b;
    document.getElementById("pil3").innerHTML = evaluasi[index].c;
    document.getElementById("pil4").innerHTML = evaluasi[index].d;    
}

// let i = 0;
// let jwbBenar

// function cekBenarnya() {

//     if (document.getElementById("a").checked && evaluasi[i].a == evaluasi[i].jawaban) {
//        jwbBenar++;
//     }
//     if (document.getElementById("b").checked && evaluasi[i].b == evaluasi[i].jawaban) {
//         jwbBenar++;
//     }
//     if (document.getElementById("c").checked && evaluasi[i].c == evaluasi[i].jawaban) {
//         jwbBenar++;
//     }
//     if (document.getElementById("d").checked && evaluasi[i].d == evaluasi[i].jawaban) {
//         jwbBenar++;
//     }
// }

// let totalBenarnya = 20 - jwbBenar
// let totalNilai = totalBenarnya * 10

// function cekHasil() {
//     document.write("<body style='background-color:#FCF4EC;'>");
//     document.write("<div style='margin: 0 auto; padding: 3%; width: 500px; background-color: none; color:#282828; font-size:1rem; text-align:center; border: 3px #282828 solid;  border-radius:10px;'>Total Nilaimu : "+totalNilai+"</div>");
//     document.write("</body>");
// }