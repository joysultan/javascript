const liCollection = document.getElementsByTagName('li');
for(const li of liCollection){
    // console.log(li.innerText);
}
const dom = document.querySelector('#dom-title');
// console.log(dom);


const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.backgroundColor = 'yellow';
    section.style.marginBottom = '10px';
    section.style.padding = '20px';
    section.style.borderRadius = '10px'
    section.style.color = 'black';
    section.classList.add('text-center')
    
}

const menu = document.getElementById('menu');
menu.style.backgroundColor = 'lightgray';

const fruits = document.getElementById('fruit');
const li = document.createElement('li');
li.innerText = 'lemon';
fruits.appendChild(li);









