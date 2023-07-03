const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];


function shuffle(array) {
    let counter = array.length;
  
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;

      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }

  let shuffledColors = shuffle(COLORS);


function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);

    newDiv.addEventListener("click", handleCardClick);

    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
        let card1 = null;
        let card2 = null;
        let noClicking = false;
    // you can use event.target to see which element was clicked
    console.log("you just clicked", event.target);
  }
  
  // when the DOM loads
  createDivsForColors(shuffledColors);