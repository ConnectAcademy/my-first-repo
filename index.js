let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let maxEl = document.getElementById("max-el")
let isOddEl = document.getElementById("is-odd-el")
let count = 0
let maxEntry = 0

console.log(isOddEl)

function increment() {
    count++;
    countEl.innerHTML = count
}

function save() {
    console.log(saveEl.innerText)
    if (!saveEl.innerText) {
        prevEntry = countEl.innerText
    } else {
        prevEntry = saveEl.innerText + " - " + countEl.innerText
    }

    if (maxEntry < count) {
        maxEntry = count
    }

    if (count == 0) {
        isOddEl.innerText = "0 entries, nor even nor odd"
    } else if (count % 2 == 0) {
        isOddEl.innerText = "Even"
    } else {
        isOddEl.innerText = "Odd"
    }

    maxEl.innerText = maxEntry
    saveEl.innerText = prevEntry
    countEl.innerText = 0
    count = 0
}