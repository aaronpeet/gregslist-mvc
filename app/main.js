import JobsController from "./Controllers/JobsController.js";
import CarsController from "./Controllers/CarsController.js";
import HomesController from "./Controllers/HomesController.js";

class App {
  // valuesController = new ValuesController()
  carsController = new CarsController()

  jobsController = new JobsController()

  homesController = new HomesController()

}

window["app"] = new App();
