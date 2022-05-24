let nameUser = sessionStorage.getItem("nama")
let klsUser = sessionStorage.getItem("kelas")
let correctAnswer = sessionStorage.getItem("correct")
let wrongAnswer = sessionStorage.getItem("wrong")
let questionLength = sessionStorage.getItem("questionLength")

let quizResults = {}
quizResults.results = []

let result = {}

let note
let score = (parseInt(correctAnswer) / parseInt(questionLength)) * 100
if(score >= 70) {
    note = "Selamat, ya! Kamu berhasil melewati evaluasi ini! Terima kasih atas kerja kerasmu <i class='far fa-grin-stars'></i>"
} else {
    note = "Yah, nilai kamu belum mencukupi KKM. Gapapa kok, yuk baca materi dan berlatih lagi! Semangat! <i class='far fa-smile-beam'></i> <i class='far fa-hand-rock'> <i class='fas fa-fire'></i>"
}
score = score < 100 ? score.toFixed(2) : score

const firebaseConfig = {
  apiKey: "AIzaSyAsQsejibLhoUqNwMAB2VS-ZaOyyASjTHI",
  authDomain: "belajaryuk-2e6eb.firebaseapp.com",
  databaseURL: "https://belajaryuk-2e6eb-default-rtdb.firebaseio.com",
  projectId: "belajaryuk-2e6eb",
  storageBucket: "belajaryuk-2e6eb.appspot.com",
  messagingSenderId: "584931503788",
  appId: "1:584931503788:web:3d4e3793a4767258473909"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const d = new Date();
const data = {
    namaS:nameUser,
    kelasS:klsUser,  
    nilai:score,
    keterangan : note,
    waktu : `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`

}

var database = firebase.database();
database.ref(`evaluasi`).push(data);

result.nameUser = nameUser
result.klsUser = klsUser
result.correctAnswer = correctAnswer
result.wrongAnswer = wrongAnswer
result.scoreUser = score
result.noteUser = note

if(localStorage && localStorage.getItem('quizMastereva')) {
    quizResults = JSON.parse(localStorage.getItem('quizMastereva'))

    if(result.correctAnswer != "" && result.wrongAnswer != "") {
        quizResults.results.push(result)
    }

    localStorage.setItem('quizMastereva', JSON.stringify(quizResults))
    clearResults()
} else {
    localStorage.setItem('quizMastereva', JSON.stringify(quizResults))
    if(result.correctAnswer != "" && result.wrongAnswer != "") {
        quizResults.results.push(result)
    }

    localStorage.setItem('quizMastereva', JSON.stringify(quizResults))
    clearResults()
}

// Hapus datanya
function clearResults() {
    sessionStorage.setItem("nama", "");
    sessionStorage.setItem("kelas", "");
    sessionStorage.setItem("correct", "");
    sessionStorage.setItem("wrong", "");
    sessionStorage.setItem("score","");
    sessionStorage.setItem("note","");

}

// Tampilkan data baru
function newResults(nameUser, klsUser, scoreUser, noteUser) {

    let hasilnya = document.querySelector("#hasilnya")   

    let p = document.createElement('p')
    let html = `
        <p>Hai, ${nameUser}! Dari kelas ${klsUser}.<br>Nilai kamu <b>${scoreUser}</b>.<br>${noteUser}.
    `
    p.innerHTML = html
    hasilnya.appendChild(p)
   
}

document.addEventListener("DOMContentLoaded", function(){
    let quizMastereva = quizResults["results"].length   

    if(result.nameUser != ""){
        newResults(quizResults["results"][quizMastereva-1].nameUser, quizResults["results"][quizMastereva-1].klsUser, quizResults["results"][quizMastereva-1].scoreUser, quizResults["results"][quizMastereva-1].noteUser)
    }

    let nextSection = document.querySelector("#backto")
    nextSection.addEventListener("click", function(){
        location.href = 'perbandingan_video.html'
        clearResults()
    })
})