/* eslint-disable no-unused-vars */
const $buttonSection = document.getElementById('button-section')
const $gameBoard = document.getElementById('game-board')
const right = 'right'

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
const $myCar = createElement('div', {class:'car'}, ':D')
const $startButton = createElement('button', {type:'button', class: 'start-button'}, 'Start Car')


function renderButton(button) {
  return $buttonSection.appendChild(button)
}

function renderStartButton() {
    clickTostartCar(event)
  return $buttonSection.appendChild($startButton)

}

function clickToBegin() {
  $beginButton.addEventListener('click', function() {
    $beginButton.classList.add('hidden')
    renderStartButton()
    $gameBoard.appendChild($myCar)
  })
}

function clickTostartCar(event) {
  $startButton.addEventListener('click', moveByIntervals())
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
    this.raceCar.style.cssText = 'transform: translateX('+ this.location[0] +'rem)'
  }
}

const car = new Car($myCar, 'right', 1, [0, 0])

function moveByIntervals() {
  const intervalId = setInterval(()=> {
    if (car.location[0] < 68 ) {
      car.move()
    }
    else clearInterval(intervalId)
  }, 500)
}
