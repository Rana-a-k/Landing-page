# Landing Page Project

## Table of Contents

Firstly, I defined the global variables: allSec (all sections), navUl (navigation bar list)

secondly, I built the navigation bar
    I used the forEach loop to create list items as many as sections in the html.
    Then I append the list items(listItem) to the navigation bar(navUl).
    Then, I used data-nav and the innerHTML to edit the style and make the link clickable.

thirdly, make the section in viewport active
    using reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect 
    to describe the position and size in the viewport.
    Then, I used th addEventListener and forEach to make the section in viewport active using the css class "your-active-class".

finaly, I used the css file to make the scroll smooth
    using the scroll-behavior: smooth to the html

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.
