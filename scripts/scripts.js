function actSus() {
    fetch("assets\sus.json")
        .then(response => response.json())
        .then(json => console.log(json));
}