
let allbooks = document.querySelector('.allbooks');
let childAllbooks = allbooks.childNodes;
function createNobooks(){
   let nobooks = document.createElement('div');
   nobooks.classList.add('allbooks__nobooks');
   allbooks.appendChild(nobooks);
   let paragraph = document.createElement('p');
   paragraph.classList.add('allbooks__nobooks-text');
   nobooks.appendChild(paragraph);
   paragraph.innerText = 'Ваша библиотека пуста'
}
let nobooks = document.createElement('div');
if (childAllbooks.length <= 1) {
   createNobooks();
   // nobooks.classList.add('allbooks__noboks');
   // allbooks.appendChild(nobooks);
} else if (childAllbooks.length > 1){
   allbooks.removeChild(nobooks);
}

