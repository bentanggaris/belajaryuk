// Merandom soal
let randomEvaluasi=evaluasi.sort((a, b)=>{return 0.5 - Math.random()})

// Memotong soal
// let sliceEvaluasi=randomEvaluasi.slice(0,5)

var i = 0;
var correctCount = 0 ;

generate(0);

function generate(index) {
    document.getElementById("soaltampil").innerHTML = evaluasi[index].soal;
    document.getElementById("pil1").innerHTML = evaluasi[index].a;
    document.getElementById("pil2").innerHTML = evaluasi[index].b;
    document.getElementById("pil3").innerHTML = evaluasi[index].c;
    document.getElementById("pil4").innerHTML = evaluasi[index].d;    
}

function checkAnswer() {
    if (document.getElementById("a").checked && evaluasi[i].a == evaluasi[i].jawaban) {
       correctCount++;
    }
    if (document.getElementById("b").checked && evaluasi[i].b == evaluasi[i].jawaban) {
        correctCount++;
    }
    if (document.getElementById("c").checked && evaluasi[i].c == evaluasi[i].jawaban) {
        correctCount++;
    }
    if (document.getElementById("d").checked && evaluasi[i].d == evaluasi[i].jawaban) {
        correctCount++;
    }    

    i++;
    if(evaluasi.length-1 < i){
        document.write("<body style='background-color:black;'>");
        document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>*****Your score is : "+correctCount+"*****</div>");
        document.write("</body>");
    }

    generate(i);
}