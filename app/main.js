import JobsController from "./Controllers/JobsController.js";
import CarsController from "./Controllers/CarsController.js";

class App {
  // valuesController = new ValuesController()
  carsController = new CarsController()

  jobsController = new JobsController()

}

window["app"] = new App();
