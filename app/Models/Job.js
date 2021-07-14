


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
}