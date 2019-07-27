const questions = [
    {
        number: 1,
        title: 'Who is our Creator?',
        options: ['Allah', 'My mother','Jesus'],
        answer: 'Allah'
    },
    {
        number: 2,
        title: 'Who is our first Prophet?',
        options: ['Adam', 'Idris','Yunus'],
        answer: 'Adam'
    },
    {
        number: 3,
        title: 'How many pillars are there in Islam?',
        options: ['5', '6','4'],
        answer: '5'
    },
    {
        number: 4,
        title: 'Who is the last Prophet?',
        options: ['Musailamah', 'Muhammad','Yunus'],
        answer: 'Muhammad'
    },
    {
        number: 5,
        title: 'Who was the first martyr of Islam?',
        options: ['Sumayyah bint Khabbat', 'Yasir ibn Amr al- Ansi','Hamzah bin Abdul Muttalib'],
        answer: 'Sumayyah bint Khabbat'
    },
    {
        number: 6,
        title: 'Who was the wise man mentioned in the Quran, whose advices to his son is very famous?',
        options: ['Omar', 'Luqman','Firawn'],
        answer: 'Luqman'
    },
    {
        number: 7,
        title: 'Which Prophet was the grandfather of Yusuf a.s?',
        options: ['Yakub', 'Ishaq','Musa'],
        answer: 'Ishaq'
    },
    {
        number: 8,
        title: 'Who was Iblis?',
        options: ['Jinn', 'Human','Angel'],
        answer: 'Jinn'
    },
    {
        number: 9,
        title: 'Who was the father of prophet Sulaiman a.s?',
        options: ['Zakariyya', 'Yusuf','Dawud'],
        answer: 'Dawud'
    }, 
    {
        number: 10,
        title: 'Which prophet was thrown into the fire by the king of his time?',
        options: ['Isa', 'Ibrahim','Ismail'],
        answer: 'Ibrahim'
    }, 
    {
        number: 11,
        title: 'Who was the wife of Firawn?',
        options: ['Aasiya', 'Maryam','Aisyah'],
        answer: 'Aasiya'
    }, 
    {
        number: 12,
        title: 'Where was the quran first revealed?',
        options: ['Cave of Hira', 'Jabal Nour','Jabal Arafah'],
        answer: 'Cave of Hira'
    }, 
    {
        number: 13,
        title: 'What did the jealous brothers of Yusuf a.s do to him when he was a child?',
        options: ['Killed him', 'Threw him in a well','Fed him to the wolves'],
        answer: 'Threw him in a well'
    }, 
    {
        number: 14,
        title: 'Who was Abu Lahab to Prophet Muhammad s.a.w ?',
        options: ['His Grandfather', 'His Uncle','His Cousin'],
        answer: 'His Uncle'
    }, 
    {
        number: 15,
        title: 'Which prophet was ordered by Allah to build an ark?',
        options: ['Nuh', 'Idris','Salih'],
        answer: 'Nuh'
    },

]
const answersBuffer = [];

function showResult(id) {
    var answer = $(`#question-${id}-options input:radio:checked`).val()
    var questionId = parseInt(id) - 1;
    if (answer == questions[questionId].answer) {
        document.getElementById(`result-${id}`).innerHTML= 'Your answer is correct. Please continue';
        answersBuffer[questionId] = true;
    }
    else {
        document.getElementById(`result-${id}`).innerHTML= 'WRONG';
        answersBuffer[questionId] = false;
    }
}

function printH1s() {
    document.getElementById('startbutton').innerHTML="RESET";
    const divForH1 = document.getElementById('meantForH1');
    
    // clear the div firsst
    divForH1.innerHTML = '';

    for(const question of questions){
        answersBuffer[question.number - 1] = false;
        const optionsWrapperId = `question-${question.number}-options`
        divForH1.innerHTML += `
            <div>
                <p class="lead">${question.title}</p>

                <div id='${optionsWrapperId}'></div>
                <button id='${question.number}' onclick="showResult(this.id)"  type="button" class="btn btn-outline-info">Check</button> 
                <p id='result-${question.number}'>RESULTS: </p>
            </div>
        `;

        const optionsWrapper = document.getElementById(optionsWrapperId);
        for(const option of question.options) {
            optionsWrapper.innerHTML += `
            <label class="btn btn-secondary">
                <input type="radio" name="${question.number}" id="q1a" autocomplete="off" checked value="${option}"> ${option}
            </label>
            `
        }

    

    }

    divForH1.innerHTML += `
            <div>
                <button id='finish' onclick="finish()" type="button" class="btn btn-outline-danger">Finish</button> 
                <p id="finishbtn">Press finish to calculate results</p>

            </div>
            
        `;
}


function finish() {
    //calculate correct ans
    let numberOfCorrectAns = 0
    for(const answer of answersBuffer){
      if(answer === true ) {
        numberOfCorrectAns += 1 
      }  
    }
    document.getElementById('finishbtn').innerHTML= 'You got ' + numberOfCorrectAns + '/15. '  + outputMessage(numberOfCorrectAns);

}

function outputMessage(score) {
    if (score >= 10) {
        return "Congrats"
    }
    else if (score >= 7) {
        return "Good Job"
    }
    else if (score >= 0) {
        return "Try Again"
    }
    else {
        return ""
    }
}

