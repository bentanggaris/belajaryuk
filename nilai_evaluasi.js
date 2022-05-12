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
if(score >= 65) {
    note = "Selamat, ya! Kamu berhasil melewati evaluasi ini! <i class='far fa-grin-stars'></i>"
} else {
    note = "Gapapa, ayo baca materi dan berlatih lagi, ya! Semangat! <i class='far fa-smile-beam'></i> <i class='far fa-hand-rock'> <i class='fas fa-fire'></i>"
}
score = score < 100 ? score.toFixed(2) : score

const firebaseConfig = {
  apiKey: "AIzaSyCxpS8aXUb3h-SJ26_W3KRVQrW8kHrrMLA",
  authDomain: "evaluasi-b8a0b.firebaseapp.com",
  databaseURL: "https://evaluasi-b8a0b-default-rtdb.firebaseio.com",
  projectId: "evaluasi-b8a0b",
  storageBucket: "evaluasi-b8a0b.appspot.com",
  messagingSenderId: "913656822730",
  appId: "1:913656822730:web:fd2619009b3a0d9bdfed33",
  measurementId: "G-2P3W62S5FY"
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

function clearResults() {
    sessionStorage.setItem("nama", "");
    sessionStorage.setItem("kelas", "");
    sessionStorage.setItem("correct", "");
    sessionStorage.setItem("wrong", "");
    sessionStorage.setItem("score","");
    sessionStorage.setItem("note","");

}

function resultsHistory(testNumber, nameUser, klsUser, scoreUser, noteUser) {
    let hasilnya = document.querySelector("#hasilnya")

    let tr = document.createElement('tr')
    let html = `
        <td>${testNumber}</td>
        <td>${nameUser}</td>
        <td>${klsUser}</td>
        <td>${scoreUser}</td>
        <td>${noteUser}</td>
    `
    tr.innerHTML = html
    hasilnya.appendChild(tr)
}

document.addEventListener("DOMContentLoaded", function(){
    let testNumber = 1

    for(let i=0; i<quizMastereva; i++) {
        if(quizResults["results"][i].correctAnswer != "" && quizResults["results"][i].wrongAnswer != "") {
            resultsHistory(testNumber, quizResults["results"][i].nameUser, quizResults["results"][i].klsUser, quizResults["results"][i].correctAnswer, quizResults["results"][i].wrongAnswer, quizResults["results"][i].scoreUser, quizResults["results"][i].noteUser)
        }
        testNumber++
    }

    let nextSection = document.querySelector("#backto")
    nextSection.addEventListener("click", function(){
        location.href = 'perbandingan_video.html'
        clearResults()
    })
})