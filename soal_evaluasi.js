       // Random soalnya
        let random = evaluasi.sort((a, b) => {return 0.5 - Math.random()})

        // Menampilkan soal yang sudah di-random
        let tampilkanSoal = random

        function isiEvaluasi() {
            const output = []
            let currentNumber = 1

            tampilkanSoal.forEach((currentQuestion, questionNumber) => {
                const jawaban = []

                for(letter in currentQuestion.jawaban) {
                    jawaban.push(
                        `
                           <label>
                                <input type="radio" name="soal${questionNumber}" value="${letter}"> 
                                <span>${letter}. ${currentQuestion.jawaban[letter]}</span>
                            </label> 
                        `
                    )
                }

                output.push(
                    `
                        <div class="boxsoalnya">
                            <div class="soal">${currentNumber}. ${currentQuestion.soal}</div>
                            <div class="jawaban">${jawaban.join("")}</div>
                        </div>
                    `
                )
                currentNumber++
            })
            questionContainer.innerHTML = output.join("")
        }

        function results() {
            const answerContainers = questionContainer.querySelectorAll('.jawaban')

            let numCorrect = 0
            let numWrong = 0

            tampilkanSoal.forEach((currentQuestion, questionNumber) => {
                const answerContainer = answerContainers[questionNumber]

                const selector = `input[name=soal${questionNumber}]:checked`
                const userAnswer = (answerContainer.querySelector(selector) || {}).value

                if(userAnswer === currentQuestion.kunci) {
                    numCorrect++
                } else {
                    numWrong++
                }

            })
            console.log(numCorrect)
            console.log(numWrong)
            sessionStorage.setItem('questionLength', tampilkanSoal.length)
            sessionStorage.setItem('correct', numCorrect)
            sessionStorage.setItem('wrong', numWrong)
            location.replace('./hasil_evaluasi.html')
        }
        
        function showSlide(n) {
            slides[currentSlide].classList.remove('active-slide')
            slides[n].classList.add('active-slide')

            const answerContainers = questionContainer.querySelectorAll('.jawaban')
            const answerContainer = answerContainers[currentSlide]
            const selector = `input[name=soal${currentSlide}]:checked`
            const userAnswer = (answerContainer.querySelector(selector) ||{}).value

            if (userAnswer != undefined) {
                nomor_soal[currentSlide].classList.add('nomor_terjawab')
            }

            currentSlide = n

            if(currentSlide === 0) {
                previousButton.style.display = 'none'
            } else {
                previousButton.style.display = 'inline-block'
            }

            if(currentSlide === slides.length-1) {
                nextButton.style.display = 'none'
                submitButton.style.display = 'inline-block'
            } else {
                nextButton.style.display = 'inline-block'
                submitButton.style.display = 'none'
            }
        }

        function showNextSlide() {
            showSlide(currentSlide + 1)
        }

        function showPreviousSlide() {
            showSlide(currentSlide - 1)
        }

        function paginationSlide(n) {
            showSlide(n)
        }
        
        // DOM Show question
        let questionContainer = document.getElementById("soaltampil")
        let nextButton = document.querySelector("#next")
        let previousButton = document.querySelector("#back")
        let submitButton = document.querySelector("#done")
        
        isiEvaluasi()
        const slides = document.querySelectorAll(".boxsoalnya")
        let currentSlide = 0
        
        showSlide(currentSlide)
        submitButton.addEventListener("click", results)
        nextButton.addEventListener("click", showNextSlide)
        previousButton.addEventListener("click", showPreviousSlide)

        let numberBtn = document.querySelector(".nomor")

        for(i=0; i<tampilkanSoal.length; i++) {
            let li = document.createElement("span")
            li.innerHTML = `
            <button type="button" class="btn nomor_soal" " onclick="paginationSlide(${i})">${i+1}</button>`

            numberBtn.appendChild(li)
        }

        let nomor_soal = document.querySelectorAll(".nomor_soal")   

        let showTime = document.querySelector("#waktu")
        let startMinutes = 60
        let seconds = 0

        function timer() {
            setTimeout(timer, 1000)
            seconds = seconds < 10 ? '0' + seconds : seconds
            showTime.innerHTML = `${startMinutes} : ${seconds}`

            seconds--
            if(seconds < 0) {
                seconds = 59
                startMinutes--
            }

            if(startMinutes < 0) {
                startMinutes = 0
                seconds = 0
            }

            if(startMinutes === 0 && seconds === 0)
                results()

            if(startMinutes > 60)
                submitButton.setAttribute("disabled", "")

            if(startMinutes < 60) {
                submitButton.removeAttribute("disabled", "")
                submitButton.classList.add('selesai')
            }
        }

        timer()