// function handleSubmit() {
//     let name = document.querySelector(".name")
//     let email = document.querySelector(".email")
//     // console.log(name.value)
//     // console.log(email.value)
//     alert(`THe entered name and email are ${name.value} and ${email.value}`)
//     // console.log("Submit clicked")
// }
function handleClickOnSpan(event) {
    console.log(event.target.className)
    // let currEle =  document.querySelector(`.${event.target.className}`)
    // currEle.style.background = "black"
    console.log(event)
    document.body.style.background = event.target.className
}

// const purpleButton = document.querySelector(".purple")

// purpleButton.addEventListener("click" , (event) => {
//     console.log(event)
//     document.body.style.background = "purple"
// })