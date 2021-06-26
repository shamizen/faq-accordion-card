function displayAnswer(id) {
  let element = document.getElementById(id);
  let parent_element = element.parentElement;
  if (parent_element.className === 'faq') {
    setAllClassName(parent_element, 'faq'); //set all class name to 'faq' | comment this line if you want to show more than 1 answer
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
