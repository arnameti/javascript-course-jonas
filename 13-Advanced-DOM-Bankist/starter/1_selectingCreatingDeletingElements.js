'use strict';

// SELECTIN ELEMENTS

// If we want to apply CSS styles to the entire page we always need to select document.element.
// It is the entire html
console.log(document.documentElement);

console.log(document.head);

console.log(document.body);

const header = document.querySelector('.header');

// ------------------------------------------------------------------------------------
// Most Used

const allSection = document.querySelectorAll('.section');
console.log(allSection);
console.log('getElementById: ', document.getElementById('section--1'));
// ------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
// This method returns an HTML-Collection. That is different from a node-list, because an HTML-collection ist a so called life collection.
// That meeans that if the DOM changes thes this collection is also immediately updated automatically.
// The same does not happen with a node list.
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// This also returns a live html collection.
console.log(document.getElementsByClassName('btn'));
// ------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
// CREATING AND INSERTING ELEMENTS

// .insertAdjacentHTML

// this creates a DOM-Element and stores the element into the message.
// That element is not yet anywhere in the DOM. All this is, is a DOM object that we can use to do smoething on it, but it is not yet in the DOM itself.
// It is a object that represents a DOM-Element.
// We haveto manually insert it into the page.
const message = document.createElement('div');
// Adding a class:
message.classList.add('cookie-message');
// We can add text into the ELement. This inserts simply text. We can use this property to read and to set content.
// message.textContent = 'We use coockies for improved functionality and analytics.';
// We can also insert HTML. We can use this property to read and to set content.
message.innerHTML =
  'We use coockies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// prepanding basically adds the element as the first child of the header-element.
header.prepend(message);
// Adding as the last child of the header-element. A DOM-Element is unique. It can only exist at one place at a time.
header.append(message);

// Inserting multiple copies of the same element:
// header.append(message.cloneNode(true))

// header.before(message);
// header.after(message);
// ------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
// DELETE ELEMENTS

document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  // DOM traversing
  // message.parentElement.removeChild(message);
  message.remove();
})


// ------------------------------------------------------------------------------------
