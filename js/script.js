
let allbooks = document.querySelector('.allbooks');
let childAllbooks = allbooks.childNodes;
console.log(childAllbooks);
let nobooks = document.createElement('div');
if (childAllbooks.length <= 1) {
   nobooks.classList.add('allbooks__noboks');
   allbooks.appendChild(nobooks);
} else if (childAllbooks.length > 1){
   allbooks.removeChild(nobooks);
}
console.log(allbooks);
