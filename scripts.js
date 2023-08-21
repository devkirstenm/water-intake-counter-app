// document.getElementById("count").innerText = 5

let countDisplayed = document.getElementById("count")
let count = 0
let saveDisplayed = document.getElementById("save-displayed")


function increment() {
    count += 1
    countDisplayed.innerText = count
}

function save() {
    let displayedText = count + " - "
    saveDisplayed.textContent += displayedText
    countDisplayed.textContent = 0
    count = 0 
    
}