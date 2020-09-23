import { Door } from './Door.js'

customElements.define('cat-door', Door, { extends: 'div' })

window.onload = function() {
  setupDoors()
}

function setupDoors() {
  let doors = document.getElementById('doors').getElementsByClassName('door')
  for (let door of doors) {
    setupDoor(door)
  }
}

function setupDoor(door) {
  door.addEventListener('mouseenter', _ => door.animate(), false)
}
