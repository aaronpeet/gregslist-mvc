import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"
import { api } from "./AxiosService.js"


class CarsService {
  constructor() {
    this.getAllCars()
  }

  async createCar(rawCar) {
    const res = await api.post('cars', rawCar)
  ProxyState.cars = [...ProxyState.cars, new Car(res.data)]
}

  async getAllCars() {
    const res = await api.get('cars')
    console.log('got cars', res.data)

    ProxyState.cars = res.data.map(car => new Car(car))
  }

  async deleteCar(carId) {
    const res = await api.delete('cars/' + carId)
    console.log(res.data)
    ProxyState.cars = ProxyState.cars.filter(c => c.id != carId)
  }
 
  async bidCar(carId) {
    let foundCar = ProxyState.cars.find(c => c.id == carId)
    foundCar.price += 100
    const res = await api.put('cars/' + carId, foundCar)
    ProxyState.cars = ProxyState.cars
  }
}


// Singleton Only one instance is ever made and the same instance is always exported
export const carsService = new CarsService()