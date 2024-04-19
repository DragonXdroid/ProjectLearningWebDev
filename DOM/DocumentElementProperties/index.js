let output;

// document.all is deprecated
output = document.all;
output = document.all[11];
output = document.all.length;

// Everything in the html tags
output = document.documentElement;

// Head and body tags
output = document.head;
output = document.body;

// HTMLCollection of everything in head/body
output = document.head.children;
output = document.body.children;

// Random properties
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

// Get all forms
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// Change a form id
document.forms[0].id = 'new-id';

// Get all links
output = document.links;
output = document.links[0];
output = document.links[0].href;
output = document.links[0].href = 'https://facebook.com';
output = document.links[0].id = 'google-link';
output = document.links[0].className = 'google-class';
output = document.links[0].classList = 'go'; 
console.log(document.links[0])

// Get all images
output = document.images;
output = document.images[0];
output = document.images[0].src;

// HTMLCollection is similar to an array in that we can access its elements with indexes. However, 
// it is not iterable because it does not implement the Iterable protocol. This means we cannot use 
// built-in JavaScript methods like forEach directly on an HTMLCollection. To work around this limitation, 
// we can convert the HTMLCollection into an array using Array.from(). This allows us to use array methods like 
// forEach to iterate over its elements.

const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);