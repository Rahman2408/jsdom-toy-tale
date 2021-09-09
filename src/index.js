let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
getToys();
});

function getToys(){
  
fetch('http://localhost:3000/toys')
.then(response => response.json())
.then(renderToys)
// .then(results => {
//   results.forEach(toy => createToyCard(toy))
//   })
};

function renderToys(toys) {
//  debugger
  toys.forEach(toy => {
   let cardEl = document.createElement("div")
   cardEl.className="card"
   cardEl.innerHTML = toy
    
    document.getElementById("toy-collection").appendChild(cardEl)
  })
}




// function createToyCard(toy) {
//   const toyCard = document.createElement("div")
//   toyCard.className = "card"
//   const toyCollection = document.getElementById("toy-collection")
//   toyCard.innerHTML = toy
//   toyCollection.appendChild(toyCard)
//   debugger
// }