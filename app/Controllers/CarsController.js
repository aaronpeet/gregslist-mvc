import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"

function _draw() {
  let template = ''
  ProxyState.cars.forEach(car => {
    template += car.Template
  })
  document.getElementById('cars').innerHTML = template
}

export default class CarsController {
  constructor() {
    // When 'cars' changes in the State run the _draw method
    ProxyState.on('cars', _draw)

    // This only runs when the app first loads because data is already in the state
    _draw()
  }

  async createCar() {
    try {
      event.preventDefault()
      let form = event.target
      let rawCar = {
        make: form.make.value,
        model: form.model.value,
        year: form.year.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
      }
      await carsService.createCar(rawCar)
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  deleteCar(carId) {
    console.log('you are trying to delete a car with the id of', carId)
    carsService.deleteCar(carId)
  }

  bidCar(carId) {
    carsService.bidCar(carId)
    console.log('bid excepted')
  }
}