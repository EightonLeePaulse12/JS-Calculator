// Coded by Eighton-Lee Paulse

// Defining variables
const buttons = document.querySelectorAll("#buttons");
const numbers = document.querySelectorAll('.buttons');
const display = document.getElementById("textGoesHere");
const clear = document.querySelector(".bozo");
const equal = document.querySelector(".equal");
const goBack = document.querySelector(".fa-delete-left");
const point = document.querySelector(".dot");
const add = document.querySelector('.plus');
const subtract = document.querySelector('.minus');
const times = document.querySelector('.multiply')
const divide = document.querySelector('.division')
let checker = []

// functions

// Click numbers
numbers.forEach((btnNumb)=>{
    btnNumb.addEventListener('click', (e)=>{
        display.value += e.target.innerText;
        if(e.target.innerText == '+'){
            checker = [];
        }else if(e.target.innerText == '-'){
            checker = []
        }else if(e.target.innerText == '/'){
            checker = []
        }else if (e.target.innerText == '*'){
            checker = []
        }else if(e.target.innerText == '%'){
            checker = []
        }else if(e.target.innerText === '='){
            checker = []
        }
    })
})

// Dot repetition
point.addEventListener('click', (e) => {
    let temp = display.value.split('');
    console.log(temp);
    if(temp[temp.length-1] == '.'){
        return '';
    } else {
        display.value += '.'
    }
    
})

// + repetition
add.addEventListener('click', (e) => {
    let temp = display.value.split('');
    console.log(temp);
    if(temp[temp.length-1] == '+'){
        return;
    } else {
        display.value += '+'
    }
    
})

// - repitition

subtract.addEventListener('click', (e) => {
    let temp = display.value.split('');
    console.log(temp);
    if(temp[temp.length-1] == '-'){
        return;
    } else {
        display.value += '-'
    }
    
})

// x repitition

times.addEventListener('click', (e) => {
    let temp = display.value.split('');
    console.log(temp);
    if(temp[temp.length-1] == '*'){
        return;
    } else {
        display.value += '*'
    }
    
})

// division repitition

divide.addEventListener('click', (e) => {
    let temp = display.value.split('');
    console.log(temp);
    if(temp[temp.length-1] == '/'){
        return;
    } else {
        display.value += '/'
    }
    
})

// Equal

equal.addEventListener('click', (e)=>{
    let result = eval(display.value)
    display.value = result.toFixed(2)
    if (result !== ''){
        console.log(result)
    }
})


// Backspace

const goOneBack = goBack.addEventListener('click', ()=>{
    let output = display.value;
    display.value = output.slice(0,-1)
})

// AC
clear.addEventListener('click',()=>{
    display.value = ''
    checker = [];
})


document.addEventListener("keydown", function(event) {
    console.log(`Key pressed: ${event.key}`);
    if(event.key == 0){
        display.value += 0
    }else if(event.key == 1){
        display.value += 1
    }else if(event.key == 2){
        display.value += 2
    }else if(event.key == 3){
        display.value += 3
    }else if(event.key == 4){
        display.value += 4
    }else if(event.key == 5){
        display.value += 5
    }else if(event.key == 6){
        display.value += 6
    }else if(event.key == 7){
        display.value += 7
    }else if(event.key == 8){
        display.value += 8
    }else if(event.key == 9){
        display.value += 9
    }else if(event.key == 'Backspace'){
        display.value = display.value.slice(0,-1)
    }else if(event.key == '+'){
        display.value += "+" 
    }else if(event.key == 'Enter'){
        let result = eval(display.value)
        display.value = result.toFixed(2)
    }else if(event.key == '%'){
        display.value += '%'
    }else if(event.key == "Delete"){
        display.value = ''
    }else if(event.key == '/'){
        display.value += '/'
    }else if(event.key == "*"){
        display.value += '*'
    }else if(event.key == '-'){
        display.value += '-'
    }else if(event.key == '.' || ','){
        display.value += '.' 
        console.log(notation)
    }else{
        display.value = ''
    }
  });
  