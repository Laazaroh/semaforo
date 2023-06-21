const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0
let intervalID = null;


const trafficLight = (event) =>{
    clearInterval()
    turnOn[event.target.id]();
}
const nextIndex = () =>{
    if (colorIndex < 2){
        colorIndex++

    }else{
        colorIndex = 0;
    }
}

const changeColor = () =>{
    const colors = ['red', 'yellow', 'green'];
    let color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
    turnOn['automatic']();
}
const stopAutomatic = ( )=>{
    clearInterval(intervalID)
}
const turnOn ={
    'red': () => img.src ='./img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalID = setTimeout(changeColor, 600)
}


buttons.addEventListener('click', trafficLight)