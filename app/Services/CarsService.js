import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"
import { api } from "./AxiosService.js"


class CarsService {
  constructor() {
    this.getAllCars()
  }

  createCar(rawCar) {
    ProxyState.cars = [...ProxyState.cars, new Car(rawCar)]
  }

  async getAllCars() {
    const res = await api.get('cars')
    console.log('got cars', res.data)

    ProxyState.cars = res.data.map(car => new Car(car))
  }
}


// Singleton Only one instance is ever made and the same instance is always exported
export const carsService = new CarsService()