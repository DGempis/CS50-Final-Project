// Home + Guest scoreboard
let homeScore = document.getElementById("home-score-ele")
let guestScore = document.getElementById("guest-score-ele")

let homeCount = 0;
let guestCount = 0;

// Buttons
let homeOne = document.getElementById("home-one-ele")
let homeTwo = document.getElementById("home-two-ele")
let homeThree = document.getElementById("home-three-ele")

let guestOne = document.getElementById("guest-one-ele")
let guestTwo = document.getElementById("guest-two-ele")
let guestThree = document.getElementById("guest-three-ele")

let resetButton = document.getElementById("reset-button-ele")

// Home Button Functions
homeOne.addEventListener('click', function(){
    homeCount += 1
    console.log(homeCount);
    homeScore.textContent = homeCount
});

homeTwo.addEventListener('click', function(){
    homeCount += 2
    console.log(homeCount);
    homeScore.textContent = homeCount
});

homeThree.addEventListener('click', function(){
    homeCount += 3
    console.log(homeCount);
    homeScore.textContent = homeCount

});
// Away Button Functions
guestOne.addEventListener('click', function(){
    guestCount += 1
    console.log(guestCount);
    guestScore.textContent = guestCount
});

guestTwo.addEventListener('click', function(){
    guestCount += 2
    console.log(guestCount);
    guestScore.textContent = guestCount

});

guestThree.addEventListener('click', function(){
    guestCount += 3
    console.log(guestCount);
    guestScore.textContent = guestCount
});

// Reset Button Function
resetButton.addEventListener('click', function(){
    homeCount = 0
    guestCount = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
});