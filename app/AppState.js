import Job from "./Models/Job.js"
import Car from "./Models/Car.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Home from "./Models/Home.js"

class AppState extends EventEmitter {

  /** @type {Car[]} */
  cars = [
    new Car({
      make: 'Ford',
      model: 'Pinto',
      year: 1987,
      price: 1200,
      description: 'This Car is HOT!',
      imgUrl: 'https://blog.automedicsafrica.com/wp-content/uploads/2015/08/Impala-vs-Pinto-750x547.jpg'
    }),
    new Car({
      make: 'VW',
      model: 'Gremlin',
      year: 1988,
      price: 3400,
      description: 'Lime Green! You gonna love it',
      imgUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/07/Gremlin-X.jpg'
    })
  ]

  /** @type {Job[]} */
  jobs = [
    new Job({
      company: 'Harris Rebar',
      jobTitle: 'Shearhand',
      rate: 40000,
      description: 'Not a great work enviornment. Be prepared to break-down your body and not be able to enjoy your retirement!',
      hours: 40
    }),
    
    new Job({
      company: 'Admiral Beverage',
      jobTitle: 'Labeler',
      rate: 30000,
      description: 'Try to stay awake during your 12 hour night shift! This place has it all; zero fun, zero PTO and only one fatality so far this year.',
      hours: 40
    })
  ]

  /**@type {Home[]} */
  homes = [
    new Home ({
      price: 500000,
      description: 'This beautiful 1-bedroom 0-bathroom cardboard box is the perfect fixer-upper!',
      imgUrl: '//placehold.it/200x200'
    }),

    new Home ({
      price: 800000,
      description: 'Come take a look at this beautiful, 6-bedroom 12-bathroom manufactured home on .001 acres. Own a little slice of Meridian.',
      imgUrl: '//placehold.it/200x200'
    })
  ]


}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
