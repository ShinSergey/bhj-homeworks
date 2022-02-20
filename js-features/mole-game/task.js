
let holes = document.getElementsByClassName("hole");
let killed = document.getElementById("dead");
let misses = document.getElementById("lost");
let killCounter = 0;
let missCounter = 0;

// function holeCheck(holes) {
// let rightHole;
// for (let i = 0; i < holes.length; i++) {
//     if (holes[i].className === "hole hole_has-mole") {
//     console.log(holes[i]);
//     rightHole = holes[i];
//     killCounter += 1;
//     killed.textContent = killCounter;
//     } else {
//         missCounter += 1;
//         misses.textContent = missCounter;
//     }
// };
// let toCompare = rightHole;
// if (holes.id === toCompare.id) {
//     killCounter += 1;
//     killed.textContent = killCounter;
// } else {
//     missCounter += 1;
//     misses.textContent = missCounter;
//     // }
//     if (killed.textContent > 9) {
//         alert("Победа!");
//         missCounter = 0;
//         killCounter = 0;
//         killed.textContent = 0;
//         misses.textContent = 0;
//     } else if (misses.textContent > 4) {
//         alert("Поражение!");
//         missCounter = 0;
//         killCounter = 0;
//         killed.textContent = 0;
//         misses.textContent = 0;
//     }
// }

holes.onclick = () => {
    let rightHole;
    for (let i = 0; i < holes.length; i++) {
        if (holes[i].className === "hole hole_has-mole") {
            console.log(holes[i]);
            rightHole = holes[i];
            killCounter += 1;
            killed.textContent = killCounter;
        } else {
            missCounter += 1;
            misses.textContent = missCounter;
        }
    };
    function endGame(type) {
        alert(type);
        missCounter = 0;
        killCounter = 0;
        killed.textContent = 0;
        misses.textContent = 0;
    };
    if (killed.textContent > 9) {
        endGame("Победа!");
    } else if (misses.textContent > 4) {
        endGame("Поражение!");
    }
    // holeCheck(holes);
}