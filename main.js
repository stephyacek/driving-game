/* eslint-disable no-unused-vars */

const $buttonSection = document.getElementById('button-section')
const $gameBoard = document.getElementById('game-board')
let stopCar = false
const up = 'up'
const down = 'down'
const left = 'left'
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
const $startButton = createElement('button', {type:'button', class: 'start-button'}, 'Start')
const $stopButton = createElement('button', {type:'button', class: 'stop-button'}, 'Stop')

function renderButton(button) {
  return $buttonSection.appendChild(button)
}

function renderStartButton() {
    clickToStartCar(event)
    clickToStopCar(event)
    keydownArrows()
  return $buttonSection.appendChild($startButton)
}

function renderStopButton() {
  return $buttonSection.appendChild($stopButton)
}

function clickToBegin() {
  $beginButton.addEventListener('click', function() {
    $beginButton.classList.add('hidden')
    renderStartButton()
    renderStopButton()
    $gameBoard.appendChild($myCar)
  })
}

function clickToStartCar(event) {
  $startButton.addEventListener('click', moveByIntervals)
}

function keydownArrows() {
  document.body.addEventListener('keydown', (event) => {
    maneuverWithArrows(event)
  })
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
      case up:
        this.location[1] -= this.speed
        break
      case down:
        this.location[1] += this.speed
        break
      case left:
        this.location[0] -= this.speed
        break
      case right:
        this.location[0] += this.speed
    }
    this.raceCar.style.cssText = 'transform: translate('+ this.location[0] +'rem,' + this.location[1] +'rem)'
  }
}

const car = new Car($myCar, 'right', 0.5, [0, 0])

let intervalId = 0

function moveByIntervals() {
  stopCar = false
  intervalId = setInterval(()=> {
    if (car.location[0] > 67 || car.location[1] > 29 || stopCar) {
      stopMoveByIntervals()
    }
    else (car.move())
  }, 100)
}

function clickToStopCar(event) {
  $stopButton.addEventListener('click', stopMoveByIntervals)
}

function stopMoveByIntervals() {
  stopCar = true
  clearInterval(intervalId)
}

function maneuverWithArrows(event) {
  event.preventDefault()
  const arrow = event.key

    switch (arrow) {
      case 'ArrowUp':
        car.turn('up')
        break
      case 'ArrowDown':
        car.turn('down')
        break
      case 'ArrowLeft':
        car.turn('left')
        break
      case 'ArrowRight':
        car.turn('right')
        break
    }

}
