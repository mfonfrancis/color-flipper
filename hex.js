const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let hexValue = "#";
    for (let i = 0; i < 6; i++) {
        hexValue += hex[generateRandomNumber()];
    }


    console.log(hexValue);
    color.textContent = hexValue;
    document.body.style.backgroundColor = hexValue;

});

function generateRandomNumber() {

    return Math.floor(Math.random() * hex.length);
}