// // heading2.innerText = 'jasper'

// function nameChanger() {
//     let randomNumber = Math.ceil(Math.random() * 10)
//     number.innerText = randomNumber
// //   let sth = heading2.innerText === "Guess My Number";
// //   if (sth) {
//     //     heading2.innerText = "Joseph Abraham";
//     //   } else {
//         //     heading2.innerText = "Guess My Number";
//         //   }
//     }

//     btn.addEventListener('click' ,nameChanger)

// Handling Input Fields
// To get the data from an input field, you need to pass a .value

// let inputField = document.querySelector('.guess')
// inputField.value = 20
// console.log(typeof Number(inputField.value));

// -------------------------------------------------------------------------------------------------

const btn = document.querySelector(".check");



function logic() {
    let guessedNumber = Math.ceil(Math.random() * 6)
    const msg = document.querySelector(".message");
    const number = document.querySelector(".number");
    let score = document.querySelector('.score')
    let heading = document.querySelector('h2')
    let body = document.body.style
    number.textContent = guessedNumber
    let guess = Number(document.querySelector('.guess').value)

    if(!guess){
        msg.textContent = 'No Input entered'
    }else if (guess === guessedNumber) {
        msg.textContent = 'Winner 🏆'
        body.backgroundColor = 'green'
    }else{
        msg.textContent = 'Wrong Guess 😭'
        body.backgroundColor = 'yellow'

    }if (score.textContent == 0 ){
        score.textContent == 0
    } else{
        score.textContent--
    }
    if(score.textContent == 0) {
        heading.textContent = 'Trials Exceeded, Please click on play aagain Button to Restart '
    }

}

btn.addEventListener('click' ,logic)