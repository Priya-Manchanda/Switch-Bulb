let a = document.getElementById('btn');
let b = document.getElementsByClassName('centre')[0];
a.addEventListener('click', function (e) {
    if (a.textContent.includes('On')) {
        b.src = "images/Bulb on.jpg";
        a.textContent = "Turn Off";
    }
    else {
        b.src = "images/Bulb off.jpg";
        a.textContent = "Turn On";
    }
})