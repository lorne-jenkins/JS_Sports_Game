let RESET = document.querySelector("#reset-button")
let numResets = document.querySelector("#num-resets")
let team1Shots = document.querySelector("#teamone-numshots")
let team1Goals = document.querySelector("#teamone-numgoals")
let team1Shoot = document.querySelector("#teamone-shoot-button")
let team1Success = 0

let team2Shots = document.querySelector("#teamtwo-numshots")
let team2Goals = document.querySelector("#teamtwo-numgoals")
let team2Shoot = document.querySelector("#teamtwo-shoot-button")
let team2Success = 0
// shot tracking

team1Shoot.addEventListener('click', function() {
    // console.log("Eagles button clicked")
    let nextValTeam1Shots = Number(team1Shots.innerHTML) + 1
    team1Shots.innerHTML = nextValTeam1Shots
    if (Math.floor(Math.random()*5) > 0) {
        team1Success = team1Success+1
        team1Goals.innerHTML = team1Success
    }
    console.log(team1Success)

})

team2Shoot.addEventListener('click', function() {
    // console.log("Losers button clicked")
    let nextValTeam2Shots = Number(team2Shots.innerHTML) + 1
    team2Shots.innerHTML = nextValTeam2Shots
    if (Math.floor(Math.random()*5) > 0) {
        team2Success = team2Success+1
        team2Goals.innerHTML = team2Success
    }
    console.log(team2Success)
})
RESET.addEventListener('click', function() {
    // console.log("Reset button clicked")
    let nextValnumResets = Number(numResets.innerHTML) + 1
    numResets.innerHTML = nextValnumResets
    team1Shots.innerHTML = 0
    team2Shots.innerHTML = 0
    team1Goals.innerHTML = 0
    team2Goals.innerHTML = 0
    team1Success = 0
    team2Success = 0
})