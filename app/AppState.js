import Job from "./Models/Job.js"
import Car from "./Models/Car.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import House from "./Models/House.js"

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
      position: 'Shearhand',
      salary: 40000,
      logo: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/b3a08e3211b313dd609d6af1645391d8',
      description: 'Not a great work enviornment. Be prepared to break-down your body and not be able to enjoy your retirement!'
    }),
    
    new Job({
      company: 'Admiral Beverage',
      position: 'Labeler',
      salary: 30000,
      logo: 'https://www.designyourway.net/blog/wp-content/uploads/2018/07/maxresdefault-1.jpg',
      description: 'Try to stay awake during your 12 hour night shift! This place has it all; zero fun, zero PTO and only one fatality so far this year.'
    })
  ]

  /**@type {House[]} */
  houses = [
    new House({
      realtor: 'Boise Realtors',
      price: 500000,
      description: 'This beautiful 1-bedroom 0-bathroom cardboard box is the perfect fixer-upper!'
      imgUrl: '//placehold.it/200x200'
    }),

    new House({
      realtor: 'Johnsons Meridian Homes',
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
