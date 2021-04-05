function init (){
    let flight = document.getElementById("flightStatus");
    let takeOff = document.getElementById("takeoff");
    let bkgrnd = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let land = document.getElementById("landing");
    let abort = document.getElementById("missionAbort");
    let direction = getElementsByTagName("button");
        takeOff.addEventListener("click", function(){
            let ready = window.confirm("Confirm that shuttle is ready for takeoff.");
            if (ready === true) {
                flight.innerHTML = "Shuttle in flight."
                bkgrnd.style.background = 'blue';
                shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
            }
        })
        land.addEventListener("click", function(){
           window.alert("The shuttle is landing. Landing gear engaged.");
           flight.innerHTML = "The shuttle has landed."
           bkgrnd.style.background = 'green';
           shuttleHeight.innerHTML = 0;
        })
        abort.addEventListener("click", function(){
            let confirmAbort = window.confirm("Confirm that you want to abort the mission");
            if (confirmAbort === true){
                flight.innerHTML = "Mission aborted."
                bkgrnd.style.background = 'green';
                shuttleHeight.innerHTML = 0;
            }
        })
}

window.addEventListener("load", init);