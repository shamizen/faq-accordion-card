# FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: [GitHub](https://github.com/shamizen/faq-accordion-card)
- Live Site URL: [github-pages](https://shamizen.github.io/faq-accordion-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

```css
body {
  background-image: linear-gradient(to top, var(--soft-blue), var(--soft-violet));
}
```

```js
function displayAnswer(id) {
  let element = document.getElementById(id);
  let parent_element = element.parentElement;
  if (parent_element.className === 'faq') {
    setAllClassName(parent_element, 'faq'); //set all class name to 'faq'
    parent_element.classList.add('display-answer');
  } else if (parent_element.className === 'faq display-answer') {
    parent_element.className = 'faq';
  }
}

function setAllClassName(element, className) {
  for (let index = 0; index < element.parentElement.childElementCount; index++) {
    element.parentElement.children[index].className = className;
  }
}
```

## Author

- Frontend Mentor - [@shamizen](https://www.frontendmentor.io/profile/shamizen)
