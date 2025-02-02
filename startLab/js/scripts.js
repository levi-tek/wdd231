const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const dialogBox = document.getElementById("dialogBox");
const dialogBoxText = document.getElementById("dialogBoxText");


openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "One Apple contains 95 calories"
});

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "One Orange contains 45 calories"
});

openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "One Bananna contains 205 calories"
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});