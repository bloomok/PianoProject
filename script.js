function resetBgColor() {
        let keyA = document.querySelector(".keyA");
        keyA.style.backgroundColor = "white";
        let keyS = document.querySelector(".keyS");
        keyS.style.backgroundColor = "white";
        let keyD = document.querySelector(".keyD");
        keyD.style.backgroundColor = "white";
        let keyF = document.querySelector(".keyF");
        keyF.style.backgroundColor = "white";
        let keyG = document.querySelector(".keyG");
        keyG.style.backgroundColor = "white";
        let keyH = document.querySelector(".keyH");
        keyH.style.backgroundColor = "white";
        let keyJ = document.querySelector(".keyJ");
        keyJ.style.backgroundColor = "white";
        let keyW = document.querySelector(".keyW");
        keyW.style.backgroundColor = "black";
        let keyE = document.querySelector(".keyE");
        keyE.style.backgroundColor = "black";
        let keyT = document.querySelector(".keyT");
        keyT.style.backgroundColor = "black";
        let keyY = document.querySelector(".keyY");
        keyY.style.backgroundColor = "black";
        let keyU = document.querySelector(".keyU");
        keyU.style.backgroundColor = "black";
}








document.addEventListener("keydown", function (event) {
    if (event.code === "KeyA") {
        resetBgColor();
        let pressA = document.querySelector(".keyA");
        pressA.style.backgroundColor = "aqua";
        let NoteA = new Audio("notes/A.mp3");
        NoteA.play()}
    else if (event.code === "KeyS") {
        resetBgColor();
        let pressS = document.querySelector(".keyS");
        pressS.style.backgroundColor = "aqua";
        let NoteS = new Audio("notes/S.mp3");
        NoteS.play()}
    else if (event.code === "KeyD") {
        resetBgColor();
        let pressS = document.querySelector(".keyD");
        pressS.style.backgroundColor = "aqua";
        let NoteD = new Audio("notes/D.mp3");
        NoteD.play()}
    else if (event.code === "KeyF") {
        resetBgColor();
        let pressS = document.querySelector(".keyF");
        pressS.style.backgroundColor = "aqua";
        let NoteF = new Audio("notes/F.mp3");
        NoteF.play()}
    else if (event.code === "KeyG") {
        resetBgColor();
        let pressS = document.querySelector(".keyG");
        pressS.style.backgroundColor = "aqua";
        let NoteG = new Audio("notes/G.mp3");
        NoteG.play()}
    else if (event.code === "KeyH") {
        resetBgColor();
        let pressS = document.querySelector(".keyH");
        pressS.style.backgroundColor = "aqua";
        let NoteH = new Audio("notes/H.mp3");
        NoteH.play()}
    else if (event.code === "KeyJ") {
        resetBgColor();
        let pressS = document.querySelector(".keyJ");
        pressS.style.backgroundColor = "aqua";
        let NoteJ = new Audio("notes/J.mp3");
        NoteJ.play()}
    else if (event.code === "KeyW") {
        resetBgColor();
        let pressS = document.querySelector(".keyW");
        pressS.style.backgroundColor = "aqua";
        let NoteW = new Audio("notes/W.mp3");
        NoteW.play()}
    else if (event.code === "KeyE") {
        resetBgColor();
        let pressS = document.querySelector(".keyE");
        pressS.style.backgroundColor = "aqua";
        let NoteE = new Audio("notes/E.mp3");
        NoteE.play()}
    else if (event.code === "KeyT") {
        resetBgColor();
        let pressS = document.querySelector(".keyT");
        pressS.style.backgroundColor = "aqua";
        let NoteT = new Audio("notes/T.mp3");
        NoteT.play()}
    else if (event.code === "KeyY") {
        resetBgColor();
        let pressS = document.querySelector(".keyY");
        pressS.style.backgroundColor = "aqua";
        let NoteY = new Audio("notes/Y.mp3");
        NoteY.play()}
    else if (event.code === "KeyU") {
        resetBgColor();
        let pressS = document.querySelector(".keyU");
        pressS.style.backgroundColor = "aqua";
        let NoteU = new Audio("notes/U.mp3");
        NoteU.play()}
    else{
        console.log("fuck you")
    }
});
document.addEventListener("keyup", function (event) {
    if (event.code === "KeyA") {
        resetBgColor();}
    else if (event.code === "KeyS") {
        resetBgColor();}
    else if (event.code === "KeyD") {
        resetBgColor();}
    else if (event.code === "KeyF") {
        resetBgColor();}
    else if (event.code === "KeyG") {
        resetBgColor();}
    else if (event.code === "KeyH") {
        resetBgColor();}
    else if (event.code === "KeyJ") {
        resetBgColor();}
    else if (event.code === "KeyW") {
        resetBgColor();}
    else if (event.code === "KeyE") {
        resetBgColor();}
    else if (event.code === "KeyT") {
        resetBgColor();}
    else if (event.code === "KeyY") {
        resetBgColor();}
    else if (event.code === "KeyU") {
        resetBgColor();}
    else {
        console.log("fuck you")
    }
})
