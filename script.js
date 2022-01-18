document.getElementById("width-text").innerText =
    "Width: " + document.getElementById("background").offsetWidth + "px";
window.addEventListener("resize", myFunction);
function myFunction(e) {
    document.getElementById("width-text").innerText =
        "Width: " + document.getElementById("background").offsetWidth + "px";
}

// starting from here, this at top is just for fun

var buttons = document.getElementById("buttons");

var soundDisplayer = document.getElementById("soundDisplayer");

buttons.addEventListener("click", buttonClick);

var cooldownColor = 'red';

function buttonClick(e) {
    if (e.target.tagName == "BUTTON") {
        soundDisplayer.innerText = e.target.value;
        e.target.querySelector("audio").volume =
            document.getElementById("volumeControl").value / 100;
        e.target.querySelector("audio").currentTime = 0;
        e.target.querySelector("audio").play();
        e.target.style.transform = "scale(0.9)";
        var interval = setInterval(function () {
            e.target.style.background = 'linear-gradient(90deg, transparent ' + e.target.querySelector("audio").currentTime / e.target.querySelector("audio").duration * 100 + '%, ' + cooldownColor + ' ' + e.target.querySelector("audio").currentTime / e.target.querySelector("audio").duration * 100 + '%)';
        }, 10);
        function disableBackground() {
            clearInterval(interval);
            for (let audioFile of document.querySelectorAll("audio")) {
                audioFile.parentNode.style.background = 'transparent';
            }
        }
        document.getElementById('switcher').addEventListener('click', disableBackground);
        document.getElementById('switcher2').addEventListener('click', disableBackground);
        setTimeout(function () { clearInterval(interval) }, e.target.querySelector("audio").duration * 1100);
        setTimeout(function () {
            e.target.style.transform = "none";
        }, 200);
    }
}

document.addEventListener("keydown", keyPressed);

function keyPressed(e) {
    switch (e.key) {
        case "q":
        case "w":
        case "e":
        case "a":
        case "s":
        case "d":
        case "z":
        case "z":
        case "x":
        case "c":
            document.querySelector(`button[id=${e.key}]`).click();
            break;
    }
}

document
    .getElementById("volumeControl")
    .addEventListener("input", volumeHandler);

function volumeHandler(e) {
    var color =
        "linear-gradient(90deg, red " +
        e.target.value +
        "%, white " +
        e.target.value +
        "%)";
    e.target.style.background = color;
    for (let audioFile of document.querySelectorAll("audio")) {
        audioFile.volume = e.target.value / 100;
    }
}

document
    .getElementById("volumeControl")
    .addEventListener("input", volumeHandlerDisplay);

function volumeHandlerDisplay(e) {
    soundDisplayer.innerText = "Volume: " + e.target.value;
}

document.getElementById('switcher').addEventListener('click', function () {
    if (this.checked == true) {
        buttons.removeEventListener("click", buttonClick);
        document.getElementById('switcher2').disabled = true;
        document
            .getElementById("volumeControl")
            .removeEventListener("input", volumeHandlerDisplay);
        for (let audioFile of document.querySelectorAll("audio")) {
            audioFile.muted = true;
            audioFile.currentTime = audioFile.duration;
        }
        soundDisplayer.innerText = '';
    } else {
        buttons.addEventListener("click", buttonClick);
        document.getElementById('switcher2').disabled = false;
        document
            .getElementById("volumeControl")
            .addEventListener("input", volumeHandlerDisplay);
        for (let audioFile of document.querySelectorAll("audio")) {
            audioFile.muted = false;
            audioFile.load();
        }
    }
});

const modeOne = [
    {
        picture: 'https://www.svgrepo.com/show/191135/cow.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/cow.mp3',
        value: 'Cow',
        button: 'q'
    },
    {
        picture: 'https://www.svgrepo.com/show/191143/sheep.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/sheep.mp3',
        value: 'Sheep',
        button: 'w'
    },
    {
        picture: 'https://www.svgrepo.com/show/191162/crocodile.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/alligator.mp3',
        value: 'Crocodile',
        button: 'e'
    },
    {
        picture: 'https://www.svgrepo.com/show/191129/cat.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/cat.mp3',
        value: 'Cat',
        button: 'a'
    },
    {
        picture: 'https://www.svgrepo.com/show/191127/wolf.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/dog.mp3',
        value: 'Dog',
        button: 's'
    },
    {
        picture: 'https://www.svgrepo.com/show/191138/elephant.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/elephant.mp3',
        value: 'Elephant',
        button: 'd'
    },
    {
        picture: 'https://www.svgrepo.com/show/191148/duck.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/duck.mp3',
        value: 'Duck',
        button: 'z'
    },
    {
        picture: 'https://www.svgrepo.com/show/191142/frog.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/frog.mp3',
        value: 'Frog',
        button: 'x'
    },
    {
        picture: 'https://www.svgrepo.com/show/191168/moose.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/moose.mp3',
        value: 'Moose',
        button: 'c'
    }
];
const modeTwo = [
    {
        picture: 'https://www.svgrepo.com/show/256411/snake.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/rattlesnake.mp3',
        value: 'Snake',
        button: 'q'
    },
    {
        picture: 'https://www.svgrepo.com/show/169431/anteater.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/anteater.mp3',
        value: 'Anteater',
        button: 'w'
    },
    {
        picture: 'https://www.svgrepo.com/show/42438/buffalo.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/buffalo.mp3',
        value: 'Buffalo',
        button: 'e'
    },
    {
        picture: 'https://www.svgrepo.com/show/64207/chicken.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/chicken.mp3',
        value: 'Chicken',
        button: 'a'
    },
    {
        picture: 'https://www.svgrepo.com/show/289105/crow.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/crow.mp3',
        value: 'Crow',
        button: 's'
    },
    {
        picture: 'https://www.svgrepo.com/show/77672/dinosaur-hand-drawn-toy-animal.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/dinosaur.mp3',
        value: 'Dinosaur',
        button: 'd'
    },
    {
        picture: 'https://www.svgrepo.com/show/232065/lion.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/lion.mp3',
        value: 'Lion',
        button: 'z'
    },
    {
        picture: 'https://www.svgrepo.com/show/2925/pig.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/pig.mp3',
        value: 'Pig',
        button: 'x'
    },
    {
        picture: 'https://www.svgrepo.com/show/209846/turkey.svg',
        sound: 'https://www.google.com/logos/fnbx/animal_sounds/turkey.mp3',
        value: 'Turkey',
        button: 'c'
    }
];

document.getElementById('switcher2').addEventListener('click', modeSwitch);

function modeSwitch() {
    if (this.checked == true) {
        this.disabled = true;
        soundDisplayer.innerText = 'Animal Pack 2';
        document.getElementById('switcher').disabled = true;
        buttons.removeEventListener("click", buttonClick);
        buttons.style.opacity = '0%';
        setTimeout(function () {
            buttons.style.opacity = '100%';
            for (let btnIndex = 0; btnIndex < modeTwo.length; btnIndex++) {
                document.getElementById(modeTwo[btnIndex].button).value = modeTwo[btnIndex].value;
                document.getElementById(modeTwo[btnIndex].button).querySelector('audio').src = modeTwo[btnIndex].sound;
                document.getElementById(modeTwo[btnIndex].button).style.setProperty('--background-img', 'url(' + modeTwo[btnIndex].picture + ')');
            }
        }, 900);
        var i = 0;
        var j = 240;
        var deg = 45;
        var bg1 = setInterval(function () {
            if (i < 120) {
                i++;
            }
            if (j > 60) {
                j--;
            }
            if (deg < 225) {
                deg++;
            }
            document.getElementById('background').style.background = 'linear-gradient(' + deg + 'deg, hsl(' + i + ', 100%, 50%) -20%, hsl(' + j + ', 100%, 50%))';
        }, 10);
        setTimeout(function () {
            clearInterval(bg1);
            document.getElementById('switcher2').disabled = false;
            buttons.addEventListener("click", buttonClick);
            document.getElementById('switcher').disabled = false;
            cooldownColor = 'green';
        }, 1800);
        document.getElementById('power').classList.add('addShadow');
        document.getElementById('bank').classList.add('addShadow');
        document.querySelectorAll('#buttons button').forEach(element => element.classList.add('addShadow'));
    } else {
        this.disabled = true;
        soundDisplayer.innerText = 'Animal Pack 1';
        buttons.removeEventListener("click", buttonClick);
        document.getElementById('switcher').disabled = true;
        buttons.style.opacity = '0%';
        setTimeout(function () {
            buttons.style.opacity = '100%';
            for (let btnIndex = 0; btnIndex < modeOne.length; btnIndex++) {
                document.getElementById(modeOne[btnIndex].button).value = modeOne[btnIndex].value;
                document.getElementById(modeOne[btnIndex].button).querySelector('audio').src = modeOne[btnIndex].sound;
                document.getElementById(modeOne[btnIndex].button).style.setProperty('--background-img', 'url(' + modeOne[btnIndex].picture + ')');
            }
        }, 900);
        var i = 120;
        var j = 60;
        var deg = 225;
        var bg1 = setInterval(function () {
            if (i > 0) {
                i--;
            }
            if (j < 240) {
                j++;
            }
            if (deg > 45) {
                deg--;
            }
            document.getElementById('background').style.background = 'linear-gradient(' + deg + 'deg, hsl(' + i + ', 100%, 50%) -20%, hsl(' + j + ', 100%, 50%))';
        }, 10);
        setTimeout(function () {
            clearInterval(bg1);
            document.getElementById('switcher2').disabled = false;
            buttons.addEventListener("click", buttonClick);
            document.getElementById('switcher').disabled = false;
            cooldownColor = 'red';
        }, 1800);
        document.getElementById('power').classList.remove('addShadow');
        document.getElementById('bank').classList.remove('addShadow');
        document.querySelectorAll('#buttons button').forEach(element => element.classList.remove('addShadow'));
    }
}