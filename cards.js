console.log("hello")

let activeCard = 1;

let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");
let cards = document.querySelectorAll(".card");
let card1 = document.querySelector(".card-1");
let card2 = document.querySelector(".card-2");
let card3 = document.querySelector(".card-3");
let card4 = document.querySelector(".card-4");
let card5 = document.querySelector(".card-5");
let card6 = document.querySelector(".card-6");
let hiddenBlockLeft = document.querySelector(".hidden-block-left");
let hiddenBlockRight = document.querySelector(".hidden-block-right");


leftArrow.addEventListener('click', cardDown);
rightArrow.addEventListener('click', cardUp);

  function cardUp() {
    activeCard += 1;
    console.log("CardUp");
    rightArrow.classList.add("selected")
    hideAllCards();
    toggleCard("right");
    checkIfHideButton();
    cards.forEach(card => card.addEventListener('transitionend', removeTransition));
  }

  function cardDown() {
    activeCard -= 1;
    console.log("CardUp");
    hideAllCards();
    toggleCard("left");
    checkIfHideButton();
    cards.forEach(card => card.addEventListener('transitionend', removeTransition));
  }

  function removeTransition(e){
    if (e.propertyName !== 'transform') return; //Skip if not a transform
    console.log("over");
    this.classList.remove('transitioning');
    this.classList.remove('transition-left');
    this.classList.remove('transition-right');
  }


  function hideAllCards() {
    console.log("Hiding");
    cards.forEach((card) => {
      card.classList.add("hidden-card");
    })
  }

  function toggleCard (direction) {
    console.log(direction);
    switch(activeCard) {
      case 1:
        card1.classList.remove('hidden-card');
        card1.classList.add('transitioning');
        if (direction === "left") {
          card1.classList.add("transition-left");
        } else {
          card1.classList.add("transition-right")
        }
        break;
      case 2:
        card2.classList.remove('hidden-card');
        card2.classList.add('transitioning'); 
        if (direction === "left") {
          card2.classList.add("transition-left");
        } else {
          card2.classList.add("transition-right")
        }
        break;
      case 3:
        card3.classList.remove('hidden-card');
        card3.classList.add('transitioning');
        if (direction === "left") {
          card3.classList.add("transition-left");
        } else {
          card3.classList.add("transition-right")
        } 
        break;
      case 4:
        card4.classList.remove('hidden-card');
        card4.classList.add('transitioning');
        if (direction === "left") {
          card4.classList.add("transition-left");
        } else {
          card4.classList.add("transition-right")
        } 
        break;
      case 5:
        card5.classList.remove('hidden-card');
        card5.classList.add('transitioning');
        if (direction === "left") {
          card5.classList.add("transition-left");
        } else {
          card5.classList.add("transition-right")
        } 
        break;
      case 6:
        card6.classList.remove('hidden-card');
        card6.classList.add('transitioning');
        if (direction === "left") {
          card6.classList.add("transition-left");
        } else {
          card6.classList.add("transition-right")
        } 
        break;        
    }
  }

  function checkIfHideButton(){
    console.log("Checking arrow")
    if (activeCard === 1) {
      leftArrow.classList.add('hidden');
      hiddenBlockLeft.classList.remove('hidden');
    } else if (activeCard === 6) {
      rightArrow.classList.add('hidden')
      hiddenBlockRight.classList.remove('hidden');
    } else {
      leftArrow.classList.remove('hidden');
      rightArrow.classList.remove('hidden');
      hiddenBlockLeft.classList.add('hidden');
      hiddenBlockRight.classList.add('hidden');
    }
  }