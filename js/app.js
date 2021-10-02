/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/





/**
 * Define Global Variables
 * 
*/
const allSec = document.querySelectorAll('section');

const navUl = document.querySelector('#navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
allSec.forEach(function(item){
    const listItem = document.createElement('li');
    //make listItem a child of navUl
    navUl.appendChild(listItem);
    listItem.innerText = item.getAttribute('data-nav');
    // to edit the style with css class and make the link clickable
    listItem.innerHTML = `<a href="#${item.getAttribute('id')}" class= "menu__link">${item.getAttribute('data-nav')}</a>`;

   
})
// Add class 'active' to section when near top of viewport

// using reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

let isActive = function(sec) {
    let distance = sec.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  document.addEventListener('scroll', function(event) {
    allSec.forEach(function(act) {
        if (isActive(act)) {
          act.classList.add("your-active-class");
        }
    });
    }, false);


// Scroll to anchor ID using scrollTO event

// scroll smooth in the css file

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


