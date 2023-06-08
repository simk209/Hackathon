// let author
// let quote;

const quote = document.querySelector('.quotes');
const author = document.querySelector('.author');
const button = document.querySelector('.button');

button.addEventListener('click', onclick);
onclick();
function onclick() {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((response) => {
      quote.innerText = response.content;
      author.innerText = response.author;
    });
}
console.log('test');
