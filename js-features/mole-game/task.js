const hole1 = document.getElementById("hole1");
const hole2 = document.getElementById("hole2");
const hole3 = document.getElementById("hole3");
const hole4 = document.getElementById("hole4");
const hole5 = document.getElementById("hole5");
const hole6 = document.getElementById("hole6");
const hole7 = document.getElementById("hole7");
const hole8 = document.getElementById("hole8");
const hole9 = document.getElementById("hole9");
let killed = document.getElementById("dead");
let misses = document.getElementById("lost");
let killCounter = 0;
let missCounter = 0;

function holeCheck(hole) {

    let rightHole = document.getElementsByClassName("hole hole_has-mole");
    console.log(rightHole.item(0));
    let toCompare = rightHole.item(0);
    if (hole.id === toCompare.id) {
        killCounter += 1;
        killed.textContent = killCounter;
    } else {
        missCounter += 1;
        misses.textContent = missCounter;
    }
    if (killed.textContent > 9) {
        alert("Победа!");
        missCounter = 0;
        killCounter = 0;
        killed.textContent = 0;
        misses.textContent = 0;
    } else if (misses.textContent > 4) {
        alert("Поражение!");
        missCounter = 0;
        killCounter = 0;
        killed.textContent = 0;
        misses.textContent = 0;
    }
}

hole1.onclick = () => {
    holeCheck(hole1);
}

hole2.onclick = () => {
    holeCheck(hole2);
}

hole3.onclick = () => {
    holeCheck(hole3);
}

hole4.onclick = () => {
    holeCheck(hole4);
}

hole5.onclick = () => {
    holeCheck(hole5);
}

hole6.onclick = () => {
    holeCheck(hole6);
}

hole7.onclick = () => {
    holeCheck(hole7);
}

hole8.onclick = () => {
    holeCheck(hole8);
}

hole9.onclick = () => {
    holeCheck(hole9);
}

