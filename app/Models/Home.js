


export default class Home {
    constructor({
        bedrooms,
        bathrooms,
        levels,
        price,
        description,
        imgUrl,
        year,
        id
    })
    {
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.levels = levels
        this.year = year
        this.price = price
        this.description = description
        this.imgUrl = imgUrl || "//placehold.it/200x200"
        this.id = id
    }

    get Template() {
        return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="card bg-light shadow">
          <div class="p-3">
           <img src="${this.imgUrl}" class="w-100" alt="house image">
              <div class="text-center">
                  <p>Built in ${this.year}</p>
                  <p><b>This is a ${this.bedrooms} bed - ${this.bathrooms} bath - ${this.levels} story home</b></p>
              </div>
              <p>${this.description}</p>
              <p><em>$${this.price} yearly</em></p>
              <button class="btn btn-warning btn-block" onclick="app.jobsController.deleteJob('${this.id}')"> delete </button>
          </div>
      </div>
    </div>
        `
    }
}