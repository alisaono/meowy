export class Door extends HTMLDivElement {
  constructor() {
    super()
    super.setAttribute('class', 'door')

    let image = document.createElement('img')
    image.src = './img/door_with_paw.svg'
    super.appendChild(image)
    this.image = image
  }

  animate() {
    this.image.animate({
      transform: ['rotate(5deg)', 'rotate(-3deg)', 'rotate(0)'],
      easing: ['ease-in']
    }, {
      duration: 300,
      fill: 'forwards'
    })
  }
}
