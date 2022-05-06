/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defa = document.querySelector('#default');
const desert = document.querySelector('#desert');
const ocean = document.querySelector('#ocean');
const contrast = document.querySelector('#high-contrast');

defa.addEventListener('click', event => {
  document.querySelector('body').className = "";
});

desert.addEventListener('click', event => {
   document.querySelector('body').className = "desert";
 });

 ocean.addEventListener('click', event => {
   document.querySelector('body').className = "ocean";
 });

 contrast.addEventListener('click', event => {
   document.querySelector('body').className = "high-contrast";
 });