const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
  ];

  //elige una palabra random del array
function randomWords(words){
    let random = Math.floor(Math.random() * words.length);
    return words[random]
};

let palabraAleatoria = randomWords(words);
let time = 10;
let score = 0;

//le damos contenido al h1 
function addToDOM(){
let h1 = document.querySelector('#randomWord');
return h1.textContent = palabraAleatoria;
}
addToDOM();

//creamos un evento para comparar las palabras
let input = document.querySelector('#text');

input.addEventListener('input', function(e){
  let palabraIngresada = input.value;
  if(palabraIngresada === palabraAleatoria){
    let suma3S = document.querySelector('#timeSpan');
    suma3S.innerHTML = `${time+=3}s`;
    input.value = '';
    palabraAleatoria = randomWords(words);   
    addToDOM();
    updateScore();
  }
})

//manipular el tiempo

function actualizarTiempo(){
  
    document.querySelector('#timeSpan').innerHTML = `${time -= 1}s`;
  
    if(time === 0){
    clearInterval(timeInterval);
    gameOver();
  }
}

let timeInterval = setInterval(actualizarTiempo, 1000);

//suma 1 puto por cada palabra correcta
function updateScore(){
  document.querySelector('#score').innerHTML=score+=1
}

//fin del juego cuando se acaba el tiempo
function gameOver(){
  let endGame = document.querySelector('#end-game-container');
  let h2 = document.createElement('h2');
  h2.textContent = 'Time out';
  let para = document.createElement('p');
  para.textContent = `Su puntaje es: ${score}`;
  let boton = document.createElement('button')
  boton.setAttribute('onclick', 'location.reload()');
  boton.textContent = 'Volvé a empezar';

  endGame.appendChild(h2);
  endGame.appendChild(para);
  endGame.appendChild(boton);

  document.querySelector('.container').removeChild(document.querySelector('.main'))
}
