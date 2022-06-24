

function targetLocation() {
    const targetValue = document.getElementById('search').value;

    
    var changeColor = document.getElementById(targetValue).style.backgroundColor = "navy";
}

function restart() {
    location.reload();
}

document.addEventListener("keyup", function (event) {
    if (event.code === 'Enter') {
        targetLocation();
    }
});