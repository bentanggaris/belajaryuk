let correctAnswer = sessionStorage.getItem("correct")
let wrongAnswer = sessionStorage.getItem("wrong")
let nameUser = sessionStorage.getItem("name")
let kelasUser = sessionStorage.getItem("kelas")
let questionLength = sessionStorage.getItem("questionLength")   
    const firebaseConfig = {
    apiKey: "AIzaSyD_XzmG6n2aGWv8QWqqbNdU17walCQYwGk",
    authDomain: "latihan-70d51.firebaseapp.com",
    databaseURL: "https://latihan-70d51-default-rtdb.firebaseio.com",
    projectId: "latihan-70d51",
    storageBucket: "latihan-70d51.appspot.com",
    messagingSenderId: "55703925572",
    appId: "1:55703925572:web:6dd4f88d755cbd2f02dd11",
    measurementId: "G-YL3LYE31R5"
  };


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let quizResults ={}
quizResults.results = []

let result = {}

result.nameUser = nameUser
result.kelasUser = kelasUser
result.correctAnswer = correctAnswer
result.wrongAnswer = wrongAnswer

if(localStorage && localStorage.getItem('quizMaster')){

    quizResults = JSON.parse(localStorage.getItem('quizMaster'))

    if(result.correctAnswer !="" && result.wrongAnswer !=""){
    quizResults.results.push(result)
}

    localStorage.setItem('quizMaster', JSON.stringify(quizResults))

    clearResults()
}else{
    localStorage.setItem('quizMaster',JSON.stringify(quizResults))
    if(result.correctAnswer !="" && result.wrongAnswer !=""){
    quizResults.results.push(result)
}

    localStorage.setItem('quizMaster', JSON.stringify(quizResults))

    clearResults()
}

function clearResults(){
    sessionStorage.setItem("correct","")
    sessionStorage.setItem("wrong","")
    sessionStorage.setItem("name","")
    sessionStorage.setItem("kelas","")

}

function resultsHistory(testNumber,nameUser,correctAnswer,wrongAnswer){
    let resultsContainer = document.querySelector(".resultsContainer")

    let note
    let score = (parseInt(correctAnswer)/ parseInt(questionLength)) * 100

    if(score >= 65){
        note = "Lulus"
    }else{
        note = "Tidak Lulus"
    }

    score = score < 100 ? score.toFixed(2) : score
    
    data = {
        nama: nameUser,
        score: score,
        kelas: kelasUser
    }
    console.log(data);
    
    let tr = document.createElement('tr')
    let html =`
        <td>${testNumber}</td>
        <td>${nameUser}</td>
        <td>${kelasUser}</td>
        <td>${correctAnswer}</td>
        <td>${wrongAnswer}</td>
        <td>${score}</td>
        <td>${note}</td>
    `
    tr.innerHTML = html
    resultsContainer.appendChild(tr)
}

document.addEventListener("DOMContentLoaded", function(){
    let testNumber = 0

    for(let i=0; i<quizResults["results"].length; i++){
        ++testNumber
        if(quizResults["results"][i]['correctAnswer'] !="" && quizResults["results"][i]['wrongAnswer'] !=""){
        resultsHistory(testNumber, quizResults["results"][i].nameUser, quizResults["results"][i]['correctAnswer'],
            quizResults["results"][i]['wrongAnswer'])
        }else{

        }
    }
    
    const database = firebase.database();
    database.ref("pretest").push(data);

    let tryAgain = document.querySelector('#try-again')
    tryAgain.addEventListener("click", function(){
        location.href='index.html'
        clearResults()
    })
})

if(localStorage && localStorage.getItem('quizMaster')){
    let quizMaster = JSON.parse(localStorage.getItem('quizMaster'))

    
}