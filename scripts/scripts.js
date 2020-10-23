async function init() {
    var response = await fetch("assets/sus.json");
    return await response.json();
}

var suslist = [];
init().then(response => suslist = response);

async function actSus() {
    //Animation & Sound Logic logic
    var audio = new Audio('assets/sounds/eject.mp3'); 
    audio.play();

    document.querySelector('.background-crewmate-ejected').classList.add("eject-animation");

    setTimeout(function() {
        document.querySelector('.background-crewmate-ejected').classList.remove("eject-animation");
    }, 7000);
    
    //Actual Logic.
    var randomIndex = Math.floor((Math.random() * suslist.roles.length));
    
    var randomRole = suslist.roles[randomIndex];
    var roleTitle = randomRole.roleName;
    var roleDescription = randomRole.roleDescription;

    document.querySelector('#role-name').innerHTML = "You are a " + roleTitle;
    document.querySelector('#role-description').innerHTML = roleDescription;
}