let myColorContainer = document.getElementById('myDiv');
let button = document.getElementById('btn');

let i = 0;
let colorArr = ["green", "red", "yellow", "blue", "purple", "pink", "violet", "gray"];
let len = colorArr.length;

button.addEventListener('click', (event) => {
    myColorContainer.style.background = colorArr[i];
    i++;
    if (i == len) {
        i = 0;
    }
})