


export default class Job{
    
    constructor({
        company,
        position,
        salary,
        logo,
        description
    })
    
    {
        this.company = company
        this.position = position
        this.salary = salary
        this.logo = logo || "//placehold.it/200x200"
        this.description = description || "No job description"
    }

    get Template() {
        return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="card bg-light shadow">
          <img src="${this.logo}" class="w-100" alt="Company Logo">
          <div class="p-3">
              <div class="text-center">
                  <p><b>${this.company} - ${this.position}</b></p>
              </div>
              <p>${this.description}</p>
              <p><em>$${this.salary} yearly</em></p>
          </div>
      </div>
    </div>
    `
    
    }
}