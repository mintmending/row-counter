let entryEl = document.getElementById("entry-span")
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    //f9d9c0
    // entryEl.style.color = "#b0d8b6";
    // entryEl.style.color = "#f9d9c0";
    // entryEl.style.textShadow = "0 0 2px #f47f75";
    entryEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
