const state = {
    characterMap: {
        a: ".–",
        b: "–...",
        c: "–.–.",
        d: "–..",
        e: ".",
        f: "..–.",
        g: "––.",
        h: "....",
        i: "..",
        j: ".–––",
        k: "–.–",
        l: ".–..",
        m: "––",
        n: "–.",
        o: "–––",
        p: ".––.",
        q: "––.–",
        r: ".–.",
        s: "...",
        t: "–",
        u: "..–",
        v: "...–",
        w: ".––",
        x: "–..–",
        y: "–.––",
        z: "––..",
        " ": " "
    },
    userInput: "",
    result: ""
}

init()

function init() {
    getUserInput()
    enableCSSTransitions()
}

function enableCSSTransitions() {
    const body = document.querySelector("body")
    body.removeAttribute("class")
}

function getUserInput() {
    const form = document.querySelector(".userinput")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        state.userInput = form[0].value
        morseConverterAndRender()
    })
}

function morseConverterAndRender() {
    state.result = ""
    const resultSection = document.querySelector(".morse-result")
    resultSection.innerHTML = ""

    const resultDiv = document.createElement("div")

    for (letter of state.userInput.toLowerCase()) {
        const letterSpan = document.createElement("span")
        letterSpan.innerText = state.characterMap[letter] || "🤔" 
        resultDiv.appendChild(letterSpan)
    }
    resultSection.appendChild(resultDiv)
}