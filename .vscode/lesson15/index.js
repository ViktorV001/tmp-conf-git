// Add element
// 1 step
let newElement = document.createElement('li');
console.log(newElement);
// 2 step
newElement.textContent = "Your first element";
console.log(newElement);
// 3 step
let list = document.querySelector('.list');
//list.append(newElement);
//list.prepend(newElement); чтобы пункт вверх перенешся в списке
list.after(newElement) //чтобы он вышел из списка
// list.before(newElement);
