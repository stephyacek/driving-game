/* eslint-disable no-unused-vars */
const $gameBoard = document.getElementById('game-board')
const right = 'right'

document.addEventListener('DOMContentLoaded', function () {
  renderButton($beginButton)
  clickToBegin()
  //add keydown eventListener for move
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
const car = new Car($myCar, 'right', '1', [0, 0])

function clickToBegin() {
  $beginButton.addEventListener('click', function() {
    $beginButton.classList.add('hidden')
    $gameBoard.appendChild($myCar)
  })
}

function keyPressEvent(event) {
  //get key pressed here
  switch(keypress) {
    case right:
    car.turn(right)
  }

}
class Car {
  constructor(raceCar, direction, speed, location) {
    this.raceCar = raceCar
    this.direction = direction
    this.speed = speed
    this.location = location
  }
  turn(direction) {
    this.direction = direction
  }
  accelerate(speed) {
    this.speed += speed
  }
  move() {
    switch (this.direction) {
      case 'up':
        this.location[1] -= this.speed
        break
      case 'down':
        this.location[1] += this.speed
        break
      case 'left':
        this.location[0] -= this.speed
        break
      case right:
        this.location[0] += this.speed
    }
  }
}
