let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let count = 0

function add1HomeScore() {
    count +=1
    homeScore.textContent = count
}

function add2HomeScore() {
    count +=2
    homeScore.textContent = count  
}

function add3HomeScore() {
    count +=3
    homeScore.textContent = count
}

function resetHomeScore() {
    count = 0
    homeScore.textContent = count
}

function add1GuestScore() {
    count +=1
    guestScore.textContent = count
}

function add2GuestScore() {
    count +=2
    guestScore.textContent = count
}

function add3GuestScore() {
    count +=3
    guestScore.textContent = count   
}

function resetGuestScore() {
    count = 0
    guestScore.textContent = count
}