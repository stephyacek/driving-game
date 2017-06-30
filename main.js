/* eslint-disable no-unused-vars */

const $buttonSection = document.getElementById('button-section')
const $gameBoard = document.getElementById('game-board')
let stopCar = false
const up = 'up'
const down = 'down'
const left = 'left'
const right = 'right'


// Trying to not make whole page move with key down functions
// document.addEventListener("keydown", function pageMove (wholeDoc) {
//     if([37, 38, 39, 40].indexOf(wholeDoc.keyCode) > -1) {
//         wholeDoc.preventDefault()
//     }
// }, false)

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
const $restartButton = createElement('button', {type: 'button', class:'restart-button'}, 'Restart')

function renderButton(button) {
  return $buttonSection.appendChild(button)
}

function renderStartButton() {
    clickToStartCar(event)
    clickToStopCar(event)
  return $buttonSection.appendChild($startButton)
}

function renderStopButton() {
  return $buttonSection.appendChild($stopButton)
}

function renderRestartButton() {
  return $buttonSection.appendChild($restartButton)
}

function clickToBegin() {
  $beginButton.addEventListener('click', function() {
    $beginButton.classList.add('hidden')
    renderStartButton()
    renderStopButton()
    renderRestartButton()
    $gameBoard.appendChild($myCar)
  })
}

function clickToStartCar(event) {
  $startButton.addEventListener('click', moveByIntervals)
}

function keydownArrows(event) {
  $gameBoard.addEventListener('keydown', maneuverWithArrows($myCar))
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
  reset() {
    this.location = [0, 0]
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
    this.raceCar.style.cssText = 'transform: translateY('+ this.location[1] -'rem)'
    this.raceCar.style.cssText = 'transform: translateY('+ this.location[1] +'rem)'
    this.raceCar.style.cssText = 'transform: translateX('+ this.location[0] -'rem)'
    this.raceCar.style.cssText = 'transform: translateX('+ this.location[0] +'rem)'
  }
}

const car = new Car($myCar, 'right', 0.5, [0, 0])

let intervalId = 0

function moveByIntervals() {
  stopCar = false
  intervalId = setInterval(()=> {
    if (car.location[0] > 67 || stopCar) {
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

function clickToRestart(event) {
  $restartButton.addEventListener('click', () => {
    return car.restart()
  })
}

function maneuverWithArrows($myCar) {
  let arrow = event.key
    switch ($myCar.direction) {
      case arrow = 38:
        $myCar.direction = 'up'
        break
      case arrow = 40:
        $myCar.direction = 'down'
        break
      case arrow = 37:
        $myCar.direction = 'left'
        break
      case arrow = 39:
        $myCar.direction = 'right'
    }
  return move($myCar.direction)
}


//29rem limit y axis
