function displayAnswer() {
  let parent_element = this.parentElement;
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

function addEventOnClick() {
  let elements = document.getElementsByClassName('question-container');
  let elementArray = [...elements];

  elementArray.forEach((element) => {
    element.addEventListener('click', displayAnswer, false);
  });
}

addEventOnClick();
