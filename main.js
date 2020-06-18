let bodyElement = document.querySelector("body")
let button = document.createElement("button")
button.append("Remove")
bodyElement.append(button)


let mainElement = document.createElement("main")
bodyElement.append(mainElement)

let imgElement = document.createElement("img")
mainElement.append(imgElement)
imgElement.className = "image"
imgElement.src = "https://cdn.pixabay.com/photo/2016/02/22/10/06/hedgehog-1215140_960_720.jpg"

let anchorElement = document.createElement("link")
anchorElement.href = "https://google.com"
anchorElement.className = "link"
mainElement.append(anchorElement)
anchorElement.append("https://google.com")

button.addEventListener("click", function () {
    mainElement.remove()
})

// let userInput = document.createElement("text")
// userInput.className = "inputBox"
// bodyElement.append(userInput)


let button2 = document.createElement("button")
button2.append("Remove Element")
bodyElement.append(button2)




// console.log("hello12345")