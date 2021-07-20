


export default class Job {
    
    constructor({
        hours,
        company,
        jobTitle,
        rate,
        description,
        id
    })
    
    {
        this.hours = hours
        this.company = company
        this.jobTitle = jobTitle
        this.rate = rate
        this.description = description || "No job description"
        this.id = id
    }

    get Template() {
        return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="card bg-light shadow">
          <div class="p-3">
              <div class="text-center">
                  <p><b>${this.company} - ${this.jobTitle} - ${this.hours}</b></p>
              </div>
              <p>${this.description}</p>
              <p><em>$${this.rate} yearly</em></p>
              <button class="btn btn-warning btn-block" onclick="app.jobsController.deleteJob('${this.id}')"> delete </button>
          </div>
      </div>
    </div>
    `
    
    }
}