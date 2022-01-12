'use strict';

// STYLES

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// :root === document === document.documentElement
document.documentElement.style.setProperty('--color-primary', 'orangered');

// ATTRIBUTES
// In JavaScript we can access and change the attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-Standart
console.log(logo.designer);

console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));


const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
// the attribute in the HTML has to start with 'data-'
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use it -  this will overwrite all the existing classes and also it allow us to up only one class.
logo.className = 'jons';
