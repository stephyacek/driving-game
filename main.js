/* eslint-disable no-unused-vars */
const $gameBoard = document.getElementById('game-board')

document.addEventListener('DOMContentLoaded', function () {
  renderButton($beginButton)
  clickToBegin()
})

function createElement(tagName, attributes, content) {
    const $element = document.createElement(tagName)
    for (var key in attributes) {
      $element.setAttribute(key, attributes[key])
    }
    $element.textContent = content
  return $element
}

const $beginButton = createElement('button', {type:'button', class:'begin-button'}, 'Begin Game')

function renderButton(button) {
  return $gameBoard.appendChild(button)
}

const $myCar = createElement('div', {class:'car'}, ':D')

function clickToBegin() {
  $beginButton.addEventListener('click', function() {
    $beginButton.classList.add('hidden')
    $gameBoard.appendChild($myCar)
  })
}
