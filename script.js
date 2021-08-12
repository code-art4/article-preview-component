var share = document.querySelector(".share");
var shareContainer = document.querySelector(".share-container");
var overlay = document.querySelector(".overlay");

//Just trying to breach a gap.
//There are better ways of doing this though
var extraOverlays = document.querySelectorAll('#overlay');

function showShareButtons() {
    shareContainer.classList.toggle("active");
}

function ToggleShareContainer() {
    shareContainer.classList.remove("active");
}

for (let index = 0; index < extraOverlays.length; index++) {
    extraOverlays[index].addEventListener("click", ToggleShareContainer);
}

overlay.addEventListener("click", ToggleShareContainer);

share.addEventListener("click", showShareButtons);