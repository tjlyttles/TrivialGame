$(document).ready(function() {
    var correctAns = ''
    var inCorrect = ''
    var unAnswered = ''
    var timeLeft = ''
    var nextQuestion = ''
    var buttonClicked = false
    var timeLeft = ''
    var intervalId = ''
    var elem = document.getElementById('timer')
    var startbutton = document.getElementById('start')
    var quizDisplay = document.getElementById('gamedisplay')
    var revealCorrect = document.getElementById('revealcorrect')
    var revealWrong = document.getElementById('revealwrong')
    var nextButton = document.getElementById('nextquestion')
    var resultButton = document.getElementById('resultbutton')
    var displayResults = document.getElementById('displayscore')
    var timeUp = document.getElementById('timeup')
    var questionArr = [{
        Question: 'Whose 2013 world tour was called "The Mrs Carter Show"?',
        choice1: 'Ariana Grande',
        choice2: 'Beyonce',
        choice3: 'Nicki Minaj',
        choice4: 'Christina Aguilera',
        answer: 'option2'
    },
        {Question: ' Who had a hit in the 1970\'s with his song Piano Man?',
         choice1: 'Rod Stewart',
         choice2: 'Phil Collins',
         choice3: 'Elton John',
         choice4: 'Billy Joel',
         answer: 'option4'
    },
        {Question: 'Which pop singer\'s real name is Robyn Fenty?',
        choice1: 'Rihanna',
        choice2: 'Lady Gaga',
        choice3: 'Cardi B',
        choice4: 'Nicki Minaj',
        answer: 'option1'
    },
        {Question: 'Joe Cocker had a 1969 hit with his cover of which Beatles song?',
        choice1: 'Hey Jude',
        choice2: 'With A Little Help From My Friends',
        choice3: 'Day Tripper',
        choice4: 'Hello Goodbye',
        answer: 'option2'
    },
        {Question: 'The hit singles Woman In Love (Barbra Streisand), Chain Reaction (Diana Ross), Islands In The Stream (Kenny Rogers and Dolly Parton), and Heartbreaker (Dionne Warwick) were all written by which pop group?',
        choice1: 'The Beatles',
        choice2: 'ABBA',
        choice3: 'Carpenters',
        choice4: 'The Bee Gees',
        answer: 'option4'
    },
        {Question: 'Which pop star played 27 different instruments on their debut album For You?',
        choice1: 'Elton John',
        choice2: 'Justin Bieber',
        choice3: 'Prince',
        choice4: 'Billy Joel',
        answer: 'option3'
    },
        {Question: 'Who was the first country artist to sell over 10 million copies of an album?',
        choice1: 'Garth Brooks',
        choice2: 'Shania Twain',
        choice3: 'Tim McGraw',
        choice4: 'Carrie Underwood',
        answer: 'option1'
    }]    
   
    startbutton.addEventListener('click', startGame)
    nextButton.addEventListener('click', prepNextQuestion)
    resultButton.addEventListener('click', showResultsFunc)

    function startGame() {
        nextQuestion = 0
        start.style.display = 'none'
        quizDisplay.style.display = 'block'
        showQuestion()        
    }  
    
    function run() {
        clearInterval(intervalId)
        timeLeft = 15
        intervalId = setInterval(decrement, 1000)      
        elem.innerHTML = timeLeft + ' seconds remaining'        
    }

    function decrement() {

        timeLeft--;
        elem.innerHTML = timeLeft + ' seconds remaining' 
  
        if (timeLeft === 0) {
            
            unAnswered++
            
            timeUp.style.display = 'block'
            quizDisplay.style.display = 'none'

            if ((nextQuestion+1) < questionArr.length) {
                nextButton.style.display = 'block'
                clearInterval(intervalId)
                run()
            } else {
                resultButton.style.display = 'block'
                clearInterval(intervalId)                
            }
          
        }
    }


    function prepNextQuestion() {
        nextQuestion++        
            
        console.log('question+' + nextQuestion)
        //show 'next question' button
        
        document.getElementById('question').value = 'clear'
        document.getElementById('option1').value = 'clear'                
        document.getElementById('option2').value = 'clear'                
        document.getElementById('option3').value = 'clear'                
        document.getElementById('option4').value = 'clear'

        revealCorrect.style.display = 'none'
        revealWrong.style.display = 'none'
        timeUp.style.display = 'none'
        nextButton.style.display = 'none'        
        quizDisplay.style.display = 'block'
        showQuestion()   
    }

    function showQuestion() {
        run()
        document.getElementById('question').innerHTML = questionArr[nextQuestion].Question
        document.getElementById('option1').innerHTML = questionArr[nextQuestion].choice1
        document.getElementById('option2').innerHTML = questionArr[nextQuestion].choice2
        document.getElementById('option3').innerHTML = questionArr[nextQuestion].choice3
        document.getElementById('option4').innerHTML = questionArr[nextQuestion].choice4
        $('.choice').unbind().click(function() {
            buttonClicked = true
            var correctAnswer = questionArr[nextQuestion].answer
            quizDisplay.style.display = 'none'
            if ((nextQuestion+1) < questionArr.length) {
                nextButton.style.display = 'block'
            } else {
                resultButton.style.display = 'block'
                clearInterval(intervalId)                
            }
                          
            if (this.id === correctAnswer) {
                correctAns++
                console.log('score+= ' + correctAns)
                revealCorrect.style.display = 'block'
                revealWrong.style.display = 'none'

            } else if (this.id !== correctAnswer) {
                inCorrect++
                console.log('score-= ' + inCorrect)
                revealWrong.style.display = 'block'
                revealCorrect.style.display = 'none'
            } 
        })   
    }

    function showResultsFunc() {
        revealCorrect.style.display = 'none'
        revealWrong.style.display = 'none'
        resultButton.style.display = 'none'
        displayResults.style.display = 'block'
        document.getElementById("amountcorrect").append(' ' + correctAns)
        document.getElementById("amountincorrect").append(' ' + inCorrect)
        document.getElementById("amountunanswered").append(' ' + unAnswered)

    }
})