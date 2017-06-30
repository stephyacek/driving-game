/* eslint-disable no-unused-vars */
const $gameBoard = document.getElementById('game-board')
const right = 'right'

document.addEventListener('DOMContentLoaded', function () {
  renderButton($beginButton)
  clickToBegin()
  keyPressEvent(event)
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

function keyPressEvent(event) {
  document.addEventListener('keydown', function () {
    let key = event.keyCode
    if (key = 39) {
      setInterval(()=> {
        car.move(right)
      }, 2000)
    }
    else (alert('Hit arrow right to begin'))
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

const car = new Car($myCar, 'right', '1', [0, 0])
