
    

const display = document.querySelector(".expression_area");
const number = document.querySelectorAll('[id*=key]');

const changeDisplay = (text) => {
        display.textContent += text; 
}
const inserirNumero = (element) => changeDisplay(element.target.textContent)

number.forEach(number =>
    number.addEventListener('click', inserirNumero)

    );

const clearDisplay = () => {
    let clear = document.querySelector('#keyce');

    clear.addEventListener('click', () => {
        display.textContent = ''
    })
}

clearDisplay()