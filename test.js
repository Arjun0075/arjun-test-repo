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


let form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    // debugger
    e.preventDefault()
    
    // console.log(e.target)

    let height = parseFloat(document.querySelector(".height").value)
    let weight = parseFloat(document.querySelector(".weight").value) 
    // console.log(height.value)

    let BMI = (weight / (height* height)).toFixed(2)
    if(!isNaN(BMI)){
        let result = document.querySelector(".result")
        console.log(result)
        result.style.visibility = "visible"
        result.innerHTML = `Your BMI is ${BMI}`
    
        let clearButton = document.querySelector(".clear-button")
        clearButton.style.visibility = "visible"    
    }else{
        alert("Please enter correct Values")
    }

   
    console.log(BMI)
})

function handleClear () {
    let result = document.querySelector(".result")
    result.style.visibility = "hidden"

    let clearButton = document.querySelector(".clear-button")
    clearButton.style.visibility = "hidden"

    let height = document.querySelector(".height")
    let weight = document.querySelector(".weight")

    height.value = ""
    weight.value = ""
}
   
