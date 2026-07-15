// DOM.
// select a node/nodelist from DOM

// document.getElementbyID
let node = document.getElementById('name');
node.style.color = 'blue';
console.log(node.tagName);

node = document.getElementById('phone');
node.style.color = 'red';
node.id = 'telephone';

// document.getElementbyClassname
node = document.getElementsByClassName('topnav');
console.log(node); // a collection of nodes

// document.getElementbyTagName
node = document.getElementsByTagName('a');
// node.style.color = 'green';
for (nodeOne of node){
    nodeOne.style.color = 'black';
}

node = document.getElementsByTagName('label');
for (nodeOne of node){
    nodeOne.style.color = 'red';
}

// querySelector method (CSS selector)
// querySelector; querySelectorAll
node = document.querySelector('a');
node.style.color = 'yellow';

node =  document.querySelectorAll('a');
for (nodeOne of node){
    nodeOne.style.color = 'blue';
}

// use DOM selection method to change the content of elements
let node_h = document.querySelector('h2');
// node_h.innerHTML = 'Contact us now'; // high-risk way
node_h.textContent = 'Please contat us'; // safe way

// DOM manipulation method: create and insert new content
// step 1: create a text node
const text = document.createTextNode('I will get back to you asap.');

// step 2: create a new empty <h3> element
const newH = document.createElement('h3');

// step 3: add text into new h3
newH.appendChild(text);

// step 4: add h3 after h2.
const node_h2 = document.querySelector('h2');
node_h2.after(newH);

// add attributes to h3
const nodeH3 = document.querySelector('h3');
nodeH3.id = 'message';

// change font color for h3
let message = document.getElementById('message');
message.style.color = 'blue';

message = document.querySelector('#message');
message.style.color = 'green';




