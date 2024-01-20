// function handleSubmit() {
//     let name = document.querySelector(".name")
//     let email = document.querySelector(".email")
//     // console.log(name.value)
//     // console.log(email.value)
//     alert(`THe entered name and email are ${name.value} and ${email.value}`)
//     // console.log("Submit clicked")
// }
// function handleClickOnSpan(event) {
//     console.log(event.target.className)
//     let currEle =  document.querySelector(`.${event.target.className}`)
//     currEle.style.background = "black"
//     console.log(event)
//     document.body.style.background = event.target.className
// }

// const purpleButton = document.querySelector(".purple")

// purpleButton.addEventListener("click" , (event) => {
//     console.log(event)
//     document.body.style.background = "purple"
// })

// let form = document.querySelector("form")

// form.addEventListener("submit", (e)=>{
//     // debugger
//     e.preventDefault()

//     // console.log(e.target)

//     let height = parseFloat(document.querySelector(".height").value)
//     let weight = parseFloat(document.querySelector(".weight").value)
//     // console.log(height.value)

//     let BMI = (weight / (height* height)).toFixed(2)
//     if(!isNaN(BMI)){
//         let result = document.querySelector(".result")
//         console.log(result)
//         result.style.visibility = "visible"
//         result.innerHTML = `Your BMI is ${BMI}`

//         let clearButton = document.querySelector(".clear-button")
//         clearButton.style.visibility = "visible"
//     }else{
//         alert("Please enter correct Values")
//     }

//     console.log(BMI)
// })

// function handleClear () {
//     let result = document.querySelector(".result")
//     result.style.visibility = "hidden"

//     let clearButton = document.querySelector(".clear-button")
//     clearButton.style.visibility = "hidden"

//     let height = document.querySelector(".height")
//     let weight = document.querySelector(".weight")

//     height.value = ""
//     weight.value = ""
// }

// Local clock
// let clock = document.querySelector(".clockdigits")

// setInterval(()=> {
//     let date = new Date().toLocaleTimeString()
//     clock.innerHTML = date
// }, 1000)

// GUESS the number
let randomNumber;
function gererateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
}


let guessedNumbers = [];

function handleSubmit() {
  let i = document.querySelector(".input");
  let input = parseInt(i.value);

  let remainingGuess = document.querySelector(".remaining-guess")
  let remainingGuessNumber = parseInt(remainingGuess.innerHTML)

  if (isNaN(input) || input < 1) {
    alert("Please enter a valid");
    i.value = "";
    gererateRandomNumber()
    return;
  }
  if (input === randomNumber) {
    alert("You have guessed correct Number, starting a new game");
    remainingGuess.innerHTML = 10;
    guessedNumbers = [];
    i.value = "";
    gererateRandomNumber()
  } else {
    guessedNumbers.push(input);
    i.value = "";
    remainingGuess.innerHTML = remainingGuessNumber - 1;
  }
  highLowSet(input)
}

function highLowSet(input) {
  let loworhigh = document.querySelector('.loworhigh') 
  if(input > randomNumber){
   loworhigh.innerHTML = "Enter a lower Number"
  }else{
    loworhigh.innerHTML = "Enter a higher Number"
  }
}

setInterval(handleState, 100);

function handleState() {
  let prevguess = document.querySelector(".previous-guess");
  prevguess.innerHTML = guessedNumbers;

  let remainingGuess = document.querySelector(".remaining-guess");
  let remainingGuessNumber = parseInt(remainingGuess.innerHTML);

  if (remainingGuessNumber === 0) {
    alert("Your attempts are finished, we are starting a new game");
    remainingGuess.innerHTML = 10;
    guessedNumbers = [];
  }
}
gererateRandomNumber()
