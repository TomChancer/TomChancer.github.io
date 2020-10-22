async function init() {
    var response = await fetch("assets/sus.json");
    return await response.json();
}

var suslist = [];
init().then(response => suslist = response);

async function actSus() {
    var randomIndex = Math.floor((Math.random() * suslist.roles.length));
    
    var randomRole = suslist.roles[randomIndex];
    var roleTitle = randomRole.roleName;
    var roleDescription = randomRole.roleDescription;

    document.querySelector('#role-name').innerHTML = roleTitle;
    document.querySelector('#role-description').innerHTML = roleDescription;
}