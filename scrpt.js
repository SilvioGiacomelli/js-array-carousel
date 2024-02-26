const itemsWrapper = document.querySelector(".items-wrapper");
const up = document.querySelector(".up");
const down = document.querySelector(".down");

let counterImg = 0;
//Costante array immagini
const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp',
]

//Ciclo immagine
for(let i=0; i < images.length; i++){
  const img = images[i];
  itemsWrapper.innerHTML += `<img class="img hide" src="${img}">`;
}

const itemsCollection = document.getElementsByClassName("img");

//Rimuovo la classe hide al primo elemento
itemsCollection[0].classList.remove("hide");



//
up.addEventListener('click', function(){
  itemsCollection[counterImg--].classList.add("hide");
  itemsCollection[counterImg].classList.remove("hide");

  if (counterImg === 0){
    up.classList.add("hide");
  }
})
//
down.addEventListener('click', function(){
  itemsCollection[counterImg++].classList.add("hide");
  itemsCollection[counterImg].classList.remove("hide");
  
  if (counterImg === images.lenght - 1){
    up.classList.remove("hide");
  }  
})