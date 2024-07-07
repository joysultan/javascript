
const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h2 = document.createElement('h2');
h2.innerText = 'my favourite dishes';
section.appendChild(h2);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biryani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'salad';
ul.appendChild(li3);
const li4 = document.createElement('li');
li4.innerText = 'firni';
ul.appendChild(li4);
section.appendChild(ul);
mainContainer.appendChild(section);