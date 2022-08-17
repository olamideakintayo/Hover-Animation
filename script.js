//We are grabbing the H1 contain the title
const h1 = document.querySelector("h1")
//We are spiliting the title Characters.
const letters = h1.innerText.split('')

let html = ""

//using forEach to assign some codes to each of the letters.

letters.forEach(letter => {
    let classes = ''

    if(letter !== ' ') {
        classes = 'letter js-letter'
    }
    html = html + `<span class='${classes}'>${letter}</span>`
})

h1.innerHTML = html

//Now we Select each of the code

const jsLetters = document.querySelectorAll(".js-letter")

//Then we loop through each of them and add two event listeners
//one event listener for when we hover over the letter, the other is for when we remove our pointer from the letter.

jsLetters.forEach(node => {
   node.addEventListener("mouseover", function(event) {
    this.classList.add("active")
   })

   node.addEventListener("mouseout", function(event) {
    this.classList.remove("active")
   })
}) 