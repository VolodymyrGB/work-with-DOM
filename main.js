// Make a div
const body = document.body;
const wrapper = document.createElement('div');

// add a class of wrapper to it
wrapper.classList.add('wrapper')
// put it into the body
body.insertAdjacentElement("afterbegin",wrapper)
// make an unordered list
const ul = document.createElement('ul')
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const li = ['one','two','three']
li.forEach(elem => {
    const li = document.createElement('li')
    ul.append(li);
    li.innerHTML = elem;
    
})
wrapper.insertAdjacentElement("afterbegin",ul)
// create an image
const img = document.createElement('img')
// set the source to an image
img.src = 'https://picsum.photos/id/1003/367/267'
// set the width to 250
img.width = 250
// add a class of cute
img.classList.add('cute')
// add an alt of Cute Puppy
img.alt = ('Cute Puppy')
// Append that image to the wrapper
wrapper.insertAdjacentElement('beforeend',img)

// with HTML string, make a div, with two paragraphs inside of it
const par = `<div>
<p>Paragraph 1</p>
<p>Paragaraph 2</p> 
</div>`

// put this div before the unordered list from above
wrapper.insertAdjacentHTML('afterbegin', par)
// add a class to the second paragraph called warning
const ourParagraphs = document.querySelectorAll('p')
ourParagraphs[1].classList.add('warning')
// remove the first paragraph
ourParagraphs[0].remove()
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard (name, age, height){
    return `
   <div class="playerCard">
     <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${Math.trunc(age/7)}. That would be a tall dog!</p>
      <button>Delete card</button>
   </div>`
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div')
cards.classList.add('cards')

// make 4 player cards using generatePlayerCard
const humans = [
    {name:'Peter', age: 30, height: 150},
    {name:'Fred', age: 45, height: 190},
    {name:'Didro', age: 66, height: 140},
    {name:'Alex', age: 21, height: 180}]
const card = humans.map((human) => {
        return generatePlayerCard(human.name,human.age,human.height)
    }).join('')
    console.log (card)
// append those cards to the div
cards.insertAdjacentHTML('afterbegin',card)
// put the div into the DOM just before the wrapper element
wrapper.insertAdjacentElement('beforebegin',cards)
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('button')

// make out delete function
function removeCard (event){
    const currentButton = event.currentTarget
    return currentButton.closest('.playerCard').remove()
}

// loop over them and attach a listener
buttons.forEach((btn) => {
   btn.addEventListener('click', removeCard)
})
